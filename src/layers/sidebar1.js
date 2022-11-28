import React, { useState } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import "./sidebar1.css";

export default function SideBar1() {
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
              Расписание тура
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link'>
             Как записаться
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link'>
              Команда
            </MDBBtn>
            <MDBBtn block className='burger-links border-bottom m-0' color='link'>
              Стоимость
            </MDBBtn>
          </div>
        </MDBCollapse>
      </section>
    </>
  );
}