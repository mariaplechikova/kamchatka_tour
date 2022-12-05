import { useState } from "react";
import "./modal1.css";
import OnlineApplication from './online-application'

export default function Modal1(props) {
  const [showModal, setShowModal] = useState(props.ModalVisibility)

   return (
      <div className={"modal1 show"}> 
      <div className="modal__block">
          <div className="modal__title">Онлайн заявка</div>
          <OnlineApplication className="modal___form" sendRequest={props.sendRequest}/>
          <img src="close.png" className="close" onClick={props.closeModal}/>
        </div>
    </div>
    
  );
};