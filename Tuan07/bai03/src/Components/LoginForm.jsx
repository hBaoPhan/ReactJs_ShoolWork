import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import './Loginform.css'
import { useNavigate } from 'react-router-dom'
import UserAtom from '../UserAtom'


const LoginForm = () => {
    let navigate = useNavigate()
    let [inputName, setInputName] = useState("")
    let [user, setUser] = useRecoilState(UserAtom)

    let handleLogin = () => {

    }

    return (
        <div className='bg'>
            <input type="text" placeholder='Username' onChange={(e) => { setInputName(e.target.value) }} />
            <input type="text" placeholder='Password' />
            <button onClick={() => {
                setUser({ username: inputName, isLogin: true });
                navigate("/home")
            }}>Submit</button>
        </div>
    )
}

export default LoginForm