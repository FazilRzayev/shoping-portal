import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function About() {
    return (
        <div>
            <h1>About</h1>
            <hr />
            <Link className='link' to="employee">About employees</Link>
            <Link to="company">About company</Link>

            <Outlet />
        </div>

    )
}

export default About
