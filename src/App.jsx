import { useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0)

  return (
    <div className="App">
      <div className='title'>
        STOPWATCH PRO
      </div>
    </div>
  )
}

export default App
