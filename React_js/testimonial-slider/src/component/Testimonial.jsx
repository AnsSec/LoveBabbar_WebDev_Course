import React, { useState } from 'react'
import Cards from './Cards';
import {FiChevronLeft,FiChevronRight} from "react-icons/fi";


const Testimonial = ({reviews}) => {
  let [index,setIndex]=useState(0);
  const leftShiftHandler=()=>{
    if(index-1<0){
      setIndex(reviews.length-1);
    }else{
      setIndex(index-1)
    }
  }

  const rightShiftHandler=()=>{
    if(index+1>=reviews.length){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  const surpriseHandler=()=>{
    let randomIndex = Math.floor(Math.random()*reviews.length);
    setIndex(randomIndex)
  }


  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Cards review={reviews[index]}></Cards>
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