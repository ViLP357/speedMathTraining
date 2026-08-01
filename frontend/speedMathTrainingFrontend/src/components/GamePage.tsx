import '../App.css'
import { useState } from 'react';
import type { OperatorsStates, submitMode } from "../types"
import QuestionArea from '../components/QuestionArea';
import styles from '../mystyle.module.css'
import useSettingsStore from '../store.ts'
//use zustand, https://fullstackopen.com/osa6/flux_arkkitehtuuri_ja_zustand
const GamePage = () => { 
  const siteName = "speedMath Training";
  const { questions, changeQuestions, digits, changeDigits, usedOperators, changeUsedOperators } = useSettingsStore()

  const [operators, setOperators] = useState<OperatorsStates>(usedOperators);
  const [started, setStarted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage ] = useState<string>("");
  const [range, setRange] = useState<number[]>(digits)
  const [ numberOfQuestions, setNumberOfQuestions] = useState<number>(questions)
  const [submitMode, setSubmitMode] = useState<submitMode>(0);

  const handleOperatorChange = (e : React.ChangeEvent<HTMLInputElement>) => {

    const {checked} = e.target
    const operator = e.target.name as keyof OperatorsStates
    setOperators(prev => ({
      ...prev,
      [operator]: checked
    }))
    changeUsedOperators(operators)
  }
  const startGame = () => {
    if (operators.addition === true || operators.subtraction === true||operators.multiplication === true) {
    setStarted(true)
    } else {
      console.log("valitse ainakin yksi")
      setErrorMessage("Select at least 1 operator")
      setInterval(() => {setErrorMessage("")}, 2000)
    }
  }

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.id==="mininp") {
      setRange(prev=>[Number(event.target.value), prev[1]]);
      setRange(prev=>[prev[0], Math.max(prev[0], prev[1])]);
      
      } else if(event.target.id==="maxinp") {
        setRange(prev=>[prev[0], Number(event.target.value)]);
        setRange(prev=>[Math.min(prev[0], prev[1]), prev[1]]);
        changeDigits(range) //flux/zustand-store
      } else if(event.target.id === "inpNumberOfQuestions") {
        setNumberOfQuestions(Number(event.target.value))
        changeQuestions(numberOfQuestions)
      }
  }
  const handleSubmitMode = (event:React.ChangeEvent<HTMLInputElement>)=> {
    if (event.target.id === "auto_submit") {
      setSubmitMode(0)
    } else if (event.target.id === "no_auto_submit") {
      setSubmitMode(1)
    }
  }


  if (!started) {
    return (
      <div >
        <h3 className={styles.header}>{siteName}</h3>
      
      <div className={styles.preferencesArea}>
      
        <h4>Choose submit mode</h4>
        <form >
          <label style={{display: "inline-flex", alignItems:"center"}}>
            <input className={styles.radio} type = "radio" id="auto_submit" checked= {submitMode===0}onChange={handleSubmitMode}/>
          Wait until corrrect</label>
          
          <label style={{display: "inline-flex", alignItems:"center"}}>
            <input className={styles.radio} type = "radio" id="no_auto_submit" checked= {submitMode===1} onChange={handleSubmitMode}/>
          Automatically move to next</label>
        </form>

      <h4>Operators used</h4>
        <form>    
          <label style={{display: "inline-flex", alignItems:"center"}}> <input className={styles.checkbox} type = "checkbox" name = "addition" checked={operators.addition} onChange={handleOperatorChange}/>+</label>
           <label style={{display: "inline-flex",alignItems:"center"}}> <input className={styles.checkbox} type = "checkbox" name="subtraction" checked={operators.subtraction} onChange={handleOperatorChange}/>-</label>
           <label style={{display: "inline-flex", alignItems:"center"}}> <input className={styles.checkbox} type = "checkbox" name="multiplication" checked={operators.multiplication} onChange={handleOperatorChange}/>×</label>
        </form>
       <h4> Number of digits [{range[0]} - {range[1]}]</h4>
  
          Min: <input className={styles.slider} id="mininp" type = "range" min="1" max="5" value = {range[0]} onChange={handleChange}/>
          <br></br>
          Max: <input className={styles.slider} id="maxinp" type = "range" min="1" max="5" value = {range[1]} onChange={handleChange}/>
        <br></br>
        <h4>Number of questions: {numberOfQuestions}</h4>
        
        <input className={styles.slider} id = "inpNumberOfQuestions" type = "range" min="5" max="20" step = "5" value = {numberOfQuestions} onChange={handleChange}/>

        </div>
        <button className={styles.startButton}onClick={startGame}> Start</button>
        <p>{errorMessage}</p>
      </div>
    )
  }
  return (
    <div>
      <h3>{siteName}</h3>
      <QuestionArea acceptedOperators ={operators} setStarted = {setStarted} digits = {range} numberOfQuestions={numberOfQuestions} submitMode = {submitMode}/>
    </div>
    
  )
 }
export default GamePage