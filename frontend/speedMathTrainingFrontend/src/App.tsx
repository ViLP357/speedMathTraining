import './App.css'
import { useState } from 'react';
import type { Operators } from "./types"
import QuestionArea from './components/QuestionArea';

const App = () => {
  const siteName = "Mental math training";
  const [operators, setOperators] = useState<Operators>({
    addition: false,
    subtraction: false,
    multiplication: false,
  });

  const handleOperatorChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const {checked} = e.target
    const operator = e.target.name as keyof Operators
    setOperators(prev => ({
      ...prev,
      [operator]: checked
    }))
  }

  return (
    <div>
   
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

    <QuestionArea acceptedOperators ={operators}/>
    </div>
  )
}

export default App
