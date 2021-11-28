import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addToDo} from "../../redux/features/ToDo";

const AddBtn = () => {

    const [newToDo, setNewToDo] = useState({ text: "", priority: 1})

    const dispatch = useDispatch()

    const handleNewTodo = {
        text: (text) => {
            setNewToDo({...newToDo, text:text})
        },
        priority: (priority) => {
            setNewToDo({...newToDo, priority: priority})
        },
        add: () => {
            dispatch(addToDo(newToDo))
        }

    }

    return (
        <>
            <button
                type="button"
                style={{height: "34px"}}
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Добавить
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Добавить новую задачу</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"/>
                        </div>
                        <div className="modal-body">

                            <input
                                onChange={(e)=> handleNewTodo.text(e.target.value)}
                                value={newToDo.text}
                                className="form-control form-control-sm"
                                type="text"
                                placeholder="Введите задачу..."
                                aria-label=".form-control-sm example"/>

                            <div className="dropdown">
                                <a className="btn btn-secondary m-1 dropdown-toggle" href="#" role="button"
                                   id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    {newToDo.priority === 1 && "Не важно"}
                                    {newToDo.priority === 2 && "Важно"}
                                    {newToDo.priority === 3 && "Очень важно"}
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><a className="dropdown-item" onClick={()=> handleNewTodo.priority(1)}>Не важно</a></li>
                                    <li><a className="dropdown-item" onClick={()=> handleNewTodo.priority(2)}>Важно</a></li>
                                    <li><a className="dropdown-item" onClick={()=> handleNewTodo.priority(3)}>Очень важно</a></li>
                                </ul>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                            <button
                                onClick={handleNewTodo.add}
                                type="button"
                                disabled={newToDo.text === ""}
                                className="btn btn-primary"
                                data-bs-dismiss="modal">

                                Сохранить

                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default AddBtn;