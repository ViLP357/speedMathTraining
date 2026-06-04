import type { Question,QuestionAreaProps, Operator } from "../types"
import { useState } from 'react'
import React from 'react'; 
import QuestionForm from "./QuestionForm";
import Timer from "./Timer"
import styles from '../mystyle.module.css'; 


const nextQuestion =  (setQuestionNumber : React.Dispatch<React.SetStateAction<number>>, questionNumber : number) => {
  setQuestionNumber(questionNumber + 1)
}

const generateQuestion = (operators : Operator[]) => {
  const q = {
    val1: Math.floor(Math.random()*10),
    val2: Math.floor(Math.random()*10),
    operator: operators[Math.floor(Math.random()*operators.length)],
  }
  return q;
}

const QuestionArea = ({acceptedOperators, setStarted} : QuestionAreaProps) => {
  console.log(`acc ${acceptedOperators}`);

  const operators: Operator[] = [];
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
    setStarted(false)
  }

    const [questionNumber, setQuestionNumber] = useState<number>(0);
    const [correct, setCorrect] = useState<number>(0);
     const [seconds, setSeconds ] = useState<number>(0);

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
  //console.log(operators)
  //console.log(`Questions ${questionList}`)

  if (questionNumber<questionList.length) {
    return (        
          <div>
           <Timer seconds = {seconds} setSeconds = {setSeconds}/>
            <QuestionForm question = {questionList[questionNumber]}  onAnswer = {handleAnswer}/>
            <p>Question: {questionNumber+1} / {questionList.length}</p>
            <p>Correct: {correct}</p>
            <button onClick={() => nextQuestion(setQuestionNumber, questionNumber)}>Next</button>
        </div>
    )
  }
  return (
    <div className={styles.results}>
      <p>Results</p>
      You got {correct} questions of {questionList.length} correct
      <button onClick={restart}>Restrt</button>
      <br></br>
      {Math.floor(seconds/60).toString().padStart(2, "0")}:{Math.floor(seconds%60).toString().padStart(2, "0")}
      
    </div>
        
  )
}

export default QuestionArea
 //