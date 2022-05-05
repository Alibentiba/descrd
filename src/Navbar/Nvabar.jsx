import React from 'react'
import './Navbar.css'
import { FaHome,FaSearch,FaPlus,FaRegStar} from "react-icons/fa";
import {RiMovie2Fill } from "react-icons/ri";

import Logo from './Logo.jpg'
import avatar from './avatar.jpg'
const Nvabar = () => {
  return (
<div className='Navbar'>


  <div className='Navbar-logo'>
      <img src={Logo} alt="Logo"  className='Navbar-logo-img'/>
  </div>

  <div className='Navbar-Navigation'>
   <a className='cool-link' href=""> <FaHome/>Home</a>
   <a href=""><FaSearch/>SEARCH</a>
   <a href="">< FaPlus/>WATCHLIST</a>
   <a href=""><FaRegStar/>ORIGINALS</a>
   <a href=""><RiMovie2Fill/>MOVIES</a>
   <a href="">SERIES</a>

  </div>

  <div className='Navbr-userimage'>
  <img src={avatar} alt="Logo"  className='Navbar-logo-img'/>

  </div>


  </div>
  )
}

export default Nvabar