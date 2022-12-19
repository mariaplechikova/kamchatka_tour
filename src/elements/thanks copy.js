import "./thanks.css";

function Thanks(props) {
    function closeAll() {
        props.closeThanks(false)
        props.closeModal4(false)
    }
  return (
    //   <div className={props.visibilityThanks ? "thanks" : "hide"}>
      <div className="thanks">
        <div className="thanks__message">
            <img src="close.png" className="close" onClick={closeAll}/>
            <img src="confirmation.png" />
            <p>Заявка отправлена.</p>
            Спасибо за Ваше внимание. <br />
            В ближайшее время мы свяжемся <br /> с Вами
        </div>
      </div>
  );
}

export default Thanks;