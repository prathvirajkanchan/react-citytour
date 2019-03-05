import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

export default () => {
  return (
    <nav className="navbar ">
      <img src={logo} alt="logo" />
      <ul className="navlinks">
        <li className="navlink">
          <a href="/" className="navlink">
            home
          </a>
        </li>
        <li className="navlink">
          <a href="/" className="navlink">
            about
          </a>
        </li>
        <li className="navlink">
          <a href="/" className="navlink active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
};
