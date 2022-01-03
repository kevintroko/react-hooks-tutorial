import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css';

export const Layout = () => {
    
    const { counter, increment } = useCounter(1); 
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote } = !!data && data[0];
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            
            <blockquote className='blockquote text-right'>
                <p>
                    {quote}
                </p>
            </blockquote>
            
            <button className='btn btn-primary' 
                    onClick={increment}>
                Next
            </button>

        </div>
    )
}
