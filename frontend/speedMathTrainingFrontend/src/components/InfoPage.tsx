import styles from '../mystyle.module.css'

const InfoPage = () => {
    return (
       <div>
        <h3 className={styles.header}>Information</h3>
         <p> link to <a className={styles.link} href="https://github.com/ViLP357/speedMathTraining">Github</a> </p>
         <p>Link to <a className={styles.link} href = "https://stardance.hackclub.com/projects/4741" >Stardance</a></p>
       </div>
    )
}
export default InfoPage