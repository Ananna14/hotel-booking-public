import React from 'react'
import { Link } from 'react-router-dom'
import './SingleHome.css'

const SingleHome = ({room}) => {
    
    const {img, name, description, price, _id} = room
    return (
        <div className="single-item">
            <img src={img} alt="" />
            <h3>{price}</h3>
            <h2>{name}</h2>
            <p>{description}</p>
            <Link to={`/details/${_id}`} className="google-btn">Buy Now</Link>
        </div>
    )
}

export default SingleHome
