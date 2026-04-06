import React from 'react'
import ThemeAtom from '../ThemeAtom'
import { useRecoilState } from 'recoil'
import './Loginform.css'

const LoginForm = () => {

    let [theme, setTheme] = useRecoilState(ThemeAtom)
    let className = `bg-${theme ? "light" : "dark"}`
    return (
        <div className={className}>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
            <button>Submit</button>
            <button onClick={()=>{setTheme(!theme), localStorage.setItem("theme",theme)}} >Dark/Light</button>
        </div>
    )
}

export default LoginForm