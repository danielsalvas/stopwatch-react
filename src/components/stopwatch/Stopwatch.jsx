import styles from './stopwatch.module.css'

const Stopwatch = ({ time }) => {

  const { ms, sec, min, hrs } = time;

  return (
    <div className={styles.container__time}>
      <div className={styles.time__flex}>
          <span className={styles.time__value}>{ ("0" + Math.floor(hrs)).slice(-2) }</span>
          <p className={styles.time__title}>HRS</p>
        </div>
        <span className={styles.colon__division}>:</span>
        <div className={styles.time__flex}>
          <span className={styles.time__value}>{ ("0" + Math.floor(min)).slice(-2) }</span>
          <p className={styles.time__title}>MIN</p>
        </div>
        <span className={styles.colon__division}>:</span>
        <div className={styles.time__flex}>
          <span className={styles.time__value}>{ ("0" + Math.floor(sec)).slice(-2) }</span>
          <p className={styles.time__title}>SEC</p>
        </div>
        <span className={styles.colon__division}>:</span>
        <div className={styles.time__flex}>
          <span className={styles.time__value}>{ ("0" + Math.floor(ms)).slice(-2) }</span>
          <p className={styles.time__title}>MIL</p>
        </div>
    </div>
  )
}

export default Stopwatch
