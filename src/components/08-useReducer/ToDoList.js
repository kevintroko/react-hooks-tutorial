import React from 'react'
import { ToDoListItem } from './ToDoListItem'

export const ToDoList = ({ toDos, handleToggle, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
        {
            toDos.map((toDo, i) => (
                <ToDoListItem  toDo={toDo}
                               i={i}
                               key={toDo.id} 
                               handleDelete={handleDelete}
                               handleToggle={handleToggle}/>)
            )
        }
        </ul>
    )
}
