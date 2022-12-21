import "./slider.css";
import React, { useState } from 'react';

function Slider(props) {
    const [arr, setImage] = useState(props.arr)
    let buttonAlign
    let imgStyle
    let widthImage
    let heightImage


    if (document.documentElement.clientWidth < 800) {
      buttonAlign = {textAlign: props.alignMobil}
      widthImage = `calc(${props.size} - 80px)`
    } else {
      widthImage = props.size
      buttonAlign = {textAlign: props.alignDesktop}
    }

    if (document.documentElement.clientWidth < 600) {
      widthImage = `calc(100vw - 32px)`
    }

    heightImage = widthImage
    imgStyle = {width: widthImage, height: heightImage}
       
    function sliderRight() {
      const deleteArr = arr.shift()
      const newArr = arr.concat(deleteArr)
      setImage(newArr)

    }

    function sliderLeft() {
      const endArr = []
      endArr[0] = arr.pop()
      const newArr = endArr.concat(arr)
      setImage(newArr)
    }

  return (
    <div className="slider">

      <div className="sliderBox">
          
        {arr.map((index) => {
          return (
            <div className='sliderImage' style={imgStyle}>
              <img src={index.url} />
              <div className="sliderImage__description">
                <p>{index.title}</p>
                {index.description}
              </div>
            </div>
          )
        })} 
      </div> 

      <div className="sliderButton" style={buttonAlign}>
        <img src={props.arrow} className="slider__arrow" onClick={sliderLeft}/>
        <img src={props.arrow} className="slider__arrow slider__arrow--right" onClick={sliderRight}/>
      </div>

    </div>
    
  );
}

export default Slider;
