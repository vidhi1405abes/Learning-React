import { useState } from "react";
import logoFood from "url:../../logoProject.jpg";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={logoFood} className="logo" width="100" height="100" />
      </div>
      <div className="navitemsContainer">
        <ul className="navItems">
          <li>Home</li>
          <li>AboutUs</li>
          <li>ContactUs</li>
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
