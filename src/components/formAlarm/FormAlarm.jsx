import { useRef } from 'react'
import styles from './formalarm.module.css'

const FormAlarm = ({ setAlarm }) => {

    const messageRef = useRef('')
    const hoursRef = useRef()
    const minutesRef = useRef()
    const secondsRef = useRef()
    
    let convertedTime;

    function handleSubmit(e) {
        e.preventDefault()

        convertedTime = (Number(hoursRef.current.value) * 3600000) + Number(minutesRef.current.value) * 60000 + Number(secondsRef.current.value) * 1000
        
        setAlarm(convertedTime)
    }

    return (
        <div>
            <div>
                <h1>Here you can put an special alarm:</h1>
            </div>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <label className='input__title'>Put your alarm message:</label>
                    <input ref={messageRef} name="message" type="text" />
                </div>
                <div>
                    <label className='input__title'>Select the hours:</label>
                    <input ref={hoursRef} name="hours" type="number" placeholder='0' min="0" max="59" />
                </div>
                <div>
                    <label className='input__title'>Select the minutes:</label>
                    <input ref={minutesRef} name="minutes" type="number" placeholder='0' min="0" max="59" />
                </div>
                <div>
                    <label className='input__title'>Select the seconds:</label>
                    <input ref={secondsRef} name="seconds" type="number" placeholder='0' min="0" max="59" />
                </div>
                <div className='t'>
                    <input 
                        type="submit" 
                        className=""
                        value='Set Your Alarm'
                    />
                </div>
            </form>
        </div>
    )
}

export default FormAlarm
