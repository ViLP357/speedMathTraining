import type { Question } from "../types"
import { useState } from 'react'


const QuestionComponent = ({question} : {question: Question}) => {
  return (
    <div>
    {question.val1} {question.operator}  {question.val2} = {question.ans}  
    </div>
  )
}



const QuestionForm = () => {
    const [questionNumber, setQuestionNumber] = useState<number>(0);
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
            <p> hello</p>
            {questionNumber}
            <button onClick={() => setQuestionNumber(questionNumber+1)}>Next</button>
            <QuestionComponent question= {courseParts[questionNumber]}/>
        </div>
        
    )
}

export default QuestionForm