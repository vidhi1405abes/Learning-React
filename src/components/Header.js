import { useState, useEffect } from "react";
import logoFood from "url:../../logoProject.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  useEffect(()=>{console.log("Hi");
  },[])
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logoFood} className="logo" width="100" height="100" />
      </div>
      <div className="navitemsContainer">
        <ul className="navItems">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">AboutUs</Link></li>
          <li><Link to="/ContactUs">ContactUs</Link></li>
          <li>Cart</li>
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
