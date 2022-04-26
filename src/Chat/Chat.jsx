import React from 'react'
import Chatheader from './Chatheader'
import './Chat.css'
import { IoMdAddCircle } from 'react-icons/io';
import { AiOutlineGif } from 'react-icons/ai';
import { MdEmojiEmotions } from 'react-icons/md';
import { FaGift } from 'react-icons/fa';
import { Messege } from '../Messeg/Messege';



const Chat = () => {
  return (
    <div className='Chat'>
    <Chatheader/>

    <div className='Chat_msg'>
      <Messege/>
    </div>

      <div className='Chat_input'>
        <IoMdAddCircle className='Chat_icons'/>
        <form action="">
        <input type="text" placeholder={`Messege #Test`} />
        <button className='Chat-buton' type='submit'  >Send Messge</button>
        </form>
        
        <div className='input_icons'>
       <FaGift className='Chat_icons'/>
       <AiOutlineGif className='Chat_icons'/>
       <MdEmojiEmotions className='Chat_icons'/>
     </div>
     </div>




    </div>
  )
}

export default Chat