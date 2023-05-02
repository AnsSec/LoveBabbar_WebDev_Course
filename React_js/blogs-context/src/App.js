import { useContext, useEffect } from "react";
import Blog from "./Component/Blog";
import Header from "./Component/Header";
import Pagination from "./Component/Pagination";
import AppContext  from "./Context/AppContext";

export default function App() {
  const {fetchBlogPost}=useContext(AppContext)

  useEffect(() => {
    fetchBlogPost();
  },[]);

  return (
    <div>
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  ) 
  
  
}
