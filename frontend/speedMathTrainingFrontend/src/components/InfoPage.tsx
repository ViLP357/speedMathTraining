import styles from '../mystyle.module.css'
import calcRun from '../assets/calcRun.png';

const InfoPage = () => {
    return (
       <div>
        <h3 className={styles.header}>Information</h3>
         <p>This is my first project for Stardance (a summer program by Hack Club)</p>
         <p> Link to <a className={styles.link} href="https://github.com/ViLP357/speedMathTraining">Github</a> </p>
         <p>Link to <a className={styles.link} href = "https://stardance.hackclub.com/projects/4741" >Stardance project</a></p>
         <p>Made with typescript and react</p>
         <img src = {calcRun} style={{width: '20%'}}></img>

       </div>
    )
}
export default InfoPage