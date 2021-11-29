import React, { useEffect } from "react";
import ToDos from "./ToDos/ToDos";
import { fetchCategories, fetchTodos } from "../redux/features/ToDo";
import { useDispatch } from "react-redux";

const CartItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos()); //вывод тудушек
  }, []);

  useEffect(() => {
    dispatch(fetchCategories()); //вывод категорий
  }, []);

  return (
    <div>
      <ToDos />
    </div>
  );
};

export default CartItem;
