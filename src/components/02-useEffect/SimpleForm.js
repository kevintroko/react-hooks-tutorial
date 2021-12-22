import React, { useEffect, useState } from 'react'
import './effects.css';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        mail: ''
    });
    
    const { name, mail } = formState;
    
    useEffect(() => {
       console.log('default'); 
    }, []);
    
    useEffect(() => {
        console.log('formstate'); 
     }, [formState]);
     
     useEffect(() => {
        console.log('mail'); 
     }, [mail]);
    
    const handleInputChange = ({target}) => {
      setFormState({
          ...formState, 
          [target.name]: target.value
      });
    };
    
    return (
        <>
         <h1>Use Effect</h1>   
         <hr />
         
         <div className='form-group'>
             <input 
                type="text" 
                name="name"
                className='form-control'
                placeholder='Your name'
                autoComplete='off'
                value={name}
                onChange={handleInputChange}>
             </input>
             
             <br />
             
             <input 
                type="text" 
                name="mail"
                className='form-control'
                placeholder='Your email'
                autoComplete='off'
                value={mail}
                onChange={handleInputChange}>
             </input>
         </div>
        </>
    )
}
