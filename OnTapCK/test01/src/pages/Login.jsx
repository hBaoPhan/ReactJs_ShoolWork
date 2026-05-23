import React, { useEffect, useState } from 'react'
import { userState } from '../store/atom'
import { useRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

const Login = () => {
    let [user, setUser] = useRecoilState(userState)
    let navigate = useNavigate()
    let [savedUser, setSavedUser] = useLocalStorage('user', null)

    let [password, setPassword] = useState('')
    let [username, setUsername] = useState('')


    let handleLogin = (e) => {
        e.preventDefault()
        if (username === 'a' && password === '1') {
            let userObj = {
                username: username
            }
            setUser(userObj)
            setSavedUser(userObj)
            navigate('/')
        }

    }

    useEffect(() => { console.log(user) }, [user])
    return (
        <div className='card'>
            <form action="" onSubmit={handleLogin}>
                <label htmlFor="">username</label>
                <input type="text" onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="">password</label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit'>Đăng nhập</button>
                <p>admin/123</p>

            </form>




        </div>
    )
}

export default Login