import "./online-application.css";
import { useState } from 'react'

function OnlineApplication() {
    const [sendName, getSendName] = useState('Имя')
    const [sendQuantity, getSendQuantity] = useState(1)
    const [sendTariff, getSendTariff] = useState('')
    const [sendDate, getSendDate] = useState("2023-05-01")
    const [sendComment, getSendComment] = useState("Напишите Ваш комментарий")

    const [sendList, getSendList] = useState({
            name: sendName,
            quantity: sendQuantity,
            tariff: sendTariff,
            date: sendDate,
            comment: sendComment,     
    })
    

    function handleName(event) {
        getSendName(event.target.value)
        console.log(sendName)
    }

    function handleQuantity(event) {
        getSendQuantity(event.target.value)
        console.log(sendQuantity)
       
    }

    function handleTariff(tariff) {
        getSendTariff(tariff) 
        console.log(sendTariff)
    }

    function handleDate(event) {
        getSendDate(event.target.value)
        console.log(sendDate)
    }

    function handleComment(event) {
        getSendComment(event.target.value)
        console.log(sendComment)
    }

    function addSendlist() {
        // event.defaultPrevented()
        getSendList({
            name: sendName,
            quantity: sendQuantity,
            tariff: sendTariff,
            date: sendDate,
            comment: sendComment,
        })
        console.log(sendList)
    }

    return (
        <form className="application-block__form">

            <div className="application-block__form__input">
                <label>
                    <p className="application-block__form-title">Имя участника</p>
                    <input 
                        type='text' 
                        value={sendName} 
                        className="application-block__form-input" 
                        onChange={handleName} 
                    />
                </label>
                <label>
                    <p className="application-block__form-title">Количество человек</p>
                    <input 
                        type='number' 
                        placeholder={sendQuantity} 
                        min="1" 
                        max="10"
                        step="1"
                        className="application-block__form-input" 
                        onChange={handleQuantity}
                    />
                </label>
            </div>

            <div className="application-block__form__radio">
                <p className="application-block__form-title">Тариф</p>

                <label onClick={() => handleTariff("Базовый (для камчадал)")}>
                    <input  type='radio'  name="radio" />
                    <div>
                    <p>Базовый (для камчадал)</p>
                    <p>79 000 руб</p>
                    </div>
                </label>

                <label onClick={() => handleTariff("Базовый + проживание")}>
                    <input  type='radio' name="radio" />
                    <div>
                    <p>Базовый + проживание</p>
                    <p>99 000 руб</p>
                    </div>
                </label>

                <label onClick={() => handleTariff("Базовый + проживание + долина гейзеров")} >
                    <input type='radio' name="radio" />
                    <div>
                    <p>Базовый + проживание + долина гейзеров</p>
                    <p>179 000 руб</p>
                    </div>
                </label>
            </div>

            <label className="application-block__form__date">
                <p className="application-block__form-title">Даты тура</p>
                <input onChange={handleDate} type='date' value={sendDate} className="application-block__form-input" ></input>
            </label>

            <label className="application-block__form__comment">
                <p className="application-block__form-title">Комментарий</p>
                <input onChange={handleComment} type='textarea' value={sendComment} className="application-block__form-input"></input>
            </label>

            <div onClick={addSendlist}>Отправить</div>

            <button className="" >Отправить заявку</button>
            {/* <button className="application-block__form__button" onClick={addSendlist}>Отправить заявку</button> */}

        </form>
    )
}

export default OnlineApplication;
