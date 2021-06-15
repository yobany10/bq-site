import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import NavbarTop from './components/Navbar'
import Home from './components/Home'
import './App.css'

const App = () => {
  return (
    <div className='main_div'>
      <Router>
        <NavbarTop />
        <Route exact path='/'><Home /></Route>
      </Router>
    </div>
  )
}

export default App