import { Link } from "react-router-dom";
import "./Header.css";
import React from 'react';




function Header() {
  return (
    <div>
        <h1>logo</h1>
        <ul className="header-list">
            <li><Link to="about">About</Link></li>
            <li><Link to="contact">Contact</Link></li>
            <li><Link to="services">Services</Link></li>
        </ul>
    </div>
  )
}

export default Header