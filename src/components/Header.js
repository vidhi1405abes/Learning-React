import { useState, useEffect } from "react";
import logoFood from "url:../../logoProject.jpg";
import { Link } from "react-router-dom";
import useNetStatus from "../utils/useNetStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const netStatus = useNetStatus();
  useEffect(() => {
    console.log("Hi");
  }, []);
  return (
    <div className="flex justify-between bg-pink-100 shadow-2xl px-2.5 items-center sm:bg-amber-300">
      <div className="logoContainer">
        <img src={logoFood} className="w-50 h-40" />
      </div>
      <div className="">
        <ul className="flex">
          <li className="p-4 m-3 hover:bg-blue-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 m-3  hover:bg-blue-300">
            <Link to="/about">AboutUs</Link>
          </li>
          <li className="p-4 m-3  hover:bg-blue-300">
            <Link to="/contact">ContactUs</Link>
          </li>
          <li className="p-4 m-3  hover:bg-blue-300">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4 m-3  hover:bg-blue-300">{netStatus ? "🟢" : "🔴"}</li>
          <li className="p-4 m-3  hover:bg-blue-300">Cart</li>
          <button
            className="loginButton"
            onClick={() => {
              {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
