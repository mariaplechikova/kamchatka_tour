import "./slider.css";
import React, { useState } from 'react';

function Slider() {
    const [arr, setImage] = useState(['slider1.jpg', 'slider2.jpg', 'slider3.jpg', 'slider4.jpg'])

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
            <div className='sliderImage'><img src={index} /></div>
          )
        })}
    
      </div>

      <div className="sliderButton">
        <button onClick={sliderLeft}>&larr;</button>
        <button onClick={sliderRight}>&rarr;</button>
      </div>

    </div>
    
  );
}

export default Slider;
