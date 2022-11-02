import "./side-bar.css";

import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
      <Menu {...props}>
        <a className="menu-item" href="/">
        Расписание тура
        </a>

        <a className="menu-item" href="/about">
        Как записаться
        </a>

        <a className="menu-item" href="/services">
        Команда
        </a>

        <a className="menu-item" href="/contact">
        <button className="button">Забронировать</button>
        </a>
      </Menu>
    
  );
};