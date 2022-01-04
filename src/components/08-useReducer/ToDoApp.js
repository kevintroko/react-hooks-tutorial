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
            
            <ul className='list-group list-group-flush'>
                {
                    toDos.map(toDo => (
                        <li key={toDo.id} className='list-group-item'>{toDo.desc}</li>
                    ))
                }
            </ul>
        </div>
    )
}
