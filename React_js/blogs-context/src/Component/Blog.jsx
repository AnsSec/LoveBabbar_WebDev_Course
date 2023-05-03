import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'

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
                    <div key={post.id}>
                        <p className='font-bold text-red-500 text-sm'>{post.title}</p>
                        <p className='text-xs mt-1'>
                            By <span className='italic'>{post.author}</span> on <span className='font-bold underline'>{post.category}</span>
                        </p>
                        <p className='text-xs'>Posted on {post.date}</p>
                        <p className='text-sm mt-3'>{post.content}</p>
                        <div className='flex gap-x-2'>
                            {post.tags.map((tag,index)=>{
                                return <span key={index} className='text-blue-500 text-xs underline font-bold'>{`#${tag}`}</span>
                            })}
                        </div>
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blog