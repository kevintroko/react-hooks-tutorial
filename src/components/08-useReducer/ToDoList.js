import React from 'react'

export const ToDoList = ({ toDos, handleToggle, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
        {
            toDos.map((toDo, i) => (
                //* ToDoListItem, (toDos, index, handleDelete, handleToggle) */ }
                
                <li key={toDo.id} 
                    className='list-group-item'>
                    <p onClick={() => handleToggle(toDo.id)}
                       className={ `${toDo.done && 'complete'}`}>
                        {i + 1}. {toDo.desc}
                    </p>
                    <button className='btn btn-danger'
                            onClick={ () => handleDelete(toDo.id) }>
                        Delete
                    </button>
                </li>
            ))
        }
        </ul>
    )
}
