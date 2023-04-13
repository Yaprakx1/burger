import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/banner.jpg'

export default function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="headerConteiner">
        <h1>Burger 38</h1>
        <p>Delicious Hamburgers <br /> with 33 Spicy Mixed</p>
        <Link to="/menü"><button>Order Now</button></Link>
      </div>
        

      
    </div>
  )
}
