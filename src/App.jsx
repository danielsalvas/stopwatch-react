import './App.css'
import { useState, useRef, useEffect } from 'react'
import Stopwatch from './components/stopwatch/Stopwatch'
import FormAlarm from './components/formAlarm/FormAlarm'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [alarm, setAlarm] = useState(null)
  const [message, setMessage] = useState('')

  const intervalRef = useRef();

  useEffect(() => {

    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10);

    } else if (!running) {
      clearInterval(intervalRef.current)
    }

    if (alarm !== null) {
      setTimeout(() => {
        alert(message)
      }, alarm + 11);  //We add 11 milliseconds for the variation of the calculations
    }

    return () => clearInterval(intervalRef.current)
    
  }, [running])

  function handleReset() {
    setTime(0)
    setRunning(false)
    setAlarm(null)
  }

  return (
    <div className="App">
      <div className='title'>
        STOPWATCH PRO
      </div>
      
      <Stopwatch time={time} />
      
      <div className='container__buttons'>
          {running ? (
            <button onClick={() => {setRunning(false)}} className='button__stopwatch'>Stop</button>
          ) : (
            <button onClick={() => {setRunning(true)}} className='button__stopwatch'>Start</button>
          )} 

            <button onClick={() => {handleReset()}} className='button__stopwatch'>Reset</button>
      </div>

      <FormAlarm setAlarm={setAlarm} setMessage={setMessage} />

    </div>
  )
}

export default App
