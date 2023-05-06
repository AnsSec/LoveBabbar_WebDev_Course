import { useEffect, useState } from "react";
import Spinner from '../components/Spinner'
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading]=useState(false);
  const [post,setPost]=useState([]);

  const fetchProductData=async()=>{
    setLoading(true);
    try{
      const res = await fetch(API_URL)
      const data= await res.json();

      setPost(data)
    }
    catch(error){
      console.log("Error..")
      setPost([])
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchProductData();
  },[]);


  return (
    <div>
      {
        loading?<Spinner/>:
        post.length>0?
        (<div>
          {
            post.map((post)=>(
              <Product key={post.id} post={post}/>
            ))
          }
        </div>):
        <div>
          <p>No Data found</p>
        </div>
      }
    </div>
  );
};

export default Home;
