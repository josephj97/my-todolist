import React, { useState } from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import './Login.css'

async function loginUser(credentials) {
    return fetch('https://api-nodejs-todolist.herokuapp.com/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({ email, password });
        // setToken(token);
        console.log(token)
    }
    return (
        <section className="l-wrapper">
            <div className="paddings innerWidth l-container">
                <form onSubmit={handleSubmit}>
                    <h1 className="l-title">Login</h1>
                    <div className="l-email">
                        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                        <MdAlternateEmail className='l-icon' />
                    </div>
                    <div className="l-password">
                        <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                        <FaLock className='l-icon' />
                    </div>
                    <button type="submit" className="l-submit">Sign in</button>
                </form>
            </div>
        </section>
    )
}

export default Login