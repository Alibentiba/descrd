import React from 'react'
import './Navbar.css'
import { FaHome,FaSearch,FaPlus,FaRegStar} from "react-icons/fa";
import {RiMovie2Fill } from "react-icons/ri";
import {BsDisplay } from "react-icons/bs";


import Logo from './Logo.png'
import avatar from './avatar.jpg'
const Nvabar = () => {
  return (
<div className='Navbar'>


  <div className='Navbar-logo'>
      <img src={Logo} alt="Logo"  className='Navbar-logo-img'/>
  </div>

  <div className='Navbar-Navigation'>
   <a> <FaHome/>HOME</a>
   <a href=""><FaSearch/> <span>SEARCH</span> </a>
   <a href="">< FaPlus/> <span>WATCHLIST</span> </a>
   <a href=""><FaRegStar/> <span>ORIGINALS</span> </a>
   <a href=""><RiMovie2Fill/><span>MOVIES</span> </a>
   <a href=""><BsDisplay/>SERIES</a>

  </div>

  <div className='Navbr-userimage'>
  <img src={avatar} alt="Logo"  className='Navbar-logo-img'/>

  </div>


  </div>
  )
}

export default Nvabar