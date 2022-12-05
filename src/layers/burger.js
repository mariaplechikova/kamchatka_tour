import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import "./burger.css";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Burger() {
  const [showAnimated2, setShowAnimated2] = useState(false);

  return (
    <>
      <section className='mb-3'>
        <MDBNavbar className='burger_top'>
          <MDBContainer className='burger__top__container'>
            <MDBNavbarToggler
              type='button'
              className='burger__top__container__button'
              data-target='#navbarToggleExternalContent'
              aria-controls='navbarToggleExternalContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowAnimated2(!showAnimated2)}
            >
              <div className={`animated-icon2 ${showAnimated2 && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated2} className="burger__collapse">
          <div className='bg-light shadow-3 p-4 burger__collapse__content'>
            <MDBBtn block className='burger-links border-bottom m-0' color='link'>
            <Link 
              to="section1"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Расписание тура
              </Link>
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link'>
             <Link 
              to="section3"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Как записаться
              </Link>
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link'>
            <Link 
              to="section2"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Стоимость
              </Link>
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link'>
            <Link 
              to="section4"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Команда
              </Link>
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}