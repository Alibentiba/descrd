import React, { useEffect, useState } from 'react'
import "./Sidbar.css"
import { FaAngleDown,FaPlus,FaSignal,FaInfoCircle,FaPhoneAlt,FaUserAlt,FaMicrophone,FaHeadphones,FaRegSun} from "react-icons/fa";
import Sidbrchannel from '../Sidbarchannel/Sidbrchannel';
import { useDispatch, useSelector } from 'react-redux';
import db, { auth } from "../firebaseConfig"
import {logout }from "../Slice"
import { getDatabase, ref, set } from "firebase/database";
import { doc, setDoc } from "firebase/firestore"; 

const Sidbar = () => {
  const user = useSelector(state => state.userstore.user)
const dispatch =useDispatch()
// const [channel,setchannl]=useState([])

// function addchannel() {
//   const chan=prompt ("enter channel name")
//   if(chan){  
    
//       name: name,
     
//     );
//   }


// }





  const add=async()=>{
    const name=prompt ("enter channel name")
    console.log(name);
   await setDoc(doc(db, "ch", "LAf"), {
  name:name});}

  return (
    <div className='Sidbar'>
        <div className='Sidbar_top'>
            <h3>Welcom</h3>
            <FaAngleDown/>
        </div>
        {/* <button onClick={add}>add</button> */}

        <div className='Sidbar_channels'>

            <div className='Sidbar_channelheader'>
                <div className='Sidbar_header'><h4><FaAngleDown/>Text Channels</h4></div>
              <FaPlus onClick={add} className="Sidbar_addchannel"/>
            </div>

            <div className='Sidbar_channelslist'>
                <Sidbrchannel/>
               
             </div> 

        </div>
     
   <div className='Sidbar_voice'>
   <FaSignal className='Sidbar_voicicon' fontSize="larg"/>
          <div className='voice_text'>
            <h3>voice concted</h3>
            <p>Stream</p>
            </div>
          <div className='Sidbar_info'>
          <FaInfoCircle className='info_icon'/>
          <FaPhoneAlt className='info_icon'/>
          </div>
   </div>
   <div className='Sidbar_profile'>

     <img src={user.photo} alt="img" className='avatar_icon' onClick={() =>dispatch(logout(user))}/>
     <div className='Sidbar_profile_text'>
        <h3>{user.displayName}</h3>
        <p>{user.uid.substring(0,9)}</p>
     </div>

     <div className='Sidbar_profile_icons'>
     <FaMicrophone className='profile_icon' />
     <FaHeadphones className='profile_icon'/>
     <FaRegSun className='profile_icon' />
     </div>

   </div>
   

  



    </div>
  )}

export default Sidbar