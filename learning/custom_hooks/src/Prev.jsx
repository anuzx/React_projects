import { useState } from "react"
import { usePrev } from "./hooks/usePrev"


function Prev() {
    const [state, setState] = useState(0)
    const prev = usePrev(state)
  return (
      <>
          <p>{state}</p>
          <button onClick={() => {
              setState((crr)=>crr +1)
          }}>
              click
          </button>
          <p>The prev value was {prev}</p>
      </>
  )
}

export default Prev