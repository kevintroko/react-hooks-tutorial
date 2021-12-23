import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const isMounted = useRef(true);
    
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: false
    });
    
    useEffect(() => {
        return () => isMounted.current = false
    }, [])
    
    useEffect(() => {
        fetch(url).then(
            resp => resp.json()
        ).then(
            data => {
                if (isMounted) {            
                    setState({
                        data,
                        loading: false,
                        error: false
                    })
                } else {
                    console.log('cant call set state');
                }
            }
        )
    }, [url]);
    
    return state;
}

