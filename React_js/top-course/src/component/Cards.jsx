import React from 'react'
import Card from './Card'

const Cards = ({courses}) => {
    let allCourses=[];


    const getCourses=()=>{
        Object.values(courses).forEach((courseCatogery)=>{
            courseCatogery.forEach((course)=>{
                allCourses.push(course)
            })
        })
        return allCourses;
    }

    return (
    <div>
        {
            getCourses().map( (course)=>{
                return <Card course={course}/>
            })
        }
    </div>
  )
}

export default Cards