import React from 'react';
import '../../styles/common/Navbar.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='container'>
      <nav className="navbar">
        <ul className='nav'>
          <p className='brand'>
            <Link to="/">Meeker</Link>
          </p>
          <li className='nav-items'>
            <Link to="/">Home</Link>
          </li>
          <li className='nav-items'>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
