import React from 'react'
import {useRecoilState} from "recoil"
import {UserAtom} from '../UserAtom'

const Home = () => {
    let [user,setUser]=useRecoilState(UserAtom)

  return (
    <div>User:{user.user}</div>
  )
}

export default Home