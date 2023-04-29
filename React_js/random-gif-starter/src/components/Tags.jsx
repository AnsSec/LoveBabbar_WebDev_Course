import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tags = () => {
  const [tag, setTag] = useState("car");

  const {gif,loading,fetchData}=useGIF(tag);

  return (
    <div className="w-1/2 bg-blue-400 rounded-2xl border mb-10 border-black flex flex-col items-center gap-y-5 mt-4">
      <h1 className="text-2xl uppercase underline mt-4 font-bold">
        Random {tag} Gif
      </h1>
      {
        loading ? (<Spinner/>):(<img src={gif} alt="" width={450} />)
      }
      
      <input className="w-10/12 text-lg py-2 rounded-xl mb-1 outline-none text-center" type="text"
        onChange={(event)=>setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={()=>fetchData(tag)}
        className="w-10/12 bg-blue-300 text-lg py-2 rounded-xl mb-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Tags;
