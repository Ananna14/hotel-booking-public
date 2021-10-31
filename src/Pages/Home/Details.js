import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
// import './Details.css'

const Details = () => {
    const {userOverview} = useParams();
    const [service, setService] = useState({});

    useEffect(()=>{
        fetch(`https://murmuring-thicket-40618.herokuapp.com/services/${userOverview}`)
        .then(res => res.json())
        .then(data => setService(data))
    
    },[])
    return (
        <div className="services">
            <h2 className="top-item">Detaile of:{service.name}</h2>
            <h1>this is booking: {userOverview}</h1>

        </div>
    )
}

export default Details
