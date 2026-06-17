import styles from '../mystyle.module.css'
import useSettingsStore from '../store.ts'

const DailyChallenge = ()=> {
    const apply = () => {
        changeQuestions(10)
        changeDigits([2, 3])
        changeUsedOperators({    
            addition: true,
            subtraction: true,
            multiplication: false
        })
    }
    const {changeQuestions, changeDigits, changeUsedOperators } = useSettingsStore()
   
    return (
        <div>
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