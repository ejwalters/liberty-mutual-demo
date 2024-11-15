import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">
        <img src="/assets/lib-mutual-navbar.png" alt="Liberty Mutual Logo" />
        </Link>
      </div>
      <nav className="navbar-links">
        <a href="#shop">Shop Insurance</a>
        <a href="#claims">Claims</a>
        <a href="#support">Customer Support</a>
      </nav>
      <div className="navbar-actions">
        <a href="#search">Search</a>
        <a href="#login">Log In</a>
      </div>
    </header>
  );
}

export default Navbar;
