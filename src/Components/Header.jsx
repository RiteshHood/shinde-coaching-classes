import React from "react"
import { Link } from "react-router-dom"
import Logo from "../assets/Logo.png";
import "../stylesheets/Header.css";
import "../stylesheets/Animation.css";

function Header() {
    const toggleMenu = () => {
        const navbar = document.getElementById("menu");
        if (navbar.style.display === "none") {
            navbar.style.display = "flex";
            navbar.classList.add("mobileNav");
        } else {
            navbar.style.display = "none";
        }
    }
    return (
        <>
            <header className="animation-for-header">
                <div>
                    <img src={Logo} alt="Logo" width="50" height="50" />
                    <span className="title">Shinde Coaching Classes</span>
                </div>
                <nav id="menu">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
                <h2 onClick={toggleMenu} className="menuBtn">&#9776;</h2>

            </header>
        </>
    )
}
export default Header