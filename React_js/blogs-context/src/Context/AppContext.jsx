import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

 
export const AppContext=createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    //data filling
    const fetchBlogPost=async(page=1)=>{
        let url=`${baseUrl}?page=${page}`
        setLoading(true);
        try{
            const result=await fetch(url);
            const data=await result.json();
            setpage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("error in featching data");
            setpage(1);
            setPosts([]);
            setTotalPages(null)
        }
        setLoading(false)
    }

    const handlePageChange=(page)=>{
        setpage(page);
        fetchBlogPost(page);
    }
    const value={
        loading,setLoading,
        posts,setPosts,
        page,setpage,
        totalPages,setTotalPages
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}   