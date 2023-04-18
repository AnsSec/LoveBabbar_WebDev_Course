import { useState } from "react";
import "./App.css";

function App() {
   let [count,setCount]=useState(0)

   const decreaseHandler=()=>{
    setCount(count-1);
   }

   const increaseHandler=()=>{
    setCount(count+1);
   }
  
   const resetHandler=()=>{
    setCount(0);
   }
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col bg-[#344151]  gap-10">
      <h1 className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</h1>

      <div className="bg-white flex justify-center items-center py-3 gap-12 rounded-sm text-[25px] text-[#344151] ">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        <div className="font-bold gap-12 text-5xl">{count}</div>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div>

      <button onClick={resetHandler} className="bg-[#0398d4] text-white w-fit px-4 py-2 rounded-sm text-3xl">Reset</button>
    </div>
  );
}

export default App;
