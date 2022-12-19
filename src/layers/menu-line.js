import "./menu-line.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { Thanks } from "../elements/thanks copy";
import ButtonBooking from '../elements/button-booking';

// import { api } from '../api'

function MenuLine() {

  // function SendRequest(tourData) {
  //   ChangeShowForm()

  //   api.bookTour(tourData)
  // }

  return (
    <nav>
      <Link 
      // activeClass="Link-active"
      to="section1"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="menu-line__link Cursor-Pointer">
        Расписание тура
      </Link>
      <Link 
      // activeClass="Link-active"
      to="section2"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="menu-line__link  Cursor-Pointer">
        Как записаться
      </Link>
      <Link 
      // activeClass="Link-active"
      to="section4"
      spy={true}
      // smooth={true}
      offset={-110}
      duration={500}
      className="menu-line__link Cursor-Pointer">
        Команда
      </Link>

      {/* <Booking className="menu-line__button" /> */}
      {/* <Thanks /> */}
      <ButtonBooking />
      

      <a title="Whatsapp" href="whatsapp://send?phone=79209696101" className="messenger">
        <img src="whatsapp-icon.png" alt="Написать в Whatsapp" />
      </a>

      <a title="Telegram" href="https://telegram.me/mariya_plechikova" target="_blank" className="messenger">
        <img src="telegram-icon.png" />
      </a>

    </nav>
  );
}

export default MenuLine;
