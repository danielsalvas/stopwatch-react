import './App.css'
import { useState, useRef, useEffect } from 'react'
import Stopwatch from './components/stopwatch/Stopwatch'
import FormAlarm from './components/formAlarm/FormAlarm'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [alarm, setAlarm] = useState(null)
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
        console.log('its time');
      }, alarm);
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
          {running ? (
            <button onClick={() => {setRunning(false)}} className='button__stopwatch'>Stop</button>
          ) : (
            <button onClick={() => {setRunning(true)}} className='button__stopwatch'>Start</button>
          )} 

            <button onClick={() => {handleReset()}} className='button__stopwatch'>Reset</button>
      </div>

      <FormAlarm setAlarm={setAlarm} />

    </div>
  )
}

export default App
