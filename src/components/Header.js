import logoFood from "url:../../logoProject.jpg"

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;