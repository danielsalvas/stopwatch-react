import { useState, useRef, useEffect } from 'react'
import Stopwatch from './components/stopwatch/Stopwatch'
import './App.css'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  
  const intervalRef = useRef();

  useEffect(() => {

    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);
    } else if (!running) {
      clearInterval(intervalRef.current)
    }

    return () => clearInterval(intervalRef.current)
    
  }, [running])

  function handleReset() {
    setTime(0)
    setRunning(false)
  }

  return (
    <div className="App">
      <div className='title'>
        STOPWATCH PRO
      </div>
      
      <Stopwatch time={time} />
      
      <div className='container__buttons'>
          <button onClick={() => {setRunning(true)}} className='button__stopwatch'>Start</button>
          <button onClick={() => {setRunning(false)}} className='button__stopwatch'>Stop</button>
          <button onClick={() => {handleReset()}} className='button__stopwatch'>Reset</button>
      </div>
    </div>
  )
}

console.log(1.5 % 60);

export default App
