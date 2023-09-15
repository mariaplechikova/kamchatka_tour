// большой экран.component.jsx
import "./slider.css";
import './slider-tablet.css';
import React, { useState } from 'react';
 
export default function Tablet(props) {
    const arr = props.arrSlider
    let [sliderTabletLeft, setsliderTabletLeft] = useState(0)
    const [ isEndLeft, setisEndLeft ] = useState(true)
    const [ isEndRight, setisEndRight ] = useState(true)

    const buttonAlign = {textAlign: props.alignDesktopSlider}

    function sliderRight() {
        console.log(buttonAlign.textAlign)
        if (buttonAlign.textAlign === 'left') {
            if (sliderTabletLeft === -1290) {
                // setsliderTabletLeft(0)
            } else {
                setsliderTabletLeft(sliderTabletLeft - 430)
            }
        } else {
            if (sliderTabletLeft === 1290) {
                // setsliderTabletLeft(0)
            } else {
                setsliderTabletLeft(sliderTabletLeft + 430)
            }
        }
        
        return sliderTabletLeft
    }

    function sliderLeft() {
        if (buttonAlign.textAlign === 'left') {
            if (sliderTabletLeft === 0) {
                // setsliderTabletLeft(-1290)
            } else {
                setsliderTabletLeft(sliderTabletLeft + 430)
            }
        } else {
            if (sliderTabletLeft === 0) {
            // setsliderTabletLeft(1290)
            } else {
                setsliderTabletLeft(sliderTabletLeft - 430)
            }}
       
        return sliderTabletLeft
    }

    return ( 
        < div className = "slider-tablet" > 

            <div className="viewport-tablet">
           
                <div className="sliderBox-tablet">
                
                    {arr.map((index) => {
                        return (
                            <div className='sliderImage-tablet' style={{left: `${sliderTabletLeft}` + 'px'}}>
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
            

        {<div className="sliderButton-tablet" style={buttonAlign}>
            <img src={props.arrowSlider} className={`slider__arrow + ${isEndLeft ? "show" : "hide"}`} onClick={sliderLeft} alt="камчатка"/>
            <img src={props.arrowSlider} className={`slider__arrow slider__arrow--right + ${isEndRight ? "show" : "hide"}`} onClick={sliderRight} alt="камчатка"/>
        </div>} 
    </div>      
        
    )
}


{/* <p className={`form__error-text + ${isErrorName ? "show" : "hide"}`}></p> */}