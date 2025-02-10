import React from 'react';
import './Header.css';
import agritech_logo from '../assets/agritech_logo.png'
import {Link} from 'react-router-dom'


function Header() {
  return (
    <header className="header">
      <div className="logo">
        
        <a href="/">Sunrise Agritech</a>
      </div>
      <nav className="navbar">
      <Link to="/Products" className="product">Products</Link>
      </nav>
      <div className='search-box'>
        <input placeholder='Search Item'/>
      </div>
      <div className="user-links">
        <Link to="/login" className="header-link">Login/Signup</Link>
      </div>
      <div className="cart">
        <a href="/cart">🛒 Cart</a>
      </div>
    </header>
  );
}

export default Header;

