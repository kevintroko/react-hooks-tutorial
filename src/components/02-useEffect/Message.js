import React, { useEffect, useState } from 'react'
import './effects.css';

export const Message = () => {
    const [coordenates, setCoordenates] = useState({clientX: 0, clientY: 0});
    const { clientX, clientY } = coordenates;
    
    useEffect(() => {
        console.log('message joins the show');
        
        const mouseMove = ({clientX, clientY}) => {
           setCoordenates({clientX, clientY});
        };
        
        window.addEventListener('mousemove', mouseMove);
        
        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);
    
    return (
        <>
            <br />
            <h3>Hello World</h3>
            <p>
                x: {clientX}, y: {clientY}
            </p>
        </>
    )
}
