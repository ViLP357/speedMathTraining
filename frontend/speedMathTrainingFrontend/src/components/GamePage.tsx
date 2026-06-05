import '../App.css'
import { useState } from 'react';
import type { OperatorsStates } from "../types"
import QuestionArea from '../components/QuestionArea';
import styles from '../mystyle.module.css'

const GamePage = () => { 
  
  const siteName = "speedMath Training";
  const [operators, setOperators] = useState<OperatorsStates>({
    addition: false,
    subtraction: false,
    multiplication: false,
  });
  const [started, setStarted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage ] = useState<string>("");
  const [range, setRange] = useState<number[]>([1,1])

  const handleOperatorChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target
    const operator = e.target.name as keyof OperatorsStates
    setOperators(prev => ({
      ...prev,
      [operator]: checked
    }))
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
      }
      console.log("nyt: " + range)

  }

  if (!started) {
    return (
      <div>
        <h3>{siteName}</h3>
      
      <div className={styles.preferencesArea}>
      
        <h4>Choose mode (no auto submit yet)</h4>
        <form >
          <input type = "radio" id="auto_subit" name= "gamemode" value="auto_submit"/>
          <label>auto submit</label>
          <input type = "radio" id="no_auto_submit" name= "gamemode" value="no_auto_submit"/>
          <label>no auto submit</label>
        </form>

      <h4>Operators used</h4>
        <form>    
          <input type = "checkbox" name = "addition" checked={operators.addition} onChange={handleOperatorChange}/>+
          <input type = "checkbox" name="subtraction" checked={operators.subtraction} onChange={handleOperatorChange}/>-
          <input type = "checkbox" name="multiplication" checked={operators.multiplication} onChange={handleOperatorChange}/>*
        </form>
        Number of digits
        <br></br>
          min: <input id="mininp" type = "range" min="1" max="5" value = {range[0]} onChange={handleChange}/>
          <br></br>
          max: <input id="maxinp" type = "range" min="1" max="5" value = {range[1]} onChange={handleChange}/>
          now: {range[0]}, {range[1]}



        </div>
        <button className={styles.basicButton}onClick={startGame}> Start</button>
        <p>{errorMessage}</p>
      </div>
    )
  }
  return (
    <div>
      <h3>{siteName}</h3>
      <QuestionArea acceptedOperators ={operators} setStarted = {setStarted} digits = {range}/>
    </div>
    
  )
 }
export default GamePage