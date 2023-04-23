import React from 'react'
import Cards from './Cards';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


const Testimonial = ({reviews}) => {
  
  const leftShiftHandler=()=>{

  }

  const rightShiftHandler=()=>{

  }

  const surpriseHandler=()=>{
    
  }


  return (
    <div>
        <Cards review={reviews[0]}></Cards>
        <div className='flex text-3xl text-violet-400 my-5 gap-3 font-bold justify-center'>
            <button onClick={leftShiftHandler} className='hover:text-violet-500'>
                <FiChevronLeft/>
            </button>
            <button onClick={rightShiftHandler}  className='hover:text-violet-500'>
                <FiChevronRight/>
            </button>
        </div>

        <div>
            <button onClick={surpriseHandler}  className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonial