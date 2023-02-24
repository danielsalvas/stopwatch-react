import styles from './stopwatch.module.css'

const Stopwatch = ({time}) => {
    
  return (
    <div className={styles.container__time}>
      <div className={styles.time__flex}>
          <span className={styles.time__value}>{("0" + Math.floor(( time / 3600000) % 60 )).slice(-2)}</span>
          <p className={styles.time__title}>HRS</p>
        </div>
        <span className={styles.colon__division}>:</span>
        <div className={styles.time__flex}>
          <span className={styles.time__value}>{("0" + Math.floor(( time / 60000) % 60 )).slice(-2)}</span>
          <p className={styles.time__title}>MIN</p>
        </div>
        <span className={styles.colon__division}>:</span>
        <div className={styles.time__flex}>
          <span className={styles.time__value}>{("0" + Math.floor(( time / 1000) % 60 )).slice(-2)}</span>
          <p className={styles.time__title}>SEC</p>
        </div>
        <span className={styles.colon__division}>:</span>
        <div className={styles.time__flex}>
          <span className={styles.time__value}>{("0" + (( time / 10) % 100 )).slice(-2)}</span>
          <p className={styles.time__title}>MIL</p>
        </div>
    </div>
  )
}

export default Stopwatch
