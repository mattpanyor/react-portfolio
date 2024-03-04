import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/'/>
        <Route path='/about'/>
        <Route path='/skills'/>
        <Route path='/projects'/>
      </Routes>
    </Router>
  )
}

export default App
