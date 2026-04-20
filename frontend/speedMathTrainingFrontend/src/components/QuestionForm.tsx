import type { Question } from "../types"

const QuestionComponent = ({question} : {question: Question}) => {
  return (
    <div>
    {question.val1} {question.operator}  {question.val2} = {question.ans}  
    </div>
  )
}



const QuestionForm = ({question} : {question : Question}) => {
   
    return (
        <div>
            <p> hello</p>
            <QuestionComponent question= {question}/>
            <form></form>
        </div>
        
    )
}

export default QuestionForm