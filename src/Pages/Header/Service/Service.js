import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import './Service.css'

const Service = () => {
    const {register, handleSubmit, reset} = useForm()
    
    const onSubmit = data => {
        console.log(data);
        axios.post('https://murmuring-thicket-40618.herokuapp.com/services', data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset();
            }
        })
    }
    return (
        <div>
             <h2>Please Add a services</h2>
            <form className="add-service-form" onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true, maxLength: 20 })} placeholder="name"/>
      <textarea {...register("description")} placeholder="description"/>
      <input type="number" {...register("price")} placeholder="price"/>
      <input {...register("img")} placeholder="img-url"/>
      <input className="google-btn" type="submit" />
    </form>
        </div>
    )
}

export default Service
