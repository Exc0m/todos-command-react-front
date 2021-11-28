import React from 'react';
import {useState} from 'react'
import { useSelector } from 'react-redux';

const Header = () => {

    const todos = useSelector(state => state.todo)

    const [text, setText] = useState("")
  
    const handleFind = (e) => {
      setText(e.target.value)
    }
  
    const filteredTodos = todos.filter(todo => {
     return todo.text.toLowerCase().includes(text.toLowerCase())
    })

    //filteredTodos - этот массив должен использоваться для выведения тудушек чтобы поиск заработал
  
    return (<>
      <nav className="navbar navbar-light bg-secondary row " style={{height: "60px"}}>
        <div className="col-6 m-auto p-2">
              <input
                  style={{height: "30px"}}
                  className="form-control p-3"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleFind}
                  value={text}/>
        </div>
      </nav>

      </>
    );
    //Сам Header вместе с инпутом
  };
//поиск должен происходить тут
export default Header;