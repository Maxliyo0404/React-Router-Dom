import "./ServicesPages.css";
import React from 'react'
import services_1 from "./image/services_1.jpg"

function ServicesPages() {
  return (
    <div>
           <img src={services_1} alt="rasm" />
           <h1 className='title'>ServicesPages</h1>
           <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ea expedita possimus voluptas veritatis mollitia modi, vel dolore tempore eum quam exercitationem velit sapiente dignissimos odit voluptates quaerat ab voluptatum?</p>
       </div>
  )
}

export default ServicesPages