import React from 'react';
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {searchTodo} from "../redux/features/ToDo";
import AddBtn from "./ToDos/AddBtn";

const Header = () => {

    const todos = useSelector(state => state.todo)
    const text = useSelector(state => state.search)

    const dispatch = useDispatch()

    const handleFind = (e) => {
        dispatch(searchTodo(e))
    }
    return (<>
      <nav className="navbar navbar-light bg-secondary row ">
        <div className="col-6 m-auto p-2 justify-content-center" style={{display: "flex"}}>
              <input
                  style={{height: "30px"}}
                  className="form-control p-3"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e)=> handleFind(e.target.value)}
                  value={text}/>
            <AddBtn/>
        </div>
      </nav>

      </>
    );
    //Сам Header вместе с инпутом
  };
//поиск должен происходить тут
export default Header;