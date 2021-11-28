import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { statusChange } from "../../redux/features/ToDo"

const ToDo = ({ id }) => {

  const search = useSelector((state => state.search))

  const todos = useSelector((state) => state.todo)
  const categories = useSelector((state) => state.categories)
  const dispatch = useDispatch()

  const handleEdit = () => alert()

  const handleChange = (todoId, catId) => dispatch(statusChange(todoId, catId))

  return todos.map((todo) =>
    todo.category === id && (todo.text.toLowerCase().includes(search.toLowerCase()))? (
      <div className="row g-0 mb-1 " key={todo._id}>
        <div
          className={
            todo.priority === 3
              ? "col-1 card  mw-100 bg-danger"
              : todo.priority === 2
              ? "col-1 card  mw-100 bg-primary"
              : "col-1 card  mw-100 bg-success"
          }
        />
        <div className="col-11 card ">
          <div className="card-body py-2">
            <p className="card-text">{todo.text}</p>
            <div className="d-flex justify-content-between">
              <div className="dropdown open">
                {todo.changing ? (
                  <span
                    className="btn btn-primary btn-sm dropdown-toggle"
                    type="button"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    Статус
                  </span>
                ) : (
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
                )}
                <div className="dropdown-menu" aria-labelledby="triggerId">
                  {categories.map((cat) =>
                    cat.name !== "Новое" ? (
                      <button
                        key={cat._id}
                        className="dropdown-item"
                        disabled={cat._id === id}
                        onClick={() => handleChange(todo._id, cat._id)}
                      >
                        {cat.name}
                      </button>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </div>
              <span
                type="button"
                className="btn-outline-primary btn-sm ms-auto"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever={todo.text}
              >
                <i className="bi bi-pencil"></i>
              </span>

              <div className="modal fade" id="exampleModal" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h6 className="modal-title">Изменить заметку</h6>
                      <span
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                      ></span>
                    </div>
                    <div className="modal-body">
                      <form>
                        <input type="text" className="form-control" />
                      </form>
                    </div>
                    <div className="modal-footer">
                      <span
                        type="button"
                        className="btn btn-primary"
                        onClick={handleEdit}
                      >
                        Изменить
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Кнопка для удаления(для Али) */}
              <span type="button" className="btn-outline-danger btn-sm ">

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
