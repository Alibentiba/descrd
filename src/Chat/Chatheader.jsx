import React from 'react'
import './Chatheader.css'
import { FaBell,FaMapMarker,FaUserFriends,FaSearch,FaLocationArrow,FaQuestionCircle } from "react-icons/fa";

const Chatheader = () => {
  return (
    <div className='chatheader'>

     <div className='chatheader_left'>
<h4>#youtb</h4>
    </div>

    <div className='chatheader_right'>
    <FaBell/>
    <FaMapMarker/>
    <FaUserFriends/>
    <div className='Chat_search'>
    <input type="text" placeholder='serch'>
    <FaSearch className='search_icon'/></input>
    <FaLocationArrow/>
    </div>
    <FaQuestionCircle/>
    </div>








    </div>
  )
}

export default Chatheader