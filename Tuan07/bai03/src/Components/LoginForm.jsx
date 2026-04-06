import React from 'react'
import { useRecoilState } from 'recoil'
import './Loginform.css'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    let navigate=useNavigate()

    return (
        <div className='bg'>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
            <button onClick={navigate("/home")}>Submit</button>
        </div>
    )
}

export default LoginForm