import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './App.css'

function Accordion({ items }) {
  const [idx, setIdx] = useState(null)

  function handleToggle(indx) {
    setIdx(indx === idx ? null : indx)
  }
  return !items || items.length === 0 ? "No items available" : (
    <div className="accordion">
      {items.map((item, index) => {
        return <div key={index} className="accordion-item">
          <button className="accordion-title" onClick={() => handleToggle(index)}>
            {item.title}
            {idx === index ? <FaChevronUp className="toggle" /> :
              < FaChevronDown className="toggle" />}
          </button>
          {idx === index && <div className="accordion-content" >
            {item.content}
          </div>}
        </div>

      })}
    </div>
  );
}

export default Accordion;
