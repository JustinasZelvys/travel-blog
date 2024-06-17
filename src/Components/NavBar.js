import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="max-width">
      <div className="navbar-logo">
        <img src="/Logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <span className='createButton'><Link to="/create">Create Post</Link></span>
          
        </li>
      </ul>
      </div>
    </nav>
  );
};

export default NavBar;
