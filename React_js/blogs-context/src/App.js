import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "../src/App.css"
import Blog from "./Component/Blog";
import Header from "./Component/Header";
import Pagination from "./Component/Pagination";
import { AppContext }  from "./Context/AppContext";
import { useContext, useEffect } from "react";


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParameters,setSearchParameters]=useSearchParams();

  const location=useLocation();

  useEffect(() => {
    const page=searchParameters.get('page')??1;
    
  },[]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>

    </Routes>
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    //   <Header/>
    //   <Blog/>
    //   <Pagination/>
    // </div>
  ) ;
  
  
}
