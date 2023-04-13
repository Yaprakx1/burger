import React from 'react'
import Logo from '../assets/hamburgerlogo.png';
import {Link} from 'react-router-dom';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
          <img src={Logo} alt="Hamburger Logo"/>
        </div>
        <div className='rightSide'>
        <Link to="/">Home</Link>
          <Link to="/monu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      
    </div>
  )
}

export default Navbar
