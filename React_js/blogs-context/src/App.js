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
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <Blog/>
      <Pagination/>
    </div>
  ) ;
  
  
}
