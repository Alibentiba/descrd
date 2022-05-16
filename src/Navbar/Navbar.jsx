import React, { useState } from 'react'
import './Navbar.css'
import { FaHome,FaSearch,FaPlus,FaRegStar} from "react-icons/fa";
import {RiMovie2Fill } from "react-icons/ri";
import {BsDisplay } from "react-icons/bs";
import {auth,provider} from'../firebaseConfig'
import { signInWithPopup } from 'firebase/auth';
import 'firebase/database';
import Logo from './Logo.png'
import avatar from './avatar.jpg'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {adduser} from '../Slice'

const Navbar = () => {
 

const [userinfo,setuser]=useState([])
  const dispatch =useDispatch()


  const handleAuth = () => {
      signInWithPopup(auth,provider)
        .then((result) => {console.log(result.user)
          setuser(result.user)
          dispatch(adduser(result.user))
           
        })
        .catch((error) => {
          alert(error.message);})};


          const usr= useSelector(state=>state.userstore.user)
  return (
<div className='Navbar'>


  <div className='Navbar-logo'>
      <img src={Logo} alt="Logo"  className='Navbar-logo-img'/>
  </div>

  <div className='Navbar-Navigation'>
   <a> <FaHome/>HOME</a>
   <Link to={`/Login/`}><a><FaSearch/> <span>SEARCH</span> </a></Link>
   <a href="">< FaPlus/> <span>WATCHLIST</span> </a>
   <a href=""><FaRegStar/> <span>ORIGINALS</span> </a>
   <a href=""><RiMovie2Fill/><span>MOVIES</span> </a>
   <a href=""><BsDisplay/>SERIES</a>

  </div>

  <div className='Navbr-userimage'>
  <img src={usr.photoUR} alt="Logo"  className='Navbar-logo-img'onClick={handleAuth}/>

  </div>


  </div>
  )
}

export default Navbar