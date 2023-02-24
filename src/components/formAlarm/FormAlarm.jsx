import { useRef } from 'react'
import styles from './formalarm.module.css'
import stopwatchImage from '../../assets/stopwatch.png'

const FormAlarm = ({ setAlarm, setMessage, message }) => {

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
    }

    return (
        <div className={styles.container__form}>
            <div>
                <h1>Here you can put an special alarm:</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div>
                        <label className='input__title'>Put your alarm message:</label>
                        <input ref={messageRef} name="message" type="text" placeholder="Time to stop running..." required />
                    </div>
                    <div>
                        <label className='input__title'>Select the hours:</label>
                        <input ref={hoursRef} name="hours" type="number" placeholder="0" min="0" max="99" />
                    </div>
                    <div>
                        <label className='input__title'>Select the minutes:</label>
                        <input ref={minutesRef} name="minutes" type="number" placeholder="0" min="0" max="59" />
                    </div>
                    <div>
                        <label className='input__title'>Select the seconds:</label>
                        <input ref={secondsRef} name="seconds" type="number" placeholder="0" min="0" max="59" />
                    </div>
                    <div className={styles.div__form__button}>
                        <input 
                            type="submit" 
                            className={styles.form__button}
                            value='Set Your Alarm'
                        />
                    </div>
                </form>

                { message && (
                    <div>
                    Your alarm was set successfully
                    </div> 
                )} 
            </div>
            
            <div className={styles.container__image}>
                <img src={stopwatchImage} className={styles.form__image} />
            </div>
        </div>
    )
}

export default FormAlarm
