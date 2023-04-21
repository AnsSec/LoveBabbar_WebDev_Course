import React, { useEffect, useState } from 'react'
import Card from './Card'

const Cards = ({courses}) => {
    const [likedCourses,setLikedCourses]=useState([]);
    const getCourses=()=>{
        let allCourses=[];
        Object.values(courses).forEach(array=>{
            array.forEach(course=>{
                allCourses.push(course)
            })
        })
        return allCourses;
    }

    return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {
            getCourses().map( (course)=>(
                <Card key={course.id} course={course} 
                likedCourses={likedCourses}
                setLikedCourses={setLikedCourses}
                />
            ))
        }
    </div>
  )
}

export default Cards;