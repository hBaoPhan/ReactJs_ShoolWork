import React from 'react'
import { useRecoilState } from "recoil"
import UserAtom from '../UserAtom.jsx'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let [user, setUser] = useRecoilState(UserAtom)
  let navigate = useNavigate()

  return (
    <div>User:{user.username} <br /> <button onClick={() => { navigate("/about") }}>About</button></div>
  )
}

export default Home