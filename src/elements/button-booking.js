import Modal1 from "./modal1";
import { useState } from "react";
import "./button-booking.css";


function ButtonBooking() {

    const [ showModal, setshowModal ] = useState(false)

    function ChangeShowModal(num) {
        setshowModal(num)
        console.log(`показывать форму ${showModal}`)
     }
    
  return (
    <div>
        <button className="booking" onClick={() => ChangeShowModal(true)}>Забронировать</button>
        {showModal ? (< Modal1 closeModal1={ChangeShowModal} />) : null}
    </div>
  );
}

export default ButtonBooking;