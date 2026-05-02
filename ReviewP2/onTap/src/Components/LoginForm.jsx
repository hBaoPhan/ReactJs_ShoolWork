import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserAtom } from '../Atoms/UserAtom'
import { useRecoilState } from 'recoil'

const LoginForm = () => {
    let [loginForm, setLoginForm] = useState(
        { username: '', password: '' })
    let navigate = useNavigate()
    let [user, setUser] = useRecoilState(UserAtom)
    useEffect(() => {
        console.log(loginForm)
    }, [loginForm])

    let handleChange = (e) => {
        let { name, value } = e.target;
        setLoginForm((prevState) => {
            return { ...prevState, [name]: value }
        })
    }



    let handleSubmit = async (e) => {
        e.preventDefault()
        let res = await axios.post("http://localhost:8080/api/auth/login", loginForm)
        console.log(res)
        localStorage.setItem("token", res.data.accessToken)
        setUser(loginForm.username)
        console.log(user)
        navigate('/home')

    }

    return (
        <div>
            <form action="" onSubmit={(e) => { handleSubmit(e) }}>
                <input type="text" name='username' value={loginForm.username}
                    onChange={(e) => { handleChange(e) }} /> <br />
                <input type="password" name="password" value={loginForm.password}
                    onChange={(e) => { handleChange(e) }} /> <br />
                <button type='submit'>Login</button>

            </form>

        </div>
    )
}

export default LoginForm