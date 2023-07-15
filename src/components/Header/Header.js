import React from "react";
import "./Header.scss";
import Logo from "../../assets/images/logo.png";
const Header = (props) => {
 
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      
    </div>
  );
};

export default Header;
