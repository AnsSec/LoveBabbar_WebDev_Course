import React from 'react'
import signUpImage from '../assets/signup.png'
import Templet from '../componrnts/Templet'

const Signup = ({setIsLoggedin}) => {
  return (
    <Templet
    title="Join the millions learning to code with studyNotion for free"
    desc1="Build Skills For today, tomorrow, and beyond"
    desc2="Education to future-proof your career"
    image={signUpImage}
    formtype="signup"
    setIsLoggedin={setIsLoggedin}
    />
  )
}

export default Signup