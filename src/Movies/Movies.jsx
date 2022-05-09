import React from 'react'
import "./Movies.css"
import {useSelector} from 'react-redux'
const Movies = () => {
  const recommende= useSelector(state=>state.userstore.recommend)
  const trending= useSelector(state=>state.userstore.trending)
  const original= useSelector(state=>state.userstore.original)
  const news= useSelector(state=>state.userstore.news)

  return (
    <div className='Movies'>
     <h2>recommende</h2>
    <div className="row">
     
    {recommende.map((item)=>{
    const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
  return (<div className="row_posters" key={id}>
  <img className="row_poster" src={cardImg} alt="ddd"/></div>)})} 
  </div>

  <div className="row">
  {trending.map((item)=>{
    const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
  return (<div className="row_posters" key={id}>
  <img className="row_poster" src={cardImg} alt="ddd"/></div>)})}
  </div>

  <div className="row">
  {original.map((item)=>{
    const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
  return (<div className="row_posters" key={id}>
  <img className="row_poster" src={cardImg} alt="ddd"/></div>)})}
  </div>

  <div className="row">
    <h2></h2>
  {news.map((item)=>{
    const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
  return (<div className="row_posters" key={id}>
  <img className="row_poster" src={cardImg} alt="ddd"/></div>)})}
  </div>




</div>
  )}

export default Movies



