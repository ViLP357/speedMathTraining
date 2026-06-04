import { useState } from "react"
import type { Question } from "../types"
import styles from '../mystyle.module.css'; 

const QuestionComponent = ({question} : {question: Question}) => {
  return (
    <div>
    {question.val1} {question.operator}  {question.val2} 
    </div>
  )
}

const QuestionForm = ({question, onAnswer} : {question : Question, onAnswer: (isCorrect: boolean)=> void}) => {
   
    const [answer, setAnswer] = useState<string>("");

    const isCorrect = (event :  React.SyntheticEvent) => {
      event?.preventDefault()
      //console.log(`ANswern now ${answer}`)
      let result = false
      if (question.operator == "+") {
        result = (question.val1 + question.val2).toString() === answer
      }
      else if (question.operator == "-") {
        result = (question.val1 - question.val2).toString() === answer
      } 
      else if (question.operator == "*") {
        result = (question.val1 * question.val2).toString() === answer
      } else {
        result = false
      }
      //if (result) {
      //  console.log("oikein")
      //} else {
      //  console.log("vaarin")
      //}
      onAnswer(result)
      setAnswer("")
    }

    return (
        <div className= {styles.questionArea}>
            <QuestionComponent question= {question}/>
            <form onSubmit={isCorrect}>
              <input value={answer} onChange={(event) => setAnswer(event.target.value)}/>
              <button className={styles.basicButton} type = "submit">check</button>
            </form>
        </div>
        
    )
}

export default QuestionForm