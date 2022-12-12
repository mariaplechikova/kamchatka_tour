import "./first-screen.css";
import "./page";
import Slider from '../elements/slider'
import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

function FirstScreen() {
  const listImg1 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]
  return (
    <div className="first-screen">

      <div className="first-screen__container">
        <div className="first-screen__text">
          <h1 className="first-screen__title">Мечты о далекой Камчатке - близко</h1>
          <div className="first-screen__date"><p>23.06-04.07 DREAM TOUR</p></div>
          <div className="first-screen__description">Тур перевернет ваш мир с ног на голову и оставит впечатления на всю жизнь.</div>
          
          <Link 
          className="first-screen__link Links"
          to="section1"
          spy={true}
          offset={-110}
          duration={500}>
            <a href="#section2" className="Links">Расписание тура</a>
            <img src="./white-arrow.png" className="white-arrow Links" />
            <img src="./orange-arrow.png" className="orange-arrow Links" />
          </Link>

          <div className="first-screen__social-desktop">
            <a href="https://vk.com/mariya_plechikova"><img src='VK.png'/></a>
            {/* <a href=""><img src='odnoklassniki.png'/></a> */}
            {/* <a href=""><img src='youtube.png'/></a> */}
            {/* <a href=""><img src='telegram.png'/></a> */}
            {/* <a href=""><img src='whatsapp.png'/></a> */}
            {/* <a href=""><img src='dzen.png'/></a> */}
          </div>

        </div>
        

        <div className="slider-container">
          <Slider size="390px" color="white" align="left" arr={listImg1} arrow='arrow-horizontally.png'/>
        </div>
        
        <div className="first-screen__social-mobil">
        <a href="https://vk.com/mariya_plechikova"><img src='VK.png'/></a> 
            {/* <a href=""><img src='odnoklassniki.png'/></a> */}
            {/* <a href=""><img src='youtube.png'/></a> */}
            {/* <a href=""><img src='telegram.png'/></a> */}
            {/* <a href=""><img src='whatsapp.png'/></a> */}
            {/* <a href=""><img src='dzen.png'/></a> */}
        </div>

      </div>
          
    </div>
  );
}

export default FirstScreen;