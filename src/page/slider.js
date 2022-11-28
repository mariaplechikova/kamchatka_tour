import "./slider.css";
import React, { useState } from 'react';
import {  CSSTransition } from "react-transition-group";

function Slider(props) {
  // const listImg = [
  //     {url:'slider1.jpg',
  //     title: "Бурые медведи",
  //     description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"},
  
  //     {url:'slider2.jpg',
  //     title: "Бурые медведи",
  //     description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"},
  
  //     {url: 'slider3.jpg',
  //     title: "Бурые медведи",
  //     description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"},
  
  //     {url: 'slider4.jpg',
  //     title: "Бурые медведи",
  //     description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  //   ]

    const [arr, setImage] = useState(props.arr)
    const buttonColor = {color: props.color, border: `2px solid ${props.color}`}
    let buttonAlign
    let imgStyle

    if (document.documentElement.clientWidth < 800) {
      buttonAlign = {textAlign: props.alignMobil}
      imgStyle = {width: `calc(${props.size} - 32px)`, height: `calc(${props.size} - 32px)`}
    } else {
      imgStyle = {width: props.size, height: props.size}
      buttonAlign = {textAlign: props.alignDesktop}
      
    }
       
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

        <CSSTransition classNames='render' timeout={300}>
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
        </CSSTransition>

      <div className="sliderButton" style={buttonAlign}>
        <button onClick={sliderLeft} style={buttonColor}>&larr;</button>
        <button onClick={sliderRight} style={buttonColor}>&rarr;</button>
      </div>

    </div>
    
  );
}

export default Slider;
