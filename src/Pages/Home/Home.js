import React, { useEffect, useState } from 'react'
import SingleHome from './SingleHome'
import './Home.css'

const Home = () => {
    const [rooms, setRooms] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setRooms(data))
    },[])
    return (
        <div className="half-width col-12">
            {
               rooms.map(room=><SingleHome 
                key={room.name}
                room={room}></SingleHome>)
            }
        </div>
    )
}

export default Home
