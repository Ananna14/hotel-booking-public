import React from 'react'
import './SingleHome.css'

const SingleHome = ({room}) => {
    const {img, name, description} = room
    return (
        <div className="single-item">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <button className="btn-color">Buy Now</button>
        </div>
    )
}

export default SingleHome
