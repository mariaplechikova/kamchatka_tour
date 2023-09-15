// мобильный экран.component.jsx
import "./slider-mobil.css";
import "./slider.css";
import React, { useState } from 'react';

export default function Mobil(props) { 
    const arr = props.arrSlider
    let [sliderMobilLeft, setsliderMobilLeft] = useState(0)


    function sliderRight() {
        if (sliderMobilLeft === -900) {
            setsliderMobilLeft(0)
        } else {
            setsliderMobilLeft(sliderMobilLeft - 300)
        }
        return sliderMobilLeft
    }

    function sliderLeft() {
        if (sliderMobilLeft === 0) {
            setsliderMobilLeft(-900)
        } else {
            setsliderMobilLeft(sliderMobilLeft + 300)
        }
        return sliderMobilLeft
    }

    
    return ( 
        < div className = "slider-mobil" > 

            <div className="viewport-mobile">
                <div className = "sliderBox-mobile">
                    {arr.map((index) => {
                    return (
                        <div className='sliderImage-mobile' style={{left: `${sliderMobilLeft}` + 'px'}}>
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
             

            <div className="sliderButton-mobile">
                <img src={props.arrowSlider} className="slider__arrow" onClick={sliderLeft} alt="камчатка"/>
                <img src={props.arrowSlider} className="slider__arrow slider__arrow--right" onClick={sliderRight} alt="камчатка"/>
            </div>

        </div> 
    )     
        
};
