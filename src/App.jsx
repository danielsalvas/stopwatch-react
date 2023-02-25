import './App.css'
import { useState, useRef } from 'react'
import Stopwatch from './components/stopwatch/Stopwatch'
import FormAlarm from './components/formAlarm/FormAlarm'

function App() {

  //Constants, Variables and States

  const [time, setTime] = useState( { ms: 0, sec: 0, min: 0, hrs: 0 } )
  const [running, setRunning] = useState(false)
  const [alarm, setAlarm] = useState(null)
  const [message, setMessage] = useState('')

  let intervalRef = useRef();
  let ms = time.ms, sec = time.sec, min = time.min, hrs = time.hrs;

  //Functions

  const run = () => {
    if(min === 60){
      hrs++;
      min = 0;
    }
    if(sec === 60){
      min++;
      sec = 0;
    }
    if(ms === 100){
      sec++;
      ms = 0;
    }
    ms++;
    return setTime({ms:ms, sec:sec, min:min, hrs:hrs});
  };

  const start = () => {
    run();
    setRunning(true);
    intervalRef.current = (setInterval(run, 10));

    if (alarm !== null) {
      setTimeout(() => {
        alert(message)
        setMessage('')
      }, alarm - 10);
    }
  };

  const stop = () => {

    setRunning(false);
    clearInterval(intervalRef.current)
    
  };

  function handleReset() {

    clearInterval(intervalRef.current)
    setRunning(false)
    setTime({ ms: 0, sec: 0, min: 0, hrs: 0 })
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
                <button onClick={stop} className='button__stopwatch'><i className="fa-solid fa-stop"></i></button>
              ) : (
                <button onClick={start} className='button__stopwatch'><i className="fa-solid fa-play"></i></button>
              )} 

                <button onClick={() => handleReset()} className='button__stopwatch'><i className="fa-solid fa-rotate-right"></i></button>
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
