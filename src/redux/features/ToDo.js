const initialState = {
  todo: [],
  categories: [],
    search: ""
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
        case "todo/search/fulfilled":
            return {
                ...state, search: action.payload
            }
        case "todo/add/fulfilled":
            return {
                ...state, todo: [...state.todo, action.payload]
            }
        default: {
            return state
        }
    }
  }
}

export const fetchTodos = () => {
  return (dispatch) => {
    fetch("http://localhost:6557/todos")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "todo/fetch/fulfilled", payload: data })
      })
  }
}

export const fetchCategories = () => {
    return (dispatch) => {
        fetch("http://localhost:6557/categories")
        .then((res) => res.json())
        .then((data) => {
            dispatch({type: "categories/fetch/fulfilled", payload: data})
        })
    }
}

export const deleteTodo = (id) => {   // удаление тудушки
    return (dispatch) => {
        fetch(`http://localhost:6557/todos/${id}`, {
            method: "DELETE"
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

export const searchTodo = (text) => { // поиск
    return (dispatch) => {
        dispatch({
            type: "todo/search/fulfilled",
            payload: text
        })
    }
}
export const addToDo = (ToDo) => {
    return (dispatch) => {
        fetch("http://localhost:6557/todos/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ text: ToDo.text, priority: ToDo.priority}),
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch({
                    type: "todo/add/fulfilled",
                    payload: data,
                });
            });
    };
};
