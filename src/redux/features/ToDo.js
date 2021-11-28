const initialState = {
  todo: [],
  categories: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "todo/fetch/fulfilled":
            return {
                ...state,
                todo: action.payload
            }
        case "categories/fetch/fulfilled":
            return {
                ...state,
                categories: action.payload
            }
        case "todo/delete/fulfilled": //кейс для удаления тудушки
            return {
                ...state,
                todo: state.todo.filter((item) => item.id !== action.payload)
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
            dispatch({type: "categories/fetch/fulfilled", payload: data})
        })
    }
}

export const deleteTodo = (id) => {   // удаление тудушки
    return (dispatch) => {
        fetch(`http://localhost:5500/todos/${id}`, {
            method: "DELETE"
        })
        .then((res) => res.json())
        .then((json) => {
            dispatch({
                type: "todo/delete/fulfilled",
                payload: id
            })
        })
      }
}
