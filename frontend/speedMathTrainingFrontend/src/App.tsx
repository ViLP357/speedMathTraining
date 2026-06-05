import GamePage from './components/GamePage';
import InfoPage from './components/InfoPage';
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
    </div>

    <Routes>
      <Route path="/" element={<GamePage/>}> </Route>
      <Route path="/info" element={<InfoPage/>}> </Route>
    </Routes>
  </Router>


 
 )
}

export default App
