import "./slider.css";
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive'
import {
  listImg1, listImg2, listImg3, listImg4, listImg5, listImg6, listImg7, listImgComand
} from '../../data/list'

import  Mobil  from "./slider-mobil";
import Laptop from "./slider-laptop";
import Tablet from "./slider-tablet";

function Slider(props) {


  const isMobil = useMediaQuery ({ 
    query : "(max-width: 600px)" , });

  const isBigScreen = useMediaQuery ({ 
    query : "(min-width: 601px)" , });

  const isLaptop = useMediaQuery ({ 
    query : "(max-width: 900px)"   , });
    
  const isTablet = useMediaQuery ({ 
    query : "(min-width: 901px)" , });

  let arr = props.arr
  let size = props.size
  let alignMobil = props.alignMobil
  let arrow = props.arrow
  let alignDesktop = props.alignDesktop
  // let buttonAlign
  // let widthImage = '200px' 
  // let heightImage
  // let imgStyle 

  // sliderRender();
 

  // function sliderRender() {
    
  //   if (document.documentElement.clientWidth < 800) {
  //     buttonAlign = {textAlign: props.alignMobil}
  //     widthImage = `calc(${props.size} - 80px)`
  //   } else {
  //     widthImage = props.size
  //     buttonAlign = {textAlign: props.alignDesktop}
  //   }
  
  //   if (document.documentElement.clientWidth < 600) {
  //     widthImage = `calc(100vw - 32px)`
  //   }

  //   heightImage = widthImage
  //   imgStyle = {width: widthImage, height: widthImage}
  //   console.log(widthImage)
  //   console.log(imgStyle)
  // }
  
       
  // function sliderRight() {
  //   const deleteArr = arr.shift()
  //   const newArr = arr.concat(deleteArr)
  //   setImage(newArr)
  // }

  // function sliderLeft() {
  //   const endArr = []
  //   endArr[0] = arr.pop()
  //   const newArr = endArr.concat(arr)
  //   setImage(newArr)
  // }

  if (isMobil) {
    return (
      <div className="slider">
        <Mobil arrSlider={arr} sizeSlider={size}  alignMobilSlider={alignMobil}  arrowSlider={arrow}/>
      </div>
    )
  } else {
    if (isLaptop) {
      return (<div className="slider"><Laptop sizeSlider={size} alignMobilSlider={alignMobil} alignDesktopSlider={alignDesktop} arrSlider={arr} arrowSlider={arrow}/></div>)
    } else { return (<div className="slider"><Tablet sizeSlider={size} alignMobilSlider={alignMobil} alignDesktopSlider={alignDesktop} arrSlider={arr} arrowSlider={arrow}/></div>)}
  }

  // return (
  //   <div className="slider">

      

      {/* <div className="sliderBox">
          
        {arr.map((index) => {
          return (
            <div className='sliderImage' style={{
              width: `${widthImage}` + 'px',
              height: `${widthImage}` + 'px',
            }}>
              <img src={index.url} alt="камчатка" />
              <div className="sliderImage__description">
                <p>{index.title}</p>
                {index.description}
              </div>
            </div>
          )
        })} 
      </div>  */}

      {/* <div className="sliderButton" style={buttonAlign}>
        <img src={props.arrow} className="slider__arrow" onClick={sliderLeft} alt="камчатка"/>
        <img src={props.arrow} className="slider__arrow slider__arrow--right" onClick={sliderRight} alt="камчатка"/>
      </div> */}

    // </div>
    
  // );
}

export default Slider;
