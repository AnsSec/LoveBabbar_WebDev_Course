import React from 'react'
import Header from '../Component/Header'
import { useLocation, useNavigation } from 'react-router-dom'
import Blog from '../Component/Blog';
import Pagination from '../Component/Pagination';

const TagPage = () => {
  const navigation=useNavigation();
  const location=useLocation();
  const tag=location.pathname.split("/").at(-1);
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigation(-1)}>
          back
        </button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blog/>
      <Pagination/>
    </div>
  )
}

export default TagPage