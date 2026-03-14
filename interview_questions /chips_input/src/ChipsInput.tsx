import { useState } from 'react';
import './App.css'
function ChipsInput() {
  const [chip, setChip] = useState([])
  const [input, setInput] = useState("")


  function handleKeyDown(event) {


    if (event.key === 'Enter' && input.trim() !== "") {
      setChip([...chip, input])
      setInput("")

      event.preventDefault()
    }

  }

  function deleteChip(id) {
    const arr = [...chip]
    arr.splice(id, 1)

    setChip(arr)
  }

  return (
    <div>
      <div className='main-container'>
        <h2>Chips Input</h2>
        <input
          type="text"
          placeholder="Type a chip and press tag"
          className="input"
          onKeyDown={handleKeyDown}
          value={input} onChange={(e) => {
            return setInput(e.target.value)
          }}
        />
      </div>
      <div style={{ display: "flex", }} >
        {chip.map((t, index) => {
          return <><span key={index} className="chip">
            {t}
            <button className="Btn" onClick={() => { deleteChip(index) }}>X</button>
          </span>

          </>
        })}
      </div>
    </div>
  );
}

export default ChipsInput;
