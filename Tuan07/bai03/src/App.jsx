import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginForm from './Components/LoginForm'
import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'

function App() {

  return (
    <div>


      <Routes>
        <Route path='/' element={<LoginForm></LoginForm>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>


      </Routes>


    </div>
  )
}

export default App
