import React, { useState } from 'react'
import axios from "axios" // API calling
import './register.css'
import { useNavigate } from "react-router-dom";


const Register = () => {
    const history = useNavigate()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if ((name) && (email) && (password) && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message)
                    history("/login")
                })
        }
        else {
            alert("Invalid Credentials")
        }
    }

    return (
        <header>
            <div id="main-body">
                <div id="box">
                    <form action="#">
                        <h2 id="title">SIGN UP</h2>
                        <div className="block">
                            <label>Username</label>
                            <input type="text" name='name' placeholder="Enter Username" onChange={handleChange}/>
                        </div>
                        <div className="display"></div>
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
                        <div className="block">
                            <label>Confirm Password</label>
                            <input type="password" name='reEnterPassword' placeholder="Re-enter your password" onChange={handleChange}/>
                        </div>
                        <div className="display"></div>
                        <div className="submit-btn">
                            <input type="button" onClick={register} value="Sign Up" />
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Register