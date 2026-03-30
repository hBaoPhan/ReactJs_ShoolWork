import { useState } from 'react'
import './App.css'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Dashboard from './components/Dashboard.jsx'
import Profile from './components/Profile.jsx'
import Setting from './components/Setting.jsx'
import Notfound from './components/Notfound.jsx'

function App() {

  return (
    <div>
      <nav style={{display:'flex', justifyContent:'center',gap:'10px'}}>
          <Link to='/' >Home</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
           <Link to='/dashboard'>Dashboard</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
            <Route path='profile' element={<Profile></Profile>}></Route>
            <Route path='setting' element={<Setting></Setting>}></Route>
        
        </Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

    </div>

  )
}

export default App
