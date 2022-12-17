import "./form.css";
import { useState } from 'react'
import InputMask from 'react-input-mask';
import PhoneInput from './input-phone';
import Thanks from './thanks';
import { api } from '../api'

function Form(props) {
    const [sendQuantity, getSendQuantity] = useState(1)
    const [sendPhone, getSendPhone] = useState('');
    // const [sendTariff, getSendTariff] = useState('')
    // const [sendDate, getSendDate] = useState("2023-05-01")
    // const [sendComment, getSendComment] = useState("Напишите Ваш комментарий")
    const [showThanks, setshowThanks] = useState(false)

    function handleThanks(num) {
        setshowThanks(num)
        console.log(showThanks)
    }
    
    const [sendList, setSendList] = useState({
        name: '',
        quantity: '',
        phone: '',
        tariff: '',
        date: '',
        comment: '',     
    })

    function handlePhone (event) {
        getSendPhone(event.target.value);
        handleField(event, 'phone')
        return sendPhone
    }

    function handleField(event, field) {
        setSendList({
            ...sendList,
            [field]: event.target.value
        })
    }

    function addSendlist(event) {
        event.preventDefault()
        sendRequest(sendList)
        handleThanks(true)
        props.closeForm1()
        console.log(sendList)
    }

    function sendRequest(tourData) {
        api.bookTour(tourData)
      }

    return (
        <form className="form">

            <div className="form__name-number">
                <label className="form__name">
                    <p className="form__name-title">Имя участника</p>
                    <input 
                        type='text' 
                        placeholder="Имя"
                        className="form__name-input" 
                        onChange={(event) => handleField(event, 'name')} 
                    />
                </label>
                <label className="form__number">
                    <p className="form__number-title">Количество человек</p>
                    <input 
                        type='number' 
                        placeholder={sendQuantity} 
                        min="1" 
                        max="10"
                        step="1"
                        className="form__number-input" 
                        onChange={(event) => handleField(event, 'quantity')}
                    ></input>
                </label>
            </div>

            <div className="form__tel-date">
                <label className="form__tel">
                    <p className="form__tel-title">Контактный телефон</p>
                    <PhoneInput value={sendPhone} onChange={handlePhone} />
                </label>

                <label className="form__date">
                <p className="form__date-title">Даты тура</p>
                <select name="dateTour" onChange={(event) => handleField(event, 'date')}>
                    <option value="">Выберете дату тура</option>
                    <option value="23.06 - 30.06">23.06 - 30.06</option>
                    <option value="14.07 - 21.07">14.07 - 21.07</option>
                    <option value="20.08 - 27.08">20.08 - 27.08</option>
                </select>
                </label>
            </div>


            <div className="form__radio" onClick={(event) => handleField(event, 'tariff')}>
                <p className="form__radio-title">Тариф</p>

                <label >
                    <input 
                        type='radio'
                        name="radio" 
                        value="Базовый (для камчадал)"
                    />
                    <div>
                    <p>Базовый (для камчадал)</p>
                    <p>79 000 руб</p>
                    </div>
                </label>

                <label >
                    <input  type='radio' name="radio" value="Базовый + проживание"/>
                    <div>
                    <p>Базовый + проживание</p>
                    <p>99 000 руб</p>
                    </div>
                </label>

                <label  >
                    <input type='radio' name="radio" value="Базовый + проживание + долина гейзеров"/>
                    <div>
                    <p>Базовый + проживание + долина гейзеров</p>
                    <p>179 000 руб</p>
                    </div>
                </label>
            </div>

            <label className="form__comment">
                <p className="form__coment-title">Комментарий</p>
                <input 
                    onChange={(event) => handleField(event, 'comment')} 
                    type='textarea' 
                    placeholder="Напишите Ваш комментарий"
                    className="form__comment-input"
                />
            </label>
            <button className="form__button" onClick={addSendlist}>Отправить заявку</button>
            {showThanks ? <Thanks closeModal4={props.closeModal3} closeThanks={handleThanks} /> : null}
        </form>
    )
}

export default Form;
