import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LoginForm from './Components/LoginForm'
import { useRecoilState } from 'recoil'
import ThemeAtom from './ThemeAtom'

function App() {
 let [theme,setTheme]= useRecoilState(ThemeAtom)
  return (
   <div>
    <LoginForm></LoginForm>
   </div>
  )
}

export default App
