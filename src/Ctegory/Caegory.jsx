import React from 'react'
import "./Movies.css"
const Caegory = ({Cat}) => {
  return (
 
<div className="row">
  {Cat.map((item)=>{
    const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
  return (<div className="row_posters" key={id}>
  <img className="row_poster" src={cardImg} alt="ddd"/></div>)})}
  </div>
  )
}

export default Caegory