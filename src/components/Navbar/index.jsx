import React from 'react';
import '../../styles/common/Navbar.css';

export default function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar">
        <ul className='nav'>
          <p className='brand'>
            <a href="">Meeker</a>
          </p>
          <li className='nav-items'>
            <a href="">Home</a>
          </li>
          <li className='nav-items'>
            <a href="">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
