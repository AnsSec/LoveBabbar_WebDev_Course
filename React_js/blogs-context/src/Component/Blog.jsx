import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'
import BlogDetails from './BlogDetails'

const Blog = () => {
  const {loading,posts}=useContext(AppContext)
  
  return (
    <div className='w-11/12 max-w-2xl  py-3 flex justify-center items-center flex-col gap-y-7 mt-16 mb-16'>
        {
            loading ?(<Spinner/>):
            (
                posts.length === 0 ? (<div>
                    <p>No Post Found</p>
                </div>):(posts.map((post)=>(
                    <BlogDetails key={post.id} post={post}/>
                )))
            )
        }
    </div>
  )
}

export default Blog