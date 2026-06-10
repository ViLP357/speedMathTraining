import GamePage from './components/GamePage';
import InfoPage from './components/InfoPage';
import DailyChallenge from './components/DailyChallenge';
import styles from './mystyle.module.css'
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const App = () => {
   const [theme, setTheme] = useState('light');

  console.log(theme)

  useEffect(() => {
    document.body.className = theme
  }, [theme])
 return (

    <Router>
      <div className= {styles.navigation}>
        speedMathTraining
        <Link className= {styles.link} to="/">home</Link>
        <Link className = {styles.link} to="/info">info</Link>
        <Link className = {styles.link}to="/dailychallenge">Daily Challenge</Link>
        (dark/light)<input type="checkbox" onClick={() => {setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}}/>
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
