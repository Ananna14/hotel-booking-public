import React, { useEffect, useState } from 'react'
import './Order.css'

const Order = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id =>{
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service => service._id !== id);
                setServices(remaining)
            }
            
        })
    }
    return (
        <div className="services">
            <h2>this is order page</h2>
            {
                services.map(service => <div key={service._id}>
                 <h3>{service.name}</h3>
                 <button onClick={() =>handleDelete(service._id)}>Delete</button>
                 {/* <button>Delete</button> */}
                </div>)
            }
        </div>
    )
}

export default Order
