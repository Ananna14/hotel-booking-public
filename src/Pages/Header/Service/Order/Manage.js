import React, { useEffect, useState } from 'react'

const Manage = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://murmuring-thicket-40618.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);

    const handleDelete = id =>{
        const url = `https://murmuring-thicket-40618.herokuapp.com/services/${id}`;
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
            {/* <h2>This is my manage page</h2> */}
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

export default Manage
