import React from "react"
import { useSelector } from "react-redux"

const ToDo = ({ id }) => {
  const todos = useSelector((state) => state.todo)

  console.log(todos)

  return todos.map((todo) =>
    todo.category === id ? (
      <div className="row g-0 mb-1">
        <div
          className={
            todo.priority === 3
              ? "col-1 card  mw-100 bg-danger"
              : todo.priority === 2
              ? "col-1 card  mw-100 bg-primary"
              : "col-1 card  mw-100 bg-success"
          }
        />
        <div className="col-11 card">
          <div className="card-body py-2">
            <p className="card-text">{todo.text}</p>
            <div className="d-flex justify-content-between">
              <div className="dropdown open">
                <span
                  className="btn btn-primary btn-sm dropdown-toggle"
                  type="button"
                  id="triggerId"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Статус
                </span>
                <div className="dropdown-menu" aria-labelledby="triggerId">
                  <button className="dropdown-item">В процессе</button>
                  <button className="dropdown-item">Отложено</button>
                  <button className="dropdown-item">Выполнено</button>
                </div>
              </div>
              {/* Кнопка для удаления(для Али) */}
              <span type="button" className="btn-outline-danger btn-sm">
                <i className="bi bi-trash" />
              </span>
            </div>
          </div>
        </div>
      </div>
    ) : (
      ""
    )
  )
}
//здесь должны быть карты Сатуева и перебор массива по ID который передали с помощью пропса
export default ToDo
