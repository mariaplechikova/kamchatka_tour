import "./menu.css";
import Logo from "./logo.js";
import { Nav, Navbar } from "react-bootstrap";
import CloseButton from 'react-bootstrap/CloseButton';

import "bootstrap/dist/css/bootstrap.min.css";

// function Menu() {
//   return (
//     <div className="menu">
// <nav>
//       <Logo />
//       <div className="nav-links">Расписание тура</div>
//       <div className="nav-links">Как записаться</div>
//       <div className="nav-links">Команда</div>
//       <button>Забронировать</button>
//     </nav>
//     </div>
    
//   );
// }

// export default Menu;

export default function Menu() {

  function show(event) {
    console.log(event.target)
  }

  return (
    <div className="menu">

        <Navbar collapseOnSelect expand="lg" className="navbar" onClick={show}>

          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav"  />

          <Navbar.Collapse id="responsive-navbar-nav" >

            <Nav className="mr-auto" >

            {/* <CloseButton onClick={hideMenu}/> */}

              <Nav.Link href="#features" className="nav-link">
                <span>Расписание тура</span>
              </Nav.Link>

              <Nav.Link href="#pricing">
                <span>Как записаться</span>
              </Nav.Link>

              <Nav.Link href="#pricing">
                <span>Команда</span>
              </Nav.Link>

              <Nav.Link href="#pricing">
                <button className="button">Забронировать</button>
              </Nav.Link>
              
            </Nav>
            
          </Navbar.Collapse>

          </Navbar>

    </div>
    
  );
}
