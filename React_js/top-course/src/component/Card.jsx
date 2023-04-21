import React from 'react'
import {FcLike,FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify';


const Card = ({course,likedCourses,setLikedCourses}) => {
    
  function clickHandler(){
    if(likedCourses.includes(course.id)){
        // phele se like hua pada tha 
        setLikedCourses((prev)=>prev.filter((cid)=>(cid !==course.id)));
        toast.warning('like removed');
    }else{
        // phele se like nahi hai
        if(likedCourses.length===0){
            setLikedCourses([course.id]);
        } else{
            setLikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success('liked successfully');
    }
  }
    return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80 hover:scale-[105%] '>
        <div className='relative'>
            <img src={course.image.url}/>
            <div className='w-[35px] h-[35px] bg-white rounded-full absolute right-3 -bottom-3 grid place-items-center'>
                <button onClick={clickHandler}>
                    {
                        likedCourses.includes(course.id)?(<FcLike fontSize={'1.3rem'}/>):(<FcLikePlaceholder fontSize={'1.3rem'}/>)
                    }
                </button>
            </div>
        </div>
        <div className='p-4'>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white'>
                {
                    course.description.length>100?
                    (course.description.substr(0,100))+'...':
                    (course.description)
                }
            </p>
        </div>
    </div>
  )
}

export default Card;