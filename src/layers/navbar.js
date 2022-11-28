import "./navbar.css";
import Logo from "./logo.js";
import SideBar from "./side-bar";
import SideBar1 from "./sidebar1";
import Menu from "./menu";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { useState } from 'react'

export default function Navbar() {
  const [colorChange, setColorchange] = useState(false);

  function changeNavbarColor() {
    if(window.scrollY >= 200){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
  }

  window.addEventListener ('scroll', changeNavbarColor);


  return (
    <div className={colorChange ? "navbarN colorChange" : "navbarN"}>

      <Link onClick={()=>scroll.scrollToTop()} className="Cursor-Pointer">
        <Logo className="logo"/>
      </Link> 

      <div className="menu-mobil">
        <SideBar1 />
      </div>

      <div className="menu-desckTop">
        <Menu />
      </div>
      
    </div>
    
  );
};