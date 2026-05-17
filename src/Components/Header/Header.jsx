import "./Header.css";
import React from 'react'


function Header() {
  return (
    <div>
        <h1>logo</h1>
        <ul className="header-list">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Services</a></li>
        </ul>
    </div>
  )
}

export default Header