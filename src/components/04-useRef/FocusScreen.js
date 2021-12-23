import React, { useRef } from 'react'
import '../01-useState/counter.css';

export const FocusScreen = () => {
    
    const ref = useRef();
    
    const handleClick = () => {
        ref.current.select();
    }
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            
            <input 
                ref={ref}
                placeholder='Name'
                className='form-control'
            />
            
            <button 
                className='btn btn-outline-primary mt-3'
                onClick={handleClick} >
                Focus
            </button>
        </div>
    )
}
