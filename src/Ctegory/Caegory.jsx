import React from 'react'
import "./Movies.css"
const Caegory = ({Cat}) => {
  return (
 
<div className="row">
  {Cat.map((item)=>{
    const {backgroundImg,cardImg,description,id,subTitle,title,titleImg,type}=item;
  return (
  <img className="row_poster" src={cardImg} alt="ddd"/>)})}
  </div>
  )
}

export default Caegory