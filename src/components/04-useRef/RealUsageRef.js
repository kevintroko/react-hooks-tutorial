import React, { useState } from 'react'
import '../01-useState/counter.css';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

export const RealUsageRef = () => {    
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example</h1>
            <hr />
            
            {
                show && <MultipleCustomHooks />
            }
            
            <button
                onClick={() => setShow(!show)}
                className='btn btn-primary mt-3'>
                Show/Hide
            </button>
        </div>
    )
}
