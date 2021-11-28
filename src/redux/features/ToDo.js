const initialState = {
  todo: [],
  categories: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/fetch/fulfilled":
      return {
        ...state,
        todo: action.payload,
      }
    case "categories/fetch/fulfilled":
      return {
        ...state,
        categories: action.payload,
      }
    case "todo/delete/fulfilled": //кейс для удаления тудушки
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
      }

    case "todos/changing":
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item._id === action.payload) {
            return {
              ...item,
              changing: true,
            }
          }
          return item
        }),
      }

    case "todo/statusChange":
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item._id === action.payload.todoId) {
            return {
              ...item,
              category: action.payload.catId,
              changing: false,
            }
          }
          return item
        }),
      }

    default: {
      return state
    }
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "todo/fetch/fulfilled", payload: data })
      })
  }
}

export const fetchCategories = () => {
  return (dispatch) => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "categories/fetch/fulfilled", payload: data })
      })
  }
}

export const deleteTodo = (id) => {
  // удаление тудушки
  return (dispatch) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: "todo/delete/fulfilled",
          payload: id,
        })
      })
  }
}

export const statusChange = (todoId, catId) => {
  return (dispatch) => {
    dispatch({ type: "todos/changing", payload: todoId })

    fetch(`http://localhost:5000/todos/update/${todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category: catId }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: "todo/statusChange",
          payload: { todoId, catId },
        })
      })
  }
}
