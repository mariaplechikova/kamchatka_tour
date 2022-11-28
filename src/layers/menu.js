import "./menu.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Menu() {
//   const state = {
//     show: false
//   };
  
//  function showModal(e) {
//     this.setState({
//       show: true
//     });
//   };

  return (
    <nav>
      <Link 
      activeClass="active"
      to="section1"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="nav-links Cursor-Pointer">
        Расписание тура
      </Link>
      <Link 
      activeClass="active"
      to="section2"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="nav-links  Cursor-Pointer">
        Как записаться
      </Link>
      <Link 
      activeClass="active"
      to="section4"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="nav-links Cursor-Pointer">
        Команда
      </Link>
      <button className="nav-button" onClick={e => this.showModal}>Забронировать</button>
    </nav>
  );
}

export default Menu;
