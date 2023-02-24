import './App.css'
import { useState, useRef, useEffect } from 'react'
import Stopwatch from './components/stopwatch/Stopwatch'
import FormAlarm from './components/formAlarm/FormAlarm'

function App() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const [alarm, setAlarm] = useState(null)
  const [message, setMessage] = useState('')

  let intervalRef = useRef();

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
        setMessage('')
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
    <div className="container__app">
      <div className='title'>
        STOPWATCH <span className='title__2'>PRO</span> 
      </div>
      
      <div className='container__layout'>
        <div className='container__stopwatch'>
          <Stopwatch time={time} />
          
          <div className='container__buttons'>
              {running ? (
                <button onClick={() => {setRunning(false)}} className='button__stopwatch'><i className="fa-solid fa-stop"></i></button>
              ) : (
                <button onClick={() => {setRunning(true)}} className='button__stopwatch'><i className="fa-solid fa-play"></i></button>
              )} 

                <button onClick={() => {handleReset()}} className='button__stopwatch'><i className="fa-solid fa-rotate-right"></i></button>
          </div>
        </div>

        <div>
         <FormAlarm setAlarm={setAlarm} setMessage={setMessage} message={message} />
        </div>
      </div>

    </div>
  )
}

export default App
