import { useState } from 'react'
import LoginForm from './Components/LoginForm'
import Home from './Components/Home'
import About from './Components/About'
import Profile from './Components/Profile'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to="/login"></Navigate>}></Route>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}>
          <Route path='profile' element={<Profile></Profile>}></Route>

        </Route>
        <Route path='*' element={<div>404 - Not Found</div>}></Route>
      </Routes>

    </div>
  )
}

export default App
