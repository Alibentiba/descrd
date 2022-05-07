import React from 'react'
import "./Detail.css"
import { FaPlay,FaPlusCircle } from "react-icons/fa";
import {RiGroup2Fill } from "react-icons/ri";

import test from "./test.png"
export const Detail = () => {
  return (
    <div className='Detail'>
{/* <div className='image-top'>
<img src={test} alt="" />

</div> */}
<div className='Detail-buttons'>
   
    <button className='button1'><FaPlay/><span>PLAY</span> </button>
    <button className='button1'><FaPlay/><span>TRAILER</span> </button>

    <button className='button2'>+</button>
     <button className='button2'><RiGroup2Fill /></button>
   

</div>


    </div>
  )
}
