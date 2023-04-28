import React from "react";
import frame from "../assets/frame.png"
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";


const Templet = ({ title, desc1, desc2, image, formtype, setIsLoggedin }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {
            formtype==="signup"?(<SignupForm setIsLoggedin={setIsLoggedin}/>):(<LoginForm setIsLoggedin={setIsLoggedin}/>)
        }
        <div>
            <div></div>
            <p>OR</p>
            <div></div>
        </div>
        <button><p>Sign Up with Google</p></button>
        <div>
            <img src={frame} alt="pattern" width={558} height={504} loading="lazy" />
            <img src={image} alt="pattern" width={558} height={490} loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default Templet;
