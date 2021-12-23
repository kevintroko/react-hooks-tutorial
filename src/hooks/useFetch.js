import { useEffect, useState } from "react";

export const useFetch = (url) => {
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: false
    });
    
    useEffect(() => {
        fetch(url).then(
            resp => resp.json()
        ).then(
            data => {
                setState({
                    data,
                    loading: false,
                    error: false
                })
            }
        )
    }, [url]);
    
    return state;
}

