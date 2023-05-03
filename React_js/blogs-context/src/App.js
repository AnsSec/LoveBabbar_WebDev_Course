import "../src/App.css"
import Blog from "./Component/Blog";
import Header from "./Component/Header";
import Pagination from "./Component/Pagination";
import { AppContext }  from "./Context/AppContext";
import { useContext, useEffect } from "react";


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div>
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  ) ;
  
  
}
