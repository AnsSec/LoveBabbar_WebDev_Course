import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { toast } from 'react-hot-toast'
const NavBar = ({isLoggedin,setIsLoggedin}) => {
  return (
    <div className='flex justify-evenly'>
        <Link to="/">
            <img src={logo} alt="logo" width={160} height={32} loading='lazy'/>
        </Link>

        <nav>
            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-3 '>
            {!isLoggedin &&
                <Link to="/login"><button>Login</button></Link>
            }
            {!isLoggedin &&
                <Link to="/signup"><button>Signup</button></Link>
            }
            {isLoggedin &&
                <Link to="/"><button onClick={()=>{
                    setIsLoggedin(false);
                    toast.success("log Out");
                }}>Log Out</button></Link>
            }
            {isLoggedin &&
                <Link to="/dashboard"><button>Dashboard</button></Link>
            }

            
        </div>
    </div>
  )
}

export default NavBar