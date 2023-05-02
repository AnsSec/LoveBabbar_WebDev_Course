import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'
import Spinner from './Spinner'

const Blog = () => {
  const {loading,posts}=useContext(AppContext)
  
  return (
    <div className='progress'>
        {
            loading ?(<Spinner/>):(
                posts.length === 0 ? (<div>
                    <p>No Post Found</p>
                </div>):(posts.map((post)=>(
                    <div key={post.id}>
                        <p>{post.title}</p>
                        <p>
                            By <span>{post.author}</span> on <span>{post.category}</span>
                        </p>
                        <p>Posted on {post.date}</p>
                        <p>{post.content}</p>
                        <div>
                            {post.tags.map((tag,index)=>{
                                return <span key={index}>{`#${tag}`}</span>
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