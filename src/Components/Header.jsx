import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "../stylesheets/header.css";
import "../stylesheets/animation.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="animation-for-header">
      
      <div className="logo-section">
        <img src={Logo} alt="Logo" width="50" height="50" />
        <span className="title">Shinde Coaching Classes</span>
      </div>

      <nav className={isOpen ? "nav active" : "nav"}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <h2 onClick={toggleMenu} className="menuBtn">&#9776;</h2>

    </header>
  );
}

export default Header;