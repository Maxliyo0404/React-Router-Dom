import { Link } from "react-router-dom";
import "./Header.css";
import React from 'react';




function Header() {
  return (
    <div className="boxs">
        <h1 className="header-title">Logo </h1>
        <ul className="header-list">
            <li className="header-item"><Link className="link" to="about">About</Link></li>
            <li className="header-item"><Link className="link" to="contact">Contact</Link></li>
            <li className="header-item"><Link className="link" to="services">Services</Link></li>
        </ul>
    </div>
  )
}

export default Header