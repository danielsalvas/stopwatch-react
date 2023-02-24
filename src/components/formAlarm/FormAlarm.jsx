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
                <h1 className={styles.title__form}>
                    <span className={styles.title__1}>Here, you can set an </span>
                    <span className={styles.title__2}>special alarm:</span></h1>
                
                { message && (
                    <div className={styles.success__message}>
                        Your alarm was set successfully. <br />
                        <span className={styles.success__message__2}>Now you can start the stopwatch</span>
                    </div> 
                )} 
                
                <form
                    onSubmit={handleSubmit}
                >
                    <div className={styles.container__input}>
                        <label className={styles.input__label}>Set your alarm message:</label>
                        <input className={styles.input__value__text} ref={messageRef} name="message" type="text" placeholder="Time to stop running..." required />
                    </div>
                    <div className={styles.container__input}>
                        <label className={styles.input__label}>Select the hours:</label>
                        <input className={styles.input__value__number} ref={hoursRef} name="hours" type="number" placeholder="Hrs" min="0" max="99" />
                    </div>
                    <div className={styles.container__input}>
                        <label className={styles.input__label}>Select the minutes:</label>
                        <input className={styles.input__value__number} ref={minutesRef} name="minutes" type="number" placeholder="Min" min="0" max="59" />
                    </div>
                    <div className={styles.container__input}>
                        <label className={styles.input__label}>Select the seconds:</label>
                        <input className={styles.input__value__number} ref={secondsRef} name="seconds" type="number" placeholder="Sec" min="0" max="59" />
                    </div>
                    <div className={styles.div__form__button}>
                        <input 
                            type="submit" 
                            className={styles.form__button}
                            value='Set Your Alarm'
                        />
                    </div>
                </form>
            </div>
            
            <div className={styles.container__image}>
                <img src={stopwatchImage} className={styles.form__image} />
            </div>
        </div>
    )
}

export default FormAlarm
