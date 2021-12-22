import React from 'react'
import { useForm } from '../../hooks/useForm';
import './effects.css';
import { Message } from './Message';

export const FormWithCustomHook = () => {
    const [formValue, handleInputChange] = useForm({
        name: '',
        mail: '',
        password: ''
    });
    
    const { name, mail, password } = formValue;
    
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
             
             <br />
             
             <input 
                type="password" 
                name="password"
                className='form-control'
                placeholder='***'
                value={password}
                onChange={handleInputChange}>
             </input>
         </div>
         
         {
             (name === '123') && <Message />
         }
        </>
    )
}
