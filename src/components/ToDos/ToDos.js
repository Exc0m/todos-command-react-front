import React, { useEffect } from 'react';
import ToDo from "./ToDo";
import { useDispatch } from 'react-redux';
import { fetchCategories, fetchTodos, } from '../../redux/features/ToDo';

const ToDos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos()) //вывод тудушек
  }, [])

  useEffect(() => {
    dispatch(fetchCategories()) //вывод категорий
  }, [])
    return (
        <div>
           {/*<ToDo id={*/}
           {/*    //айди категории, нужно передать в перебор массива тудушек*/}
           {/*}/>*/}
        </div>
    );
};
//Здесь должны быть столбцы из категорий с их тудушками

//прописать useEffect
export default ToDos;