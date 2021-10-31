import userEvent from '@testing-library/user-event'
import React from 'react'
import { Link } from 'react-router-dom'
import './SingleHome.css'

const SingleHome = ({room}) => {
    
    const {img, name, description, price, _id} = room

    const handelBooking =() =>{

        fetch('https://murmuring-thicket-40618.herokuapp.com/services',{
            method: "POST",
            headers:{
                "content-type":"application/json",
            },
            body:JSON.stringify({...room.sendData , email:userEvent.email })
        })
        .then(res => res.json())
        .then(data =>{
            if(data.insertedId){
                alert("Booked");
            }
        })
    }
    return (
        <div className="single-item">
            <img src={img} alt="" />
            <h3>{price}</h3>
            <h2>{name}</h2>
            <p>{description}</p>
            {/* <Link to={`/details/${_id}`} className="google-btn">Buy Now</Link> */}
            <button onClick={handelBooking}>Book Now</button>
        </div>
    )
}

export default SingleHome
