import React from 'react'

//* ToDoListItem, (toDos, index, handleDelete, handleToggle) */ }
export const ToDoListItem = ({ toDo, i, handleToggle, handleDelete }) => {
    return (                
        <li className='list-group-item'>
            <p onClick={() => handleToggle(toDo.id)}
                className={ `${toDo.done && 'complete'}`}>
                {i + 1}. {toDo.desc}
            </p>
            <button className='btn btn-danger'
                    onClick={ () => handleDelete(toDo.id) }>
                Delete
            </button>
        </li>
    )
}
