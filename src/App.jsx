import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Home from './pages/Home'
import Footer from './components/footer/Footer'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
      <div className='h-[6rem] z-0 sm:hidden'></div>
      <Footer/>
    </Router>
  )
}

export default App
