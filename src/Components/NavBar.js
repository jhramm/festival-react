import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/selmf-primary-logo-rgb.webp';
import facebook from '../img/Facebook.webp';
import instagram from '../img/insta-black.webp';
import twitter from '../img/twitter-black.webp';
import linkedin from '../img/linkedin-black.webp';

export default function NavBar() {
 const [menuOpen, setMenuOpen] = useState(false);

 const toggleMenu = () => {
  setMenuOpen(!menuOpen);
 }
 
  return (
    <div id='to-top'>
      <div id="page-top">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Stratford Music Festival Logo" />
            </Link>
          </div>
          <div>
            <div className="social-icons-top">
              <Link to="#">
                <img src={facebook} alt="Facebook" />
              </Link>
              <Link to="#">
                <img src={instagram} alt="Instagram" />
              </Link>
              <Link to="#">
                <img src={twitter} alt="Twitter" />
              </Link>
              <Link to="#">
                <img src={linkedin} alt="LinkedIn" />
              </Link>
            </div>
            <div className="menu">
              <Link to="/">Home</Link>
              <a href="#about">About Us</a>
              <Link to="#">The 2024 Festival</Link>
              <Link to="#">Get Involved</Link>
              <Link to="#">FAQs</Link>
              <Link to="#">News</Link>
              <Link to="#">Contact Us</Link>
            </div>
          </div>
          <div className="hamburger" id="hamburger" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} id="mobile-menu">
          <div className="social-icons-top-mobile">
            <Link to="#">
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link to="#">
              <img src={instagram} alt="Instagram" />
            </Link>
            <Link to="#">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link to="#">
              <img src={linkedin} alt="LinkedIn" />
            </Link>
          </div>
          <Link to="/">Home</Link>
          <a href="#about">About Us</a>
          <Link to="#">The 2024 Festival</Link>
          <Link to="#">Get Involved</Link>
          <Link to="#">FAQs</Link>
          <Link to="#">News</Link>
          <Link to="#">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}
