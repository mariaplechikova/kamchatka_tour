import { useState } from "react";
import "./modal1.css";
import Form from './form'

export default function Modal1(props) {
  const [showForm, setShowForm] = useState(true)
  
    function handlerForm() {
      setShowForm(false)
    }

    function closeModal2(num) {
      props.closeModal1(num)
    }

   return (
    <div className={"modal1 show"}> 
      <div className="modal__block">
        <div className="modal__title">Онлайн заявка</div>
        <Form className="modal___form" closeModal3={closeModal2} closeForm1={handlerForm}/>
        <img src="close.png" className="close" onClick={() => closeModal2(false)}/>
      </div>
    </div>
    
  );
};