import React from 'react'
import Templet from '../componrnts/Templet'
import loginImage from '../assets/login.png'

const Login = ({setIsLoggedin}) => {
  return (
    <Templet
    title="Welcom Back"
    desc1="Build Skills For today, tomorrow, and beyond"
    desc2="Education to future-proof your career"
    image={loginImage}
    formtype="login"
    setIsLoggedin={setIsLoggedin}
    />
  )
}

export default Login