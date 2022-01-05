import React, { useEffect, useReducer } from 'react'
import { toDoReducer } from './toDoReducer';

import './styles.css';
import { useForm } from '../../hooks/useForm';

const init = () => {
    return localStorage.getItem('toDos') || [];
}

export const ToDoApp = () => {
    const [ toDos, dispatch ] = useReducer(toDoReducer, [], init);
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });
    
    console.log(toDos);
    
    console.log(description);
    
    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(toDos));
    }, [toDos]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (description.trim().length <= 1) {
            return;
        }
        
        const newToDo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        
        const action = {
            type: 'add',
            payload: newToDo
        }
        
        dispatch(action);
        reset();
    }

    
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
                    <form onSubmit={ handleSubmit }>
                        <input type="text"
                               name="description"
                               placeholder='Learn...' 
                               className='form-control'
                               autoComplete="off"
                               value={description}
                               onChange={ handleInputChange }/>
                        <button className='btn btn-outline-primary mt-1 btn-block'
                                type='submit'>
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
