import GamePage from './components/GamePage';
import InfoPage from './components/InfoPage';
import DailyChallenge from './components/DailyChallenge';
import styles from './mystyle.module.css'

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const App = () => {
  const padding = {
    padding: 5,
    color: "green"
  }
 return (
  <Router>
    <div className= {styles.navigation}>
      speedMathTraining
      <Link style = {padding} to="/">home</Link>
      <Link  style = {padding}to="/info">info</Link>
      <Link  style = {padding}to="/dailychallenge">Daily Challenge</Link>
      (dark/light)<input type="checkbox"/>
    </div>

    <Routes>
      <Route path="/" element={<GamePage/>}> </Route>
      <Route path="/info" element={<InfoPage/>}> </Route>
      <Route path="/dailychallenge" element={<DailyChallenge/>}> </Route>
    </Routes>
  </Router>
 )
}

export default App
