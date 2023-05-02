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
                    <div>
                        <p>{post.title}</p>
                        <p>
                            By <span>{post.author}</span> on <span>{post.category}</span>
                        </p>
                    </div>
                )))
            )
        }
    </div>
  )
}

export default Blog