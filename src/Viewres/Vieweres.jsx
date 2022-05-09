import React from 'react'
import viewersmarvel from '../images/viewers-marvel.png'
import viewersnational from '../images/viewers-national.png'
import viewersdisney from '../images/viewers-disney.png'
import viewersstarwars from "../images/viewers-starwars.png"
import viewerspixar from "../images/viewers-pixar.png"
import "./Viewers.css"
// import {useSelector } from 'react-redux'

const Vieweres = () => {

  return (
    <div className='Viewers'>
        <div className='Viewers-image'>
        <img src={viewersmarvel} alt="" />
        </div>

        <div className='Viewers-image'>
        <img src={viewersnational} alt="" />    
            </div>

        <div className='Viewers-image'>
        <img src={viewersdisney} alt="" />   
             </div>

        <div className='Viewers-image'>
        <img src={viewersstarwars} alt="" />    
            </div>
            <div className='Viewers-image'>
        <img src={viewerspixar} alt="" />    
            </div>



    </div>
  )
}

export default Vieweres