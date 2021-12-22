import React, { useEffect } from 'react'
import './effects.css';

export const Message = () => {
    useEffect(() => {
        console.log('message joins the show');
        return () => {
            console.log('bye');
        }
    }, []);
    
    return (
        <>
            <br />
            <h3>Hello World</h3>
        </>
    )
}
