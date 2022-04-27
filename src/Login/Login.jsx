import React from 'react'
import '../Login/Login.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import logo1 from "./logo1.png"
import { auth,provider } from "../firebaseConfig"
// import { Provider } from 'react-redux';
// require('firebase/auth')
const Login = () => {


  const handleAuth = () => {
  
      signInWithPopup(auth, provider)
      
        .catch((error) => {
          alert(error.message);
        });}
    

  return (
    <div className='Login'>
     <div className='Login-comp'>
        <p className='login-walcom'>Walcom to your Websit .</p>
        <img  src={logo1} alt='logo' className='login-logo'/>
       <button className='componnet' onClick={handleAuth} >Log in</button>

       </div>
    
    </div>
  )
}

export default Login