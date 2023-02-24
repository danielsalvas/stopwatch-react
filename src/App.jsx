import { useState, useRef, useEffect } from 'react'
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
  

  return (
    <div className="App">
      <div className='title'>
        STOPWATCH PRO
      </div>
      <div className='container__time'>
        <div className='time__flex'>
          <span className='time__value'>{("0" + Math.floor(( time / 3600000) % 60 )).slice(-2)}</span>
          <p className='time__title'>HRS</p>
        </div>
        <span className='colon__division'>:</span>
        <div className='time__flex'>
          <span className='time__value'>{("0" + Math.floor(( time / 60000) % 60 )).slice(-2)}</span>
          <p className='time__title'>MIN</p>
        </div>
        <span className='colon__division'>:</span>
        <div className='time__flex'>
          <span className='time__value'>{("0" + Math.floor(( time / 1000) % 60 )).slice(-2)}</span>
          <p className='time__title'>SEC</p>
        </div>
        <span className='colon__division'>:</span>
        <div className='time__flex'>
          <span className='time__value'>{("0" + (( time / 10) % 100 )).slice(-2)}</span>
          <p className='time__title'>MIL</p>
        </div>
      </div>
      <div className='container__buttons'>
          <button onClick={() => {setRunning(true)}} className='button__stopwatch'>Start</button>
          <button onClick={() => {setRunning(false)}} className='button__stopwatch'>Stop</button>
          <button onClick={() => {setTime(0)}} className='button__stopwatch'>Reset</button>
      </div>
    </div>
  )
}

console.log(1.5 % 60);

export default App
