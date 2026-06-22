import GamePage from './components/GamePage';
import InfoPage from './components/InfoPage';
import DailyChallenge from './components/DailyChallenge';
import styles from './mystyle.module.css'
import { useEffect, useState } from 'react';
import calc from './assets/calcPNG.png';

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'

const App = () => {
   const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme
  }, [theme])
 return ( 
      <Router>
        <div className= {styles.navigation}>
          <img className={styles.calc} src={calc}></img>
          speedMathTraining
          <Link className= {styles.link} to="/">home</Link>
          <Link className = {styles.link} to="/info">info</Link>
          <Link className = {styles.link}to="/dailychallenge">Daily Challenge</Link>
         <input className={styles.darkLightSwitch}type="checkbox" onClick={() => {setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))}}/>
         <h1 className={styles.icon}> {theme === "light" ? "☀️" : "🌙"}</h1>
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
