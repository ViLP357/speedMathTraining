import './App.css'
import QuestionForm from './components/QuestionForm';

//import type { Question } from "./types"




const App = () => {


  const courseName = "Mental math training";


  return (
    <div>
      {courseName}

    
    <QuestionForm/>
    </div>
  )
}

export default App
