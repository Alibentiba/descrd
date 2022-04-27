import React from 'react'
import '../Login/Login.css'
// import {Link} from 'react-router-dom'
// import { getAuth, createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";
import logo1 from "./logo1.png"
//  import {auth} from "../firebase-config"


const Login = () => {





  return (
    <div className='Login'>
<div className='Login-comp'>
        <p className='login-walcom'>Walcom to your Websit .</p>
        <img  src={logo1} alt='logo' className='login-logo'/>
       <input className='componnet' type="text" placeholder='Email' /> 
       <input className='componnet' type="Password" placeholder='Password' />  
       {/* <button className='componnet' onClick={creeuser}>cre acount</button> */}
       <button className='componnet' >Log in</button>

       </div>
    
    </div>
  )
}

export default Login