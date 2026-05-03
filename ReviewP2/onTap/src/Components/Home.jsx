import React from 'react'
import { UserAtom } from '../Atoms/UserAtom'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { Link, Outlet, useNavigate } from 'react-router-dom'


const Home = () => {
    let [user, setUser] = useRecoilState(UserAtom)
    let navigate = useNavigate()

    let handleGetUser = async () => {
        let res = await axios.get("http://localhost:8080/api/users", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(res)

    }
    let handleLogout = () => {
        console.log(user)
        if (user) {
            localStorage.removeItem("token")
            navigate('/login')
        }
    }

    return (
        <div>Home: username: {user.username}
            <br />
            <nav>
                <Link to="/home">Home</Link>
                {"  |   "}
                <Link to="/about">About</Link>
            </nav>
            <Outlet></Outlet>

            <button onClick={handleGetUser}>get user</button> <br />
            <button onClick={handleLogout}>Đăng xuất</button>


        </div>
    )
}

export default Home