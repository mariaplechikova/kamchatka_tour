// планшет экран.component.jsx

import "./slider.css";
import './slider-laptop.css' 
import React, { useState } from 'react';

export default function Laptop(props) { 
    const arr = props.arrSlider
    let [sliderLaptopLeft, setsliderLaptopLeft] = useState(0)

    function sliderRight() {
        if (sliderLaptopLeft === -700) {
            // setsliderLaptopLeft(0)
        } else {
            setsliderLaptopLeft(sliderLaptopLeft - 350)
        }
        return sliderLaptopLeft
    }
    
    function sliderLeft() {
        if (sliderLaptopLeft === 0) {
            // setsliderLaptopLeft(-700)
        } else {
            setsliderLaptopLeft(sliderLaptopLeft + 350)
        }
        return sliderLaptopLeft
    }

    return ( 
        < div className = "slider-laptop" > 

            <div className="viewport-laptop">
                <div className="sliderBox-laptop">
                    
                    {arr.map((index) => {
                        return (
                            <div className='sliderImage-laptop' style={{left: `${sliderLaptopLeft}` + 'px' }}>
                                <img src={index.url} alt="камчатка" />
                                <div className="sliderImage__description">
                                    <p>{index.title}</p>
                                    {index.description}
                                </div>
                            </div>
                        )
                    })} 
                </div>
            </div>
              
  
            {<div className="sliderButton-laptop">
                <img src={props.arrowSlider} className="slider__arrow" onClick={sliderLeft} alt="камчатка"/>
                <img src={props.arrowSlider} className="slider__arrow slider__arrow--right" onClick={sliderRight} alt="камчатка"/>
            </div>}

        </div>      
        
    )
}