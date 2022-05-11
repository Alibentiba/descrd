import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../images/slider-badag.jpg"
import "./Slider.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Sliderhome = () => {

    return (
      <Carousel autoPlay='true'>
          <div>
              <img src={slider1} />
          
          </div>
          <div>
              <img src={slider1}  />
              
          </div>
          <div>
              <img src={slider1}  />
             
          </div>
      </Carousel>
  );
  };
  
export default Sliderhome