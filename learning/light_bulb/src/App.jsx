import { useState } from "react";

function App() {
  return <LightBulb />;
}

function LightBulb() {
  //we need to use useState in both the children components , therefore we need to declare it in the Parent component (here)

  //we do this when we dont know about state management

  const [bulbLight, setBulbLight] = useState(true);
  return (
    //declaring the props because we need to use these in that component
    //bulbLight is a prop to the BulbCmnt component
    <>
      <BulbCmnt bulbLight={bulbLight} />
      <ToggleBulb bulbLight={bulbLight} setBulbLight={setBulbLight} />
    </>
  );
}

function BulbCmnt({bulbLight}) {
  return (
    <>
      <h1>
        {bulbLight ? (
          <img src="./public/bulb_on.avif" width={500} height={450} />
        ) : (
          <img src="./public/bulb_off.png" width={500} height={450} />
        )}
      </h1>
    </>
  );
}

function ToggleBulb({bulbLight, setBulbLight}) {

  function Toggle() {
     setBulbLight(!bulbLight)
   }

  return (
    <>
      <div>
        <button onClick={Toggle}>Switch</button>
      </div>
    </>
  );
}

export default App;
