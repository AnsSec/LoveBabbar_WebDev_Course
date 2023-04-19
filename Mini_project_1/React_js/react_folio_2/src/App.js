import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text,setText]=useState('')
  
  useEffect(()=>{
    console.log('UI RENDRING done')
  },[text])

  const changeHandler=(event)=>{
    console.log(text)
    setText(event.target.value)
    
  }
  
  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
