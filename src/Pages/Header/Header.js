import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div  className="nav">
            <Link className="heading" to="/home">My Orders</Link>
            <Link className="heading" to="/orders">Manage All Orders</Link>
            <Link className="heading" to="/service">Add A New Service</Link>
        </div>
    )
}

export default Header
