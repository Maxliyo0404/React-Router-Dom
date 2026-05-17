import React from 'react'
import abut_1 from "./image/abut_1.jpg";
import "./AboutPages.css"
function AboutPages() {
  return (
    <div>
        <img src={abut_1} alt="rasm" />
        <h1 className='title'>AboutPages</h1>
        <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea expedita possimus voluptas veritatis mollitia modi, vel dolore tempore eum quam exercitationem velit sapiente dignissimos odit voluptates quaerat ab voluptatum?</p>
    </div>
  )
}

export default AboutPages