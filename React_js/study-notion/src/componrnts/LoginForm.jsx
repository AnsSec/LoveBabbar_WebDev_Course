import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedin}) => {
  
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler=(event)=>{
    event.preventDefault()
    setIsLoggedin(true);
    toast.success("Logged In")
    navigate("/dashboard")
  }
  return (
    <form onSubmit={submitHandler}>
      <label>
        <p>
          Email Address <sup>*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter Email id"
          name="email"
        />
      </label>

      <label>
        <p>
          Password<sup>*</sup>
        </p>
        <input
          type={showPassword ? "text" : "password"}
          required
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
        />
        <span onClick={() => setPassword((prev) => !prev)}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>

        <Link to="#">
          <p>Forgot Password</p>
        </Link>
      </label>

      <button >Sign In</button>
    </form>
  );
};

export default LoginForm;
