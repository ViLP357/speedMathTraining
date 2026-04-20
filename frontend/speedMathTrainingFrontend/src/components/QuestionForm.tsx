import { useState } from "react"
import type { Question } from "../types"

const QuestionComponent = ({question} : {question: Question}) => {
  return (
    <div>
    {question.val1} {question.operator}  {question.val2} = {question.ans}  
    </div>
  )
}



const QuestionForm = ({question} : {question : Question}) => {
   
    const [answer, setAnswer] = useState<string>("");
    const isCorrect = (event :  React.SyntheticEvent) => {
      event?.preventDefault()
      console.log(`ANswern now ${answer}`)
      if (question.val1 + question.val2 == question.ans) {
        console.log("oik3ein")
      } else {
        console.log("vaarin")
      }
    }
    return (
        <div>
            <p> hello</p>
            <QuestionComponent question= {question}/>
            <form onSubmit={isCorrect}>
              <input value={answer} onChange={(event) => setAnswer(event.target.value)}/>
              <button type = "submit">check</button>
            </form>
        </div>
        
    )
}

export default QuestionForm