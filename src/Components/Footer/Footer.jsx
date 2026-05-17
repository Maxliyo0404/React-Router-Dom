import { Link } from "react-router-dom";
import "./Footer.css";
import React from 'react'

function Footer() {
  return (
     <div className="boxs">
        <h1 className="footer-title">Lorem </h1>
        <ul className="footer-list">
            <li className="footer-item"><Link className="link" to="about">About</Link></li>
            <li className="footer-item"><Link className="link" to="contact">Contact</Link></li>
            <li className="footer-item"><Link className="link" to="services">Services</Link></li>
        </ul>
    </div>
  )
}

export default Footer