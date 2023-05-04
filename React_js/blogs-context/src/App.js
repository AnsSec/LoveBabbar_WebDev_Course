import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import "../src/App.css"
import { AppContext }  from "./Context/AppContext";
import { useContext, useEffect } from "react";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";


export default function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  const [searchParameters,setSearchParameters]=useSearchParams();

  const location=useLocation();

  useEffect(() => {
    const page=searchParameters.get('page')??1;

    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),tag)
    }
    else if(location.pathname.includes("categories")){
      const categories=location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page,null,categories))
    }
    else{
      fetchBlogPosts(Number(page))
    }

  },[location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>

    </Routes>
  ) ;
  
  
}
