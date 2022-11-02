import "./navbar.css";
import Logo from "./logo.js";

import React from "react";
import SideBar from "./side-bar";

export default function Navbar() {
  return (
    <div id="Navbar">
      <div className="navbar-container">
        <Logo className="logo" />
        <SideBar  outerContainerId={"Navbar"} />
        
      </div>

      
      
    </div>
    
  );
};