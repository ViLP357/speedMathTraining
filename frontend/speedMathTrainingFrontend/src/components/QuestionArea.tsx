import type { Question,QuestionAreaProps } from "../types"
import { useState } from 'react'
import React from 'react'; 
import QuestionForm from "./QuestionForm";


const nextQuestion =  (setQuestionNumber : React.Dispatch<React.SetStateAction<number>>, questionNumber : number) => {
  setQuestionNumber(questionNumber + 1)
}

const generateQuestion = (operators : string[]) => {
  const q = {
    val1: Math.floor(Math.random()*10),
    val2: Math.floor(Math.random()*10),
    operator: operators[Math.floor(Math.random()*operators.length)],
  }
  return q;
}

const QuestionArea = ({acceptedOperators} : QuestionAreaProps) => {
  console.log(`acc ${acceptedOperators}`);

  const operators: string[] = []
  //"+", "-", "*"
  const handleAnswer = (isCorrect : boolean) => {
    if (isCorrect) {
      setCorrect(correct+1);
    }
    setQuestionNumber(questionNumber+1)
  }
  const restart = () => {
    setQuestionNumber(0)
    setCorrect(0)
  }

    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);

    const questionList: Question[] = [
    {
      val1: 2,
      val2: 3,
      operator: "+",
    }, 
    {
      val1: 3,
      val2: 3,
      operator: "+",
    }
  ]
  
  console.log(acceptedOperators)
  if (acceptedOperators.addition === true) {
    operators.push('+')
  }
    if (acceptedOperators.subtraction === true) {
    operators.push('-')
  }
  if (acceptedOperators.multiplication === true) {
    operators.push('*')
  }

  if (operators.length>0) {
    for (let i = 0; i<5;i++) {
      questionList.push(generateQuestion(operators));
    }
  }
  console.log(operators)
  console.log(`Questions ${questionList}`)

  if (questionNumber<questionList.length) {
    return (        
          <div>
            <QuestionForm question = {questionList[questionNumber]}  onAnswer = {handleAnswer}/>
            <p>Question: {questionNumber+1} / {questionList.length}</p>
            <p>Correct: {correct}</p>
            <button onClick={() => nextQuestion(setQuestionNumber, questionNumber)}>Next</button>
        </div>
    )
  }
  return (
    <div>
      <p>Results</p>
      You got {correct} questions correct
      <button onClick={restart}>Restrt</button>
    </div>
        
  )
}

export default QuestionArea
