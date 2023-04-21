import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип соцсети Mesto" className="header__logo" />
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
