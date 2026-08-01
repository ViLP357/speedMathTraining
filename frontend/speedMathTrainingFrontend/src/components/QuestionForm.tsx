import { useState } from "react"
import type { Question } from "../types"
import styles from '../mystyle.module.css'; 

const QuestionComponent = ({question} : {question: Question}) => {
  return (
    <div>
    {question.val1} {question.operator=="*" ? '×' : question.operator}   {question.val2} 
    </div>
  )
}

const QuestionForm = ({question, onAnswer, newWrongAnswer} : {question : Question, onAnswer: (isCorrect: boolean)=> void, newWrongAnswer: () => void}) => {
   
    const [answer, setAnswer] = useState<string>("");
    const [shadowColor, setShadowColor] = useState<string>("");
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
      onAnswer(result)
      setAnswer("")
      if (result) {
        setShadowColor("green")
      } else {
        setShadowColor("red")
        newWrongAnswer();
      }
      setTimeout(() => setShadowColor(""), 200)
    }

    return (
        <div className={styles.questionForm}>
            <QuestionComponent question= {question}/>
            <form onSubmit={isCorrect}>
              <input className={styles.textInput} style={{ boxShadow: `0px 4px 8px ${shadowColor}`}} value={answer} onChange={(event) => setAnswer(event.target.value)}/>
              <button className={styles.basicButton} type = "submit">check</button>
            </form>
        </div>
        
    )
}

export default QuestionForm