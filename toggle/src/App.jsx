
import { useState } from "react";

function App() {
  return (<ToggleBtn />)
  
}

const ToggleBtn = () => {
  let [isVisible, setisVisible] = useState(false);

  function Toggler() {
    setisVisible(!isVisible)
  }

  return (
    <div>
      <button onClick={Toggler}>i want to say something</button>
      {isVisible ? <p>hello baby</p> : null}
    </div>
  );
    
    
   
  
};

export default App;
