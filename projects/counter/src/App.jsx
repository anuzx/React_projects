import { useCounter } from "./hooks/useCounter.js"

//when we use default with export we dont need to use {} , but when we dont use export default , we need to use {} to import 


function App() {
  const {count , increaseCount} = useCounter()
  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  );
}





export default App;
