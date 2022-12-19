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
import ButtonBooking from '../elements/button-booking';

export default function Burger() {
  const [showAnimated, setShowAnimated] = useState(false);

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
              onClick={() => setShowAnimated(!showAnimated)}
            >
              <div className='burger__messenger'>
                <a title="Whatsapp" href="whatsapp://send?phone=79209696101" className="messenger">
                  <img src="whatsapp-icon.png" alt="Написать в Whatsapp" />
                </a>
                <a title="Telegram" href="https://telegram.me/mariya_plechikova" target="_blank" className="messenger">
                  <img src="telegram-icon.png" />
                </a>
              </div>
              
              <div className={`animated-icon ${showAnimated && 'open'}`}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </MDBNavbarToggler>
          </MDBContainer>
        </MDBNavbar>

        <MDBCollapse show={showAnimated} className="burger__collapse" >
          <div className='bg-light shadow-3 p-4 burger__collapse__content'>
            <MDBBtn block className='burger-links border-bottom m-0' color='link' onClick={() => setShowAnimated(!showAnimated)}>
            <Link 
              to="section1"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Расписание тура
              </Link>
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link' onClick={() => setShowAnimated(!showAnimated)}>
             <Link 
              to="section3"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Как записаться
              </Link>
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link' onClick={() => setShowAnimated(!showAnimated)}>
            <Link 
              to="section2"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Стоимость
              </Link>
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link' onClick={() => setShowAnimated(!showAnimated)}>
            <Link 
              to="section4"
              spy={true}
              offset={-70}
              duration={500}
              className="Cursor-Pointer">
                Команда
              </Link>
            </MDBBtn>
            <ButtonBooking className='burger__booking'/>
            <div className='burger__tel'>+ 7 (760) 354-23-23</div>
            <div className='burger__address'>ул. Рубиннштерна, 41</div>
          </div>
          </MDBCollapse>
      </section>
    </>
  );
}