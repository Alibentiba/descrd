import React from 'react'
import "./Movies.css"
import Caegory from '../Ctegory/Caegory'
import {useSelector} from 'react-redux'
// import Caegory from '../Ctegory/Caegory' 
const Movies = () => {
  const recommende= useSelector(state=>state.userstore.recommend)
  const trending= useSelector(state=>state.userstore.trending)
  const original= useSelector(state=>state.userstore.original)
  const news= useSelector(state=>state.userstore.news)
  

  return (
   <div className='Movies'>
  <Caegory Cat={recommende}/>
  <Caegory Cat={original}/>
  <Caegory Cat={trending}/>
  <Caegory Cat={original}/>
  <Caegory Cat={news}/>
    </div>)}

export default Movies



