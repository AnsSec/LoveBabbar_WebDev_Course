import React from 'react'
import Cards from './Cards'


const Testimonial = ({reviews}) => {
  return (
    <div>
        <Cards review={reviews[0]}></Cards>
    </div>
  )
}

export default Testimonial