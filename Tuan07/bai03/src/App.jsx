import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginForm from './Components/LoginForm'
import { Route, Routes,Link } from 'react-router-dom'
import Home from './Components/Home'

function App() {

  return (
    <div>
      <LoginForm></LoginForm>

      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>

      </Routes>


    </div>
  )
}

export default App
