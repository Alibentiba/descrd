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
 
  const[active,setactive]=useState('nav-menu')
  const[activetoglle,setactivetoglle]=useState('nav__toggler')
  const toggle=()=>{
active==='nav-menu' ? setactive('nav-menu nav-active'):setactive('nav-menu');
activetoglle==='nav__toggler' ? setactivetoglle('nav__toggler toglle'):setactivetoglle('nav__toggler');
  }
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
<nav className='navbar'>


  {/* <div className='Navbar-logo'>
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

  </div> */}




    <a href="" className='brand'>brand</a>
        <ul className={active}>
       <li className='nav-i'><a href="" className='nav-link'>Home</a></li> 
       <li className='nav-i'><a href="" className='nav-link'>Produt</a></li> 
       <li className='nav-i'><a href="" className='nav-link'>Navigation</a></li> 
       <li className='nav-i'><a href="" className='nav-link'>deconcter</a></li> 
        </ul>
      <div className={activetoglle} onClick={toggle}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
   </nav>

 






  )
}

export default Navbar