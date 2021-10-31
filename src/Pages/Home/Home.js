import React, { useEffect, useState } from 'react'
import SingleHome from './SingleHome'
import './Home.css'

const Home = () => {
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        fetch('https://murmuring-thicket-40618.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className="half-width col-12">
            {
               rooms.map(room=><SingleHome 
                key={room.price}
                room={room}></SingleHome>)
            }
        </div>
    )
}

export default Home
