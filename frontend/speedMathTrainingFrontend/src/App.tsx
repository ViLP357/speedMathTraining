import './App.css'
import { useState } from 'react';
import type { OperatorsStates } from "./types"
import QuestionArea from './components/QuestionArea';
import styles from './mystyle.module.css'

const App = () => {
  const siteName = "Mental math training";
  const [operators, setOperators] = useState<OperatorsStates>({
    addition: false,
    subtraction: false,
    multiplication: false,
  });
  const [started, setStarted] = useState<boolean>(false);
 

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
    }
  }

  return (
    <div>
      <h3>speedMath Training</h3>
      {siteName}
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
    {!started && <button className={styles.basicButton}onClick={startGame}> Start</button>}
    {started && <QuestionArea acceptedOperators ={operators} setStarted = {setStarted}/>}
    <p>link to <a href="https://github.com/ViLP357/speedMathTraining">Github</a> </p>
    

    </div>
    
  )
}

export default App
