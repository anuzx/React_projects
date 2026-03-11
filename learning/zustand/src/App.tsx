import { useCounterStore } from "./store/store";
import "./App.css";
import { useEffect } from "react";

//we can use the zustand customhook outside of a component and access it in any random fxn

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count", count);
};

//we can also manipulate the state values outside the component
const setCount = () => {
  useCounterStore.setState({count:1})
}

function App() {
  const count = useCounterStore((state) => state.count);
  return (
    <div>
      <Counter count={count} />
    </div>
  );
}

function Counter({ count }: { count: number }) {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);

  useEffect(() => {
    logCount()
  }, [])
  
    useEffect(() => {
      setCount();
    }, []);

  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
      </div>
      <div>
        <button onClick={incrementAsync}>IncreaseAsync</button>
      </div>
    </div>
  );
}

export default App;
