import React from 'react';
import '../styles/navbar.css';

const Navbar = ({ isOpen, toggle }) => {
  return (
    <nav className='navbar'>
      <button className="toggle-button" onClick={toggle}>
        ☰
      </button>
      <ul className={`${isOpen ? 'open' : ''}`}>
        <li>Home</li>
        <li>Bookings</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;