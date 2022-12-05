import "./menu-line.css";
import { Link, animateScroll as scroll } from "react-scroll";
import Modal1 from "../elements/modal1";
import { useState } from "react";

function MenuLine() {

  const [ showForm, setShowForm ] = useState(false)

  function ChangeShowForm() {
    // event.preventDefault()
    setShowForm(!showForm)
    console.log('Ghbdtn')
    console.log(showForm)
    
  }

  return (
    <nav>
      <Link 
      activeClass="Link-active"
      to="section1"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="menu-line__link Cursor-Pointer">
        Расписание тура
      </Link>
      <Link 
      activeClass="Link-active"
      to="section2"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="menu-line__link  Cursor-Pointer">
        Как записаться
      </Link>
      <Link 
      activeClass="Link-active"
      to="section4"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="menu-line__link Cursor-Pointer">
        Команда
      </Link>
      <button className="menu-line__button" onClick={ChangeShowForm}>Забронировать</button>
      {/* <button className="menu-line__button" >Забронировать</button> */}
      {showForm ? (< Modal1 closeModal={ChangeShowForm}/>) : null}
    </nav>
  );
}

export default MenuLine;
