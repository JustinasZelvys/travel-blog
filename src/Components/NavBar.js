import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="max-width">
        <div className="navbar-logo">
          <img src="/Logo.png" alt="Logo" />
        </div>
        <div className="burger-menu" onClick={handleMenuToggle}>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
          <div className="burger-bar"></div>
        </div>
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={handleMenuToggle}>Home</Link>
          </li>
          <li>
            <Link to="/blog" onClick={handleMenuToggle}>Blog</Link>
          </li>
          <li>
            <Link to="/gallery" onClick={handleMenuToggle}>Gallery</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuToggle}>Contact</Link>
          </li>
          <li>
            <span className='createButton'>
              <Link to="/create" onClick={handleMenuToggle}>Create Post</Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;