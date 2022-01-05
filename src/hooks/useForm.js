import { useState } from "react"

// Receives object with properties to manipulate form
export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);
    
    const reset = () => {
        setValues(initialState);   
    }
    
    const handleInputChange = ({target}) => {
        setValues({
            ...values, 
            [target.name]: target.value
        });
      };
      
    return [values, handleInputChange, reset];
}
