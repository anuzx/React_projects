import React from 'react'
import { useState,useEffect,useRef } from 'react'

function Stopwatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedtime, setelapsedTime] = useState(0);
    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    //updating a refference dont cause our compnonent to render , changing a state cause rerender

    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current=setInterval(() => {
            setelapsedTime(Date.now()-startTimeRef.current)
        },10)
        }
        
        return () => {
            clearInterval(intervalIdRef.current);
        }
},[isRunning])

    function start() { 
        setIsRunning(true); //programme runs on pressing start button
        startTimeRef.current = Date.now() - elapsedtime;
    }
    
    function stop() { 
        setIsRunning(false);
    }
    
    function reset() {
        setelapsedTime(0);
        setIsRunning(false);
     }
    
    function formatTime() {

        
        let hours = Math.floor(elapsedtime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedtime / (1000 * 60) % 60);
        let seconds = Math.floor(elapsedtime / (1000) % 60);
        let milliseconds = Math.floor((elapsedtime % 1000)/10);
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(
          seconds
        )}:${padZero(milliseconds)}`;
    }
    
     function padZero(num) {
       return (num < 10 ? "0" : "") + num;
     }
    

  return (
    <div className="stopwatch">
      <div className="display">{formatTime()}</div>
      <div className="controls">
        <button className="start-btn" onClick={start}>
          Start
        </button>
        <button className="stop-btn" onClick={stop}>
          Stop
        </button>
        <button className="reset-btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch