import React from 'react'
import "./Sidbar.css"
import { FaAngleDown,FaPlus,FaSignal,FaInfoCircle,FaPhoneAlt,FaUserAlt,FaMicrophone,FaHeadphones,FaRegSun} from "react-icons/fa";
import Sidbrchannel from '../Sidbarchannel/Sidbrchannel';
// import './Sidbrchannel.'

const Sidbar = () => {
  return (
    <div className='Sidbar'>
        <div className='Sidbar_top'>
            <h3>Welcom</h3>
            <FaAngleDown/>
        </div>


        <div className='Sidbar_channels'>

            <div className='Sidbar_channelheader'>
                <div className='Sidbar_header'><h4><FaAngleDown/>Text Channels</h4></div>
              <FaPlus className="Sidbar_addchannel"/>
            </div>

            <div className='Sidbar_channelslist'>
                <Sidbrchannel/>
                <Sidbrchannel/>
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

     <FaUserAlt className='avatar_icon'/>
     <div className='Sidbar_profile_text'>
        <h3>Test One</h3>
        <p>Popup</p>
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