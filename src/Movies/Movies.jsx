import React from 'react'
import "./Movies.css"
import sliderbadag from "../images/slider-badging.jpg"

const Movies = () => {
  return (
<div className="row">
      <h2>title</h2>
      <div className="row_posters">
            <img className="row_poster" src={sliderbadag} alt="ddd"/>
            <img className="row_poster" src={sliderbadag} alt="ddd"/>

            <img className="row_poster" src={sliderbadag} alt="ddd"/>

            <img className="row_poster" src={sliderbadag} alt="ddd"/>

            <img className="row_poster" src={sliderbadag} alt="ddd"/>

            <img className="row_poster" src={sliderbadag} alt="ddd"/>

      </div>
      </div>
  )
}

export default Movies