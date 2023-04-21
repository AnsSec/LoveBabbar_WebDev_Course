import React from 'react'
import {FcLike} from 'react-icons/fc'


const Card = ({course,likedCourses,setLikedCourses}) => {
    
  const clickHandler=()=>{
    if(likedCourses.includes(course.id)){
        
    }
  }
    return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
        <div className='relative'>
            <img src={course.image.url}/>
            <div className='w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                    <FcLike fontSize={'1.2rem'}/>
                </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p>{course.description}</p>
        </div>
    </div>
  )
}

export default Card