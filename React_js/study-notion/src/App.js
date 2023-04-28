import { Route,Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./componrnts/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"
import { useState } from "react";

function App() {
  const [isLoggedin,setIsLoggedin]=useState(false);
  return (
    <div>
    <NavBar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedin={setIsLoggedin}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
  </div>
  )
  
}

export default App;
