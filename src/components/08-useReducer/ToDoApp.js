import React, { useReducer } from 'react'
import { toDoReducer } from './toDoReducer';

import './styles.css';

const initialState = [
    {
        id: new Date().getTime(),
        desc: 'Learn React',
        done: false,
    }
]

export const ToDoApp = () => {
    const [ toDos ] = useReducer(toDoReducer, initialState);
    console.log(toDos);
    return (
        <div>
            <h1>To Dos <small>({toDos.length})</small></h1>
            <hr></hr>
            
            <div className='row'>
                <div className='col-7'>
                    <ul className='list-group list-group-flush'>
                    {
                        toDos.map((toDo, i) => (
                            <li key={toDo.id} 
                                className='list-group-item'>
                                <p className='text-center'>{i + 1}. {toDo.desc}</p>
                                <button className='btn btn-danger'>
                                    Delete
                                </button>
                            </li>
                        ))
                    }
                    </ul>
                </div>
                
                <div className='col-5'>
                    <h4>Add To Do</h4>
                    <hr />
                    <form>
                        <input type="text"
                               name="description"
                               placeholder='Learn...' 
                               className='form-control'
                               autoComplete="off"/>
                        <button className='btn btn-outline-primary mt-1 btn-block'>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
