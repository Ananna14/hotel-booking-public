import React from 'react'
import { useParams } from 'react-router'

const Details = () => {
    const {userOverview} = useParams()
    return (
        <div className="services">
            <h1>Id: {userOverview}</h1>
        </div>
    )
}

export default Details
