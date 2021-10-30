import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../Firebase/hooks/UseAuth'
import './Header.css'

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div  className="nav">
            <Link className="heading" to="/home">My Orders</Link>
            <Link className="heading" to="/orders">Manage All Orders</Link>
            <Link className="heading" to="/service">Add A New Service</Link>
        { user.email && <span style={{color:'white'}}>Hello{user.displayName}</span>}
        {
            user.email ?
            <button onClick={logOut}>log out</button>
            :
            <Link className="heading" to="/login">login</Link>}
       
        </div>
    )
}

export default Header
