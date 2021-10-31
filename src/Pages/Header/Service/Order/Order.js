import React from 'react'
import { useState, useEffect } from "react";
import SingleHome from '../../../Home/SingleHome';

const Order = () => {
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        fetch('https://murmuring-thicket-40618.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    
    return (
        <div className="half-width col-12">
            <h1>{rooms.displayName}</h1>
            <h1>{rooms.email}</h1>
            {
               rooms.map(room=><SingleHome className="single-item"
                key={room.price}
                room={room}></SingleHome>)
            }
        </div>
    )
}

export default Order;