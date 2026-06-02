import './App.css'

import QuestionArea from './components/QuestionArea';

const App = () => {
  const siteName = "Mental math training";

  return (
    <div>
   
      {siteName}
      <p>Choose mode (no auto submit yet)</p>
      <form >
        <input type = "radio" id="auto_subit" name= "gamemode" value="auto_submit"/>
        <label>auto submit</label>
        <input type = "radio" id="no_auto_submit" name= "gamemode" value="no_auto_submit"/>
        <label>no auto submit</label>
      </form>

    <QuestionArea/>
    </div>
  )
}

export default App
