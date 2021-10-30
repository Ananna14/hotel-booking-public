import React from 'react'
import useAuth from '../../Firebase/hooks/UseAuth'
import './Login.css'
// import { useHistory, useLocation } from 'react-router'

const Login = () => {
    const {user, signInUsingGoogle} = useAuth()

    return (
        <div className="services">
            <h2>Please Login</h2>
              <input className="input-added" type="text" name="" id="" placeholder="Name" /><br/>
            <input  className="input-added " type="email" name="" id="" placeholder="Enter email"/><br/>
            <input  className="input-added" type="password" name="" id="" placeholder="Password" /><br/>
            <input  className="input-added" type="password" name="" id="" placeholder="Confirm Password"/><br/>
            <button  className="input-added">Sign Up</button>
            <div>----------------------or-------------------------------</div><br/>
            <button onClick={signInUsingGoogle} className="google-btn">Google Sign Up</button>
           
        </div>
    )
}

export default Login
