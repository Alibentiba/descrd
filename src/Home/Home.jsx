import React  from 'react'
import './Home.css'
import Sliderhome from '../Slider/Slider'
import Vieweres from '../Viewres/Vieweres'
import Movies from '../Movies/Movies'
import { Detail } from '../Detail/Detail'
import Navbar from '../Navbar/Navbar'
import Login from "../Loging/Login"
const Home = ()=>{


  

  return (
    <div className='Home'>
  <Navbar/>
  {/* <Sliderhome/> */}
  {/* <Vieweres/> */}
  <Movies/>
  {/* <Login/> */}
  </div>
  )
}

export default Home




