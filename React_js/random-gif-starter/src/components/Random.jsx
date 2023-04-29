
import Spinner from "./Spinner";
import useGIF from "../hooks/useGIF";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
 
     const {gif,loading,fetchData}=useGIF()

  return (
    <div className="w-1/2 bg-green-400 rounded-2xl border  border-black flex flex-col items-center gap-y-5 mt-4">
      <h1 className="text-2xl uppercase underline mt-4 font-bold">
        Random Gif
      </h1>
      {loading ? <Spinner /> : <img src={gif} alt="" width={450} />}

      <button
        onClick={()=>fetchData()}
        className="w-10/12 bg-green-300 text-lg py-2 rounded-xl mb-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
