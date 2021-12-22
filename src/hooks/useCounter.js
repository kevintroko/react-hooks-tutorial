import { useState } from "react"

export const useCounter = (initialState = 10) => {
    const [state, setState] = useState(initialState);

    const increment = (size = 1) => {
        setState(state + size);
    }
    
    const decrement = (size = 1) => {
        setState(state - size);
    }
    
    const reset = () => {
        setState(initialState);
    }
    
    return {
        state,
        increment,
        decrement,
        reset
    };
}