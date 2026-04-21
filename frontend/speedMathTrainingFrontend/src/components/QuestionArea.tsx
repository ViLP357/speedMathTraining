import type { Question } from "../types"
import { useState } from 'react'
import React from 'react'; 
import QuestionForm from "./QuestionForm";

const nextQuestion =  (setQuestionNumber : React.Dispatch<React.SetStateAction<number>>, questionNumber : number) => {
  setQuestionNumber(questionNumber + 1)
}

const QuestionArea = () => {
  const handleAnswer = (isCorrect : boolean) => {
    if (isCorrect) {
      setCorrect(correct+1);
    }
    setQuestionNumber(questionNumber+1)
  }

    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);

    const questionList: Question[] = [
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
  if (questionNumber<questionList.length) {
    return (        
          <div>
            <QuestionForm question = {questionList[questionNumber]}  onAnswer = {handleAnswer}/>
            <p>Kysymys: {questionNumber}</p>
            <p>Oikein: {correct}</p>
            <button onClick={() => nextQuestion(setQuestionNumber, questionNumber)}>Next</button>
            
          
        </div>
    )
  }
  return (
    <div>
      <p>REsults</p>
      {correct}

    </div>
        
  )
}

export default QuestionArea
