import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer';

import './styles.css';
import { ToDoList } from './ToDoList';
import { ToDoAdd } from './ToDoAdd';

const init = () => {
    return JSON.parse(localStorage.getItem('toDos')) || [];
}

export const ToDoApp = () => {
    const [ toDos, dispatch ] = useReducer(toDoReducer, [], init);
    
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos]);
    
    const handleDelete = (id) => {
        const action = {
            type: 'delete',
            payload: id
        }
        
        dispatch(action);
    }
    
    const handleToggle = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }
    
    const handleAddToDo = (newToDo) => {
        dispatch({
            type: 'add',
            payload: newToDo
        });
    }

    return (
        <div>
            <h1>To Dos <small>({toDos.filter(toDo => !toDo.done).length})</small></h1>
            <hr></hr>
            
            <div className='row'>
                <div className='col-7'>
                    <ToDoList toDos={toDos}
                              handleToggle={handleToggle}
                              handleDelete={handleDelete}/>
                </div>
                
                <div className='col-5'>
                    <ToDoAdd handleAddToDo={handleAddToDo}/>
                </div>
            </div>
        </div>
    )
}
