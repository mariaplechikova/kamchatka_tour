import "./slider-comand.css";
import React, { useState } from 'react';

export default function SliderComand() {
    const [listComand, setlistComand] = useState(
      [
        {url:'Alina.jpg',
        name: "Алина Гончарова,  ",
        address: "@alin_och"},

        {url:'Evgenij.jpg',
        name: "Евгений Барсуков,  ",
        address: "@eugen_eugen"},

        {url:'Dmitrij.jpg',
        name: 'Дмитрий Осипов,  ',
        address: "@dim_os"}
      ]
    )

    function sliderComandRight() {
      const deleteArr = listComand.shift()
      const newArr = listComand.concat(deleteArr)
      setlistComand(newArr)

    }

    function sliderComandLeft() {
      const endArr = []
      endArr[0] = listComand.pop()
      const newArr = endArr.concat(listComand)
      setlistComand(newArr)
    }

   return (
    <div className="slider-comand" >
          
        <div className="slider__comand__block" >
        {listComand.map((index) => {
            return (
                <div className="comand-block__image" >
                    <img src={index.url}/>
                    <p>{index.name}<span>{index.address}</span></p>
                </div>
            )
        })}
        </div>
        
      <div className="comand-button">
        <img src='arrow-horizontally-black.png' className="comand__arrow" onClick={sliderComandLeft}/>
        <img src='arrow-horizontally-black.png' className="comand__arrow comand__arrow--right" onClick={sliderComandRight}/>
      </div> 
      
    </div>
    
  );
};