import React from "react";
import logo from './logo.png';

import "./Navbar.css";

const navbar = props => (
  <header className="navbar">
    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet"></link>
    <nav className="navbar_navigation">
      <div> </div>{" "}
      <div className="navbar_logo">
        {" "}
        <a href="/"> <img src={logo} alt="Logo" /> </a>
      </div>
      <div className="spacer" />
      <div className="navbar_options">
        <ul>
          <li>
            <a href="/">Instalação </a>{" "}
          </li>{" "}
          <li>
            <a href="/">Manutenção </a>{" "}
          </li>{" "}
        </ul>{" "}
      </div>
    </nav>
  </header>
);

export default navbar;
