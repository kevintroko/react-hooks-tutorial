import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {
    const {counter, increment } = useCounter(5000);
    const [show, setshow] = useState(true);
    
    const heavyProcessMemo = useMemo(() => heavyProcess(counter), [counter]);
    
    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr></hr>
            
            <p>{heavyProcessMemo}</p>
            
            <button className='btn btn-primary mr-3'
                    onClick={increment}>
                Increment + 1
            </button>
            
            <button className='btn btn-outline-primary ml-3'
                    onClick={
                        () => setshow(!show)
                    }>
                Show/Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
