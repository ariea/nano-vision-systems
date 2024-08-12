import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpg'; // Adjust the path if necessary
import './Navbar.css';


const Navbar: React.FC = () => {
  return (
    <header>
      <div className="container">
        <img src={logo} alt="Nano Vision Tech Logo" className="logo" style={{ width: '50px', height: 'auto' }}  />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/problems">Problems</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/market">Market</Link></li>
            <li><Link to="/team">Team</Link></li>
            <li><Link to="/presentation">Presentation</Link></li>
            <li className="blank-column"></li> {/* This is the blank column */}
            <li className="blank-column"></li> {/* This is the blank column */}
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact-list">Contacts - List</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

