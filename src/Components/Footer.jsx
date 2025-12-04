import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      {/* Main footer container */}
      <div className="footer-container">
        
        {/* Column 1: Logo + Tagline */}
        <div className="footer-brand">
          <h2>Shinde Coaching Classes</h2>
          <p>Empowering Students, Building Futures.</p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/About">Courses</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Siddhivinayak Nagar, Chandan Zira, Jalna</p>
          <p>9021467222</p>
          <p>✉ shindeclasses@example.com</p>
        </div>

      </div>

      {/* Bottom strip */}
      <div className="footer-bottom">
        <p>© {currentYear} Shinde Coaching Classes | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
