import { useState } from "react";


function App() {
  return (
    <div>
      <b>counter</b>

      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1 );
  }

  function decrease() {
    setCount( count - 1) ;
  }

  function reset() {
    setCount(0);
  }



  return (
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={increase}>Increase Count</button>
      <button onClick={decrease}>Decrease Count</button>
      <button onClick={reset}>Reset Count</button>
    </div>
  );
}



export default App;
