import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

 
export const AppContext=createContext();

function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setpage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    //data filling
    const fetchBlogPost=async(page=1)=>{
        
        setLoading(true);
        try{

        }
        catch(error)
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