import React from 'react'
import Header from '../Component/Header'
import Blog from '../Component/Blog'
import Pagination from '../Component/Pagination'

const Home = () => {
  return (
    <div>
      <Header/>
      <div>
        <Blog/>
        <Pagination/>
      </div>
    </div>
  )
}

export default Home