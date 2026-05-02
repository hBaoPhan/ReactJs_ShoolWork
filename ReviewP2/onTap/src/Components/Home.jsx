import React from 'react'
import { UserAtom } from '../Atoms/UserAtom'
import { useRecoilState } from 'recoil'
import axios from 'axios'

const Home = () => {
    let [user, setUser] = useRecoilState(UserAtom)

    let handleGetUser = async () => {
        let res = await axios.get("http://localhost:8080/api/users", {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log(res)

    }

    return (
        <div>Home: username: {user}

            <button onClick={handleGetUser}>get user</button>


        </div>
    )
}

export default Home