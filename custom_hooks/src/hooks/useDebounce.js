import { useEffect , useState } from "react";

export function useDebounce(value , delay) {
    //store the global variables in refs becuz we dont want the components to rerender when value changes 
    const [debouncedVlaue , setDebouncedValue] = useState(value)
    
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)
        
        //cleanup
        return () => {
            clearTimeout(handler)
        }
        
    }, [value, delay])
    
    return debouncedVlaue
}