import React, { useLayoutEffect, useRef, useState } from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './layout.css';

export const Layout = () => {
    
    const { counter, increment } = useCounter(1); 
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    
    const { quote } = !!data && data[0];
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});
    
    useLayoutEffect(() => {
        console.log('hey', pTag.current.getBoundingClientRect().width);
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />
            
            <blockquote className='blockquote text-right'>
                <p ref={pTag}>
                    {quote}
                </p>
            </blockquote>
            
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre> 
            
            <button className='btn btn-primary' 
                    onClick={increment}>
                Next
            </button>

        </div>
    )
}
