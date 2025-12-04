import React from "react";
import "../stylesheets/hero.css";
import finalVector from "../assets/finalVector.jpg"

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content animate-for-Hero">
                <h1 className="hero-title">Shinde Coaching <br />Classes</h1>
                <p className="hero-subtitle">Empowering Future Minds through Quality Education</p>
            </div>
            <div className="hero-image animate-for-Hero-image">
                <img src={finalVector} alt="Coaching Illustration" />
            </div>
        </section>
    );
}

export default Hero;
