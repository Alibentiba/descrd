import React from 'react'
import "./Mov.css"
import Caegory from '../Ctegory/Caegory'
import {useSelector} from 'react-redux'
// import Caegory from '../Ctegory/Caegory' 
const Movies = () => {
  const mov= useSelector(state=>state.userstore.movies)
  const recommende= useSelector(state=>state.userstore.recommend).concat(mov);
  const trending= useSelector(state=>state.userstore.trending).concat(mov);
  const original= useSelector(state=>state.userstore.original).concat(mov);
  const news= useSelector(state=>state.userstore.news).concat(mov);
  

 

  return (
   <div className='Movies'>
     <h1>recommende:</h1>
    <Caegory Cat={recommende}/>
  <h1>recommende:</h1>

  <Caegory Cat={original}/>
  <h1>recommende:</h1>

  <Caegory Cat={trending}/>
  <h1>recommende:</h1>

  <Caegory Cat={original}/>
  <h1>recommende:</h1>

  <Caegory Cat={news}/>
    </div>)}

export default Movies



