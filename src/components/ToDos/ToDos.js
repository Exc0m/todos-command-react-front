import React, { useEffect } from "react";
import ToDo from "./ToDo";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchTodos } from "../../redux/features/ToDo";

const ToDos = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchTodos()); //вывод тудушек
  }, []);

  useEffect(() => {
    dispatch(fetchCategories()); //вывод категорий
  }, []);
  return (
    <div>
      {/*<ToDo id={*/}
      {/*    //айди категории, нужно передать в перебор массива тудушек*/}
      {/*}/>*/}
      {category.map((todo) => {
        return (
          <div className="row">
            <div className="col border-top-5">
              <div className="card " style="min-height: 300px;">
                <h5 className="card-header text-center">{todo.name}</h5>
                <div className="card-body">{todo}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
//Здесь должны быть столбцы из категорий с их тудушками

//прописать useEffect
export default ToDos;
