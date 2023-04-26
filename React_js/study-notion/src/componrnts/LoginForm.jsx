import React, { useState } from 'react'

const LoginForm = () => {
    const [formData,setFormData]=useState({
        email:"",password:""
    })

    const changeHanlder=(event)=>{
        setFormData((prevData)=> (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
  return (
    <form action="">
        <label>
            <p>Email Address <sup>*</sup></p>
            <input type="text" required value={formData.email} onChange={changeHanlder} placeholder='Enter Email id'/>
        </label>

        <label>
            <p>Password<sup>*</sup></p>
            <input type="text" required value={formData.email} onChange={changeHanlder} placeholder='Enter Password'/>
        </label>
    </form>
  )
}

export default LoginForm