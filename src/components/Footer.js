import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from 'react-icons/bs';

import { BsFacebook } from 'react-icons/bs';




export default function Footer() {
  return (
    <div className='footer'>
       <div className="socialMedia">
        <p> &copy; 2023 burger38.com</p>
        <div className="media">
        <BsInstagram />
        <BsTwitter />
        <BsFacebook/>
        </div>
       
        </div> 
      
    </div>
  )
}
