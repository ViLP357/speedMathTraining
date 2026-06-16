import styles from '../mystyle.module.css'

const DailyChallenge = ()=> {
    return (
        <div>
           <h3 className={styles.header}>Todays challenge</h3>
            <p>2-3 digits</p>
            <p>10 questions</p>
            <p>operators: +, -</p>
            <p>click to apply these settings</p>
            <button>Apply </button>
        </div>
    )
}

export default DailyChallenge