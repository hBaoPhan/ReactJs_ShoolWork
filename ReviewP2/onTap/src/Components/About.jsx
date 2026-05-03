import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <nav>
                <Link to="/home">Home</Link>
                {"  |   "}

                <Link to="profile">profile</Link>
            </nav>
            <hr />
            <Outlet />
        </div>
    )
}

export default About