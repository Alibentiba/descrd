import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import sliderbadag from "../images/slider-badag.jpg" 
import sliderbadging from "../images/slider-badging.jpg" 


const Sliderhome = () => {

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true

      };


      return (
        <div className='Slider-1'>
          <Slider {...settings} className='Slider'>
            <div className='slider-imag'>
             <img src={sliderbadag} alt="" />
            </div>
            <div className='slider-imag'>
              <img src={sliderbadging} alt="" />
            </div>
            
          </Slider>
  </div>
      );
}

export default Sliderhome