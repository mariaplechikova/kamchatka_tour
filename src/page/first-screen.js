import "./first-screen.css";
import "./page";
import Slider from './slider'
import React, { useState } from 'react';

function FirstScreen() {
  return (
    <div className="first-screen">

      {/* <img src='first-screen.jpg'className="first-screen-background"/> */}

      <div className="first-screen-container">
        <div className="first-screen-text">
          <h1>Мечты о далекой Камчатке - близко</h1>
          <div className="date"><p>23.06-04.07 DREAM TOUR</p></div>
          <div className="description">Тур перевернет ваш мир с ног на голову и оставит впечатления на всю жизнь.</div>
          
          <div className="first-screen__link Links">
            <a href="" className="Links">Расписание тура</a>
            <img src="./icons8-стрелка-вправо-вниз-в-круге-2-100.png" className="Links" />
            {/* <div className="first-screen__arrow Links"><p>&larr;</p></div> */}
          </div>

          <div className="social-network desctop">
            <a href=""><img src='VK.png'/></a>
            <a href=""><img src='odnoklassniki.png'/></a>
            <a href=""><img src='youtube.png'/></a>
            <a href=""><img src='telegram.png'/></a>
            <a href=""><img src='whatsapp.png'/></a>
            <a href=""><img src='dzen.png'/></a>
          </div>

        </div>
        

        <div className="slider-container">
          {/* <Slider size="320px" color="white" align="left" arr={listImg}/> */}
        </div>
        
        <div className="social-network mobile">
        <a href=""><img src='VK.png'/></a>
            <a href=""><img src='odnoklassniki.png'/></a>
            <a href=""><img src='youtube.png'/></a>
            <a href=""><img src='telegram.png'/></a>
            <a href=""><img src='whatsapp.png'/></a>
            <a href=""><img src='dzen.png'/></a>
        </div>

      </div>
          
    </div>
  );
}

export default FirstScreen;