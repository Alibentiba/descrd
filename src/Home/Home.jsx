import React  from 'react'
import './Home.css'
import Sliderhome from '../Slider/Slider'
import Vieweres from '../Viewres/Vieweres'
import Movies from '../Movies/Movies'


const Home = ()=>{


  

  return (
    <div className='Home'>
  <Sliderhome/>
  <Vieweres/>
  <Movies/>
  </div>
  )
}

export default Home