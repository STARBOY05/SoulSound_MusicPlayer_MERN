import React, { useState } from 'react'
import './login.css'
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
    const history = useNavigate()

    const [user, setUser] = useState({
        email: "",
        password: "",
    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const login = () => {
        axios.post("http://localhost:9002/login", user)
            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history("/")
            })
    }
    return (
        <header>
            <div id="main-body">
                <div id="box">
                    <form action="#">
                        <h2 id="title">LOGIN</h2>
                        <div className="block">
                            <label>Email</label>
                            <input type="email" name='email' placeholder="hello@example.com"  onChange={handleChange}/>
                        </div>
                        <div className="display"></div>
                        <div className="block">
                            <label>Password</label>
                            <input type="password" name='password' placeholder="Enter your password" onChange={handleChange}/>
                        </div>
                        <div className="display"></div>
                        <div className="submit-btn">
                            <input type="button" onClick={login} value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Login