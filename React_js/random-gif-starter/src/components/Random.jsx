import React, { useState } from 'react'

const Random = () => {

  const [gif,setGif]=useState('');
     
  const clickHandler=()=>{

  }
  return (
    <div className='w-1/2 h-64 bg-green-400 rounded-2xl border  border-black flex flex-col items-center gap-y-5 mt-4'>
        <h1 className='text-2xl uppercase underline mt-4 font-bold'>Random Gif</h1>
        <img src={gif} alt="" width={450}/>
        <button onClick={clickHandler}>
            Generate
        </button>
    </div>
  )
}

export default Random