
import { useEffect, useState } from 'react'
import { useDebounce } from './hooks/useDebounce'

function Debounce() {
    const [inputVal, setInputVal] = useState("")
    
    const debouncedValue = useDebounce(inputVal, 200)
    
    function change(e) {
        setInputVal(e.target.value)
    }

    useEffect(() => {
        //expensive operation 
        //fetch
        console.log("expensive operation")
    },[debouncedValue])

  return (
      <>
          <input type="text" onChange={change}></input>
      </>
  )
}

export default Debounce