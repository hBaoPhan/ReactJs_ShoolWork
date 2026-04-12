import React from 'react'
import UserAtom from '../UserAtom'
import { useRecoilState } from "recoil"

const About = () => {
    let [user, setUser] = useRecoilState(UserAtom)
    return (
        <div>About user: {user.username}</div>
    )
}

export default About