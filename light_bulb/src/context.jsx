import {useState , createContext, useContext} from 'react'

const BulbContext = createContext()

//here children prop will be <Light/>
function BulbProvider({ children }) {
    const [bulbOn, setBulbOn] = useState(true);
  return  <BulbContext.Provider
      value={{
        bulbOn: bulbOn,
        setBulbOn: setBulbOn,
      }}
    >
      {children}
    </BulbContext.Provider>;
    
}

function App() {
   
  return (
      <div>
          <BulbProvider>
              <Light/>
          </BulbProvider>
    </div>
  )
}

function Light() {
    return <div>
        <LightBulb />
        <LightSwitch />
    </div>
}

function LightBulb() {
    const { bulbOn } = useContext(BulbContext)
    
    return <div>
        {bulbOn ? "bulb on" : "bulb off"}
    </div>
}

function LightSwitch() {
    const { bulbOn, setBulbOn } = useContext(BulbContext)

    function Toggle() {
        setBulbOn(!bulbOn)
    }
    
    return <div>
        <button onClick={Toggle}>Switch</button>
    </div>
}

export default App