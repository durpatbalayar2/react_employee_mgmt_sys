
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 shadow-lg py-3 px-5 flex justify-between items-center">
   
      <div className="w-50 h-20">
        <img className="w-full h-full object-contain" src={logo} alt="Logo" />
      </div>

     
      <div className="flex gap-10 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white text-lg font-semibold hover:text-yellow-400 transition-colors ${
              isActive ? "border-b-2 border-yellow-400" : ""
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-white text-lg font-semibold hover:text-yellow-400 transition-colors ${
              isActive ? "border-b-2 border-yellow-400" : ""
            }`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-white text-lg font-semibold px-4 py-2 rounded hover:bg-yellow-400 hover:text-gray-800 transition-colors ${
              isActive ? "bg-yellow-400 text-gray-800" : ""
            }`
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
