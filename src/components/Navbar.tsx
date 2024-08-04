import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header>
      <div className="container">
        <img src="path_to_logo.png" alt="Nano Vision Systems Logo" className="logo" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/problems">Problems</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/market">Market</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/contact-list">Contacts - List</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

