import { useRef } from 'react'
import styles from './formalarm.module.css'

const FormAlarm = ({ setAlarm, setMessage }) => {

    let messageRef = useRef()
    let hoursRef = useRef()
    let minutesRef = useRef()
    let secondsRef = useRef()
    
    let convertedTime;  //This variable stores the input values sum

    function handleSubmit(e) {
        e.preventDefault()

        convertedTime = (Number(hoursRef.current.value) * 3600000) + Number(minutesRef.current.value) * 60000 + Number(secondsRef.current.value) * 1000
        
        setAlarm(convertedTime)
        setMessage(messageRef.current.value)

        messageRef.current.value = ''
        hoursRef.current.value = 0
        minutesRef.current.value = 0
        secondsRef.current.value = 0
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
                    <input ref={messageRef} name="message" type="text" placeholder="Time to stop running..." required />
                </div>
                <div>
                    <label className='input__title'>Select the hours:</label>
                    <input ref={hoursRef} name="hours" type="number" placeholder="0" min="0" max="59" />
                </div>
                <div>
                    <label className='input__title'>Select the minutes:</label>
                    <input ref={minutesRef} name="minutes" type="number" placeholder="0" min="0" max="59" />
                </div>
                <div>
                    <label className='input__title'>Select the seconds:</label>
                    <input ref={secondsRef} name="seconds" type="number" placeholder="0" min="0" max="59" />
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
