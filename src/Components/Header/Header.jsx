import { Link } from "react-router-dom";
import "./Header.css";
import React from 'react';




function Header() {
  return (
    <div>
        <h1>logo</h1>
        <ul className="header-list">
            <li><Link   to="#">About</a></li>
            <li><Link   to="#">Contact</a></li>
            <li><Link   to="#">Services</a></li>
        </ul>
    </div>
  )
}

export default Header