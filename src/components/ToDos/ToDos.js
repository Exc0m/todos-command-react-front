import React, { useEffect } from "react"
import ToDo from "./ToDo"
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories, fetchTodos } from "../../redux/features/ToDo"
import AddBtn from "./AddBtn";

const ToDos = () => {



  const category = useSelector((state) => state.categories)

  return (
      <div>
    <div style={{display: "flex"}} >
      {category.map((category) => {
        return (
          <div className="row g-0 p-10" style={{width: "25%"}}>
            <div className="col border-top-5">
              <div className="card " style={{ minHeight: "300px" }}>
                <h5 className="card-header text-center">{category.name}</h5>
                <div className="card-body">

                  <ToDo id={category._id} />

                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
      </div>
  )
}
//Здесь должны быть столбцы из категорий с их тудушками

//прописать useEffect
export default ToDos
