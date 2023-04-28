import { Route,Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./componrnts/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard"
import { useState } from "react";
import PrivateRoute from "./componrnts/PrivateRoute";

function App() {
  const [isLoggedin,setIsLoggedin]=useState(false);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">
    <NavBar isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin}/>

    <Routes>
      <Route path="/" element={<Home isLoggedin={isLoggedin}/>}/>
      <Route path="/login" element={<Login setIsLoggedin={setIsLoggedin}/>}/>
      <Route path="/signup" element={<Signup setIsLoggedin={setIsLoggedin}/>}/>
      <Route path="/dashboard" element={
      
      <PrivateRoute isLoggedin={isLoggedin}>
        <Dashboard/>
      </PrivateRoute>
      
      }/>
      <Route path="/login" element={<Login/>}/>

    </Routes>
  </div>
  )
  
}

export default App;
