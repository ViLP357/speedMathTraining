import styles from '../mystyle.module.css'
import { useSettingsStore } from '../store.js'

const DailyChallenge = ()=> {
    const apply = () => {
        changeQuestions(10)
    }
    const { questions, changeQuestions } = useSettingsStore()
    return (
        <div>
            q:{questions}
           <h3 className={styles.header}>Todays challenge</h3>
            <p>2-3 digits</p>
            <p>10 questions</p>
            <p>operators: +, -</p>
            <p>click to apply these settings</p>
            <button onClick={apply}>Apply </button>
        </div>
    )
}

export default DailyChallenge