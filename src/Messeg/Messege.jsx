import React from 'react'
import './Messege.css'
import { FaRegUserCircle } from "react-icons/fa";

export const Messege = () => {
  return (
    <div className='Messge'>
     <FaRegUserCircle className='avatar'/>

<div className='massege_info'>
<h4>
<span className='messeg_sender'>Ali :</span>
<p>The  it' can be the best on messge</p>
</h4>
</div>

<span className='time_send'> time_send </span>



       
    </div>
  )
}
