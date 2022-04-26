import React from 'react'
import './Chatheader.css'
import { FaBell,FaMapMarker,FaUserFriends,FaSearch,FaLocationArrow,FaQuestionCircle } from "react-icons/fa";
import { MdSend } from "react-icons/md";
import { BiSearchAlt2} from "react-icons/bi";
const Chatheader = () => {
  return (
    <div className='chatheader'>

     <div className='chatheader_left'>
<h4>#youtub</h4>
    </div>
    <div className='chatheader_right'>
    <FaBell className='chatheader_right_icon'/>
    <FaMapMarker className='chatheader_right_icon sendicon'/>
    <FaUserFriends className='chatheader_right_icon'/>
    <div className='Chat_search'>
    <input type="text" placeholder='search'/>
    <BiSearchAlt2  className='chatheader_right_icon'/>
    </div>
    <MdSend className='chatheader_right_icon'/>
  
    <FaQuestionCircle className='chatheader_right_icon'/>
    </div>








    </div>
  )
}

export default Chatheader