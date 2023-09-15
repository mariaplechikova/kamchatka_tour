import "./header.css";
import Burger from "./burger";
import MenuLine from "./menu-line";
import { Link } from "react-scroll";
import React, { useState } from 'react'

export default function Header() {
  const [colorChange, setColorchange] = useState(false);

  function changeHeaderColor() {
    if(window.scrollY >= 200){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
  }

  window.addEventListener ('scroll', changeHeaderColor);


  return (
    <div className={colorChange ? "header colorChange" : "header"}>

      <Link
        to="section0"
        spy={true}
        offset={-110}
        duration={500}
      >
        <img src="logo.png" className="header__logo"/>
      </Link> 

      <div className="header-mobil">
        <Burger />
      </div>

      <div className="header-desckTop">
        <MenuLine />
      </div>
      
    </div>
    
  );
};