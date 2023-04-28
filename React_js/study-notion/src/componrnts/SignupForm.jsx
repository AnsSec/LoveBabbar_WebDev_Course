import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SignupForm = ({setIsLoggedin}) => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler=(event)=>{
    event.preventDefault()
    if(formData.password !=formData.confirmpassword){
      toast.error("Password do not match")
      return;
    }
      setIsLoggedin(true)
      toast.success("Account Created")
      const accountData={
        ...formData
      }
      console.log(accountData);
      navigate("/dashboard")
    
    
  }


  return (
    <div className="select-none">

      <div className="bg-richblack-800 p-1 flex gap-z-1 rounded-full max-w-max">
        <button >Student</button>
        <button  >Instructor</button>
      </div>

      <form  onSubmit={submitHandler}>
        {/* first and last name */}

        <div className="flex gap-x-4 mt-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-1 mb-richblack-5"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-1 mb-richblack-5"
            />
          </label>
        </div>

        {/* email address  */}
        <label className="w-full">
          <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem] mt-4">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
            className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-1 mb-richblack-5"
          />
        </label>

        {/* password  */}
        <div className="flex gap-x-4 mt-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-1 mb-richblack-5"
            />
            <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.37rem]">
              Confirm Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="confirmpassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmpassword}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mb-1 mb-richblack-5"
            />
            <span className="absolute right-3 top-9 cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" /> : <AiOutlineEye fontSize={24} fill="#AFB2BF" />}
            </span>
          </label>
        </div>

        <button className="w-full bg-yellow-50 rounded-lg font-medium text-richblack-900 px-3 py-2 mt-6">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
