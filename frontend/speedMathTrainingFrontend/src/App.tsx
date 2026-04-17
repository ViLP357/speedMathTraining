import { useState } from 'react'
import './App.css'

interface Question {
  val1: number;
  val2: number;
  operator: string;
  ans: number;
}

const QuestionComponent = ({question} : {question: Question}) => {
  return (
    <div>
    {question.val1} {question.operator}  {question.val2} = {question.ans}  
    </div>
  )
}

const App = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);

  const courseName = "Mental math training";
  const courseParts: Question[] = [
    {
      val1: 2,
      val2: 3,
      operator: "+",
      ans: 5
    }, 
    {
      val1: 3,
      val2: 3,
      operator: "+",
      ans: 3
    }
  ]

  return (
    <div>
      {courseName}
      {questionNumber}
      <button onClick={() => setQuestionNumber(questionNumber+1)}>Next</button>
    <p>question: {courseParts[0].val1}  {courseParts[0].operator} {courseParts[0].val2}</p>
    <QuestionComponent question= {courseParts[questionNumber]}/>
    </div>
  )
}

export default App
