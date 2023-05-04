import React, { useContext, useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from "../baseUrl";
import Header from '../Component/Header';
import Spinner from '../Component/Spinner';
import { data } from 'autoprefixer';
import BlogDetails from '../Component/BlogDetails';

const BlogPage = () => {
  const [blog,setBlog]=useState(null);
  const [relatedBlogs,setRelatedBlogs]=useState([]);
  const location=useLocation();
  const navigation=useNavigate();
  const {loading,setLoading}=useContext(AppContext);
  const blogId=location.pathname.split('/').at(-1);

  const fetchRelatedBlogs=async ()=>{
    setLoading(true);
    let url=`${baseUrl}?blogId=${blogId}`
    try{
      const res= await fetch(url);
      const data= await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(error){
      console.log("Error in fetching data");
            setBlog(null);
            setRelatedBlogs([]);
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(blogId){
      fetchRelatedBlogs();
    }
  },[location.pathname])
  return (
    <div>
      <Header/>
      <div>
        <button onClick={()=>navigation(-1)}>
          back
        </button>
      </div>
      {
        loading?(<div><p>Loading</p></div>): 
        blog? (<div>
          <BlogDetails post={blog}/>
          <h2>Related Blogs</h2>
          {
            relatedBlogs.map((post)=>{
              <div key={post.id}>
                <BlogDetails post={post}/>
              </div>
            })
          }
        </div>):(<div> <p>No Blog Found</p> </div>) 
      }
    </div>
  )
}

export default BlogPage