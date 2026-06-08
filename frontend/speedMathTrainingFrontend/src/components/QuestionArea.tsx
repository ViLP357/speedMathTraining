import type { Question,QuestionAreaProps, Operator } from "../types"
import { useState } from 'react'
import React from 'react'; 
import QuestionForm from "./QuestionForm";
import Timer from "./Timer"
import styles from '../mystyle.module.css'; 


const nextQuestion =  (setQuestionNumber : React.Dispatch<React.SetStateAction<number>>, questionNumber : number) => {
  setQuestionNumber(questionNumber + 1)
}

const generateQuestion = (operators: Operator[], digits: number[]) => {
  console.log("maks: " + (Math.pow(10, digits[0])))
  console.log(Math.random()*10)
  console.log(Math.pow(10, digits[0]-1))
  console.log(Math.ceil(Math.pow(10, Math.random() * digits[1]-digits[0])))
  const q = {
    //val1: Math.floor(Math.random()*(Math.pow(10,digits[0]))*Math.pow(10, digits[1]-digits[0])),
    val1: Math.floor((Math.random()*10)*(Math.pow(10, digits[0]-1))* Math.pow(10, Math.ceil(Math.random() * digits[1]-digits[0]))),
    
    val2: Math.floor((Math.random()*10)*(Math.pow(10, digits[0]-1))*Math.pow(10, Math.ceil(Math.random() * digits[1]-digits[0]))),
    
    operator: operators[Math.floor(Math.random()*operators.length)],
  }
  return q;
}

const QuestionArea = ({acceptedOperators, setStarted, digits, numberOfQuestions} : QuestionAreaProps) => {
  //console.log(`acc ${acceptedOperators}`);

  const operators: Operator[] = [];
  //"+", "-", "*"
  //console.log(acceptedOperators)
  if (acceptedOperators.addition === true) {
    operators.push('+')
  } if (acceptedOperators.subtraction === true) {
    operators.push('-')
  } if (acceptedOperators.multiplication === true) {
    operators.push('*')
  }

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
  const [questionList] = useState<Question[]>(()=> {
    const questions: Question[] = [];
    for (let i = 0; i<numberOfQuestions;i++) {
      questions.push(generateQuestion(operators, digits))
    }
    return questions
  })

  //console.log(digits)
  if (questionNumber<questionList.length) {
    return (        
          <div>
           <Timer seconds = {seconds} setSeconds = {setSeconds}/>
            <QuestionForm question = {questionList[questionNumber]}  onAnswer = {handleAnswer}/>
            <button onClick={() => nextQuestion(setQuestionNumber, questionNumber)}>Next</button>
            <p>Question: {questionNumber+1} / {questionList.length}</p>
            <p>Correct: {correct}</p>
            
        </div>
    )
  }
  return (
    <div className={styles.results}>
      <p>Results</p>
      You got {correct} questions of {questionList.length} correct
      
      <br></br>
      <div className={styles.timer}>
      {Math.floor(seconds/60).toString().padStart(2, "0")}:{Math.floor(seconds%60).toString().padStart(2, "0")}
      </div>
       <br></br>
      <button className= {styles.basicButton} onClick={restart}>Restart</button>
    </div>
        
  )
}

export default QuestionArea
 //