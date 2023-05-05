import { FaShoppingCart } from "react-icons/fa";
import logo from "./Daco_5715743.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <div>
            <img src={logo} alt="" />
          </div>
        </NavLink>
      </div>
      <div>
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/">
          <div>
            <FaShoppingCart />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
