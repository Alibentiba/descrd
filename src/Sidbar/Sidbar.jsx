import React from 'react'
import "./Sidbar.css"
import { FaAngleDown,FaPlus,FaSignal} from "react-icons/fa";
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

   </div>



    </div>
  )}

export default Sidbar