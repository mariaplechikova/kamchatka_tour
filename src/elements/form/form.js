import "./form.css";
import { useState } from 'react'
import PhoneInput from '../mask/input-phone';
import Thanks from '../window-of-grace/thanks';
import { api } from '../../api'

function Form(props) {
    const [sendQuantity, getSendQuantity] = useState(0)
    const [sendPhone, getSendPhone] = useState('');
    const [showThanks, setshowThanks] = useState(false)
    const [ isErrorName, setErrorName ] = useState(false)
    const [ isErrorPhone, setErrorPhone ] = useState(false)
    const [ isErrorQuantity, setErrorQuantity ] = useState(false)
    const [ isErrorTariff, setErrorTariff ] = useState(false)
    const [ isErrorDate, setErrorDate ] = useState(false)

    function handleThanks(num) {
        setshowThanks(num)
        console.log(showThanks)
    }

    // function Inc(event) {
    //     getSendQuantity(sendQuantity + 1)
    //     console.log(sendQuantity)
    //     handleField(event, 'quantity')
    //   }
    
    // function Dec(event) {
    //     getSendQuantity(sendQuantity - 1)
    //     console.log(sendQuantity)
    //     handleField(event, 'quantity')
    // }
    
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

    function notValidName() {
        const res = sendList.name === "" ? true : false;
        setErrorName(res);

        return res
    }

    function notValidQuantity() {
        let res = sendList.quantity
        if (res === '' || res === '0') {
            res = true
        } else {
            res = false
        }
        // const res = sendList.quantity === "" ? true : false;
        setErrorQuantity(res);

        return res
    }

    function notValidPhone() {
        const phone = sendList.phone
            .replace('+', '')
            .replace('(', '')
            .replace(')', '')
            .replace(/_+/g, '')
            .replace(/\s+/g, '');

        const res = phone.length !== 11;

        setErrorPhone(res);

        return res;
       
    }

    function notValidTariff() {
        const res = sendList.tariff === "" ? true : false;
        setErrorTariff(res);

        return res
    }

    function notValidDate() {
        const res = sendList.date === "" ? true : false;
        setErrorDate(res);

        return res
    }


    function addSendlist(event) {
        event.preventDefault()

        const errorName = notValidName()
        const errorQuantity = notValidQuantity()
        const errorPhone = notValidPhone()
        const errorTariff = notValidTariff()
        const errorDate = notValidDate()
        
        if (errorName) {
            console.log(`name is not valid`)

            return;
        }

        if (errorQuantity) {
            console.log(`name is not valid`)

            return;
        }

        if (errorPhone) {
            console.log(`phone is not valid`)

            return;
        }

        if (errorTariff) {
            console.log(`phone is not valid`)

            return;
        }

        if (errorDate) {
            console.log(`phone is not valid`)

            return;
        }

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
                    <p className={`form__error-text + ${isErrorName ? "show" : "hide"}`}>Укажите Ваше Имя</p>
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
                    <p className={`form__error-text + ${isErrorQuantity ? "show" : "hide"}`}>Укажите колличество участников</p>
                </label>
                {/* <label className="form__number">
                    <p className="form__number-title">Количество человек</p>
                    <input 
                        type='text' 
                        value={sendQuantity}
                        className="form__number-input" 
                    ></input>
                    <div className="form__number__counter" >
                        <div className="form__counter__button" onClick={(event) => Dec(event)} value={sendQuantity}>-</div>
                        <div className="form__counter__button" onClick={(event) => Inc(event)} value={sendQuantity}>+</div>
                    </div>
                    <p className={`form__error-text + ${isErrorQuantity ? "show" : "hide"}`}>Укажите колличество участников</p>
                </label> */}
            </div>

            <div className="form__tel-date">
                <label className="form__tel">
                    <p className="form__tel-title">Контактный телефон</p>
                    <PhoneInput value={sendPhone} onChange={handlePhone}/>
                    <p className={`form__error-text + ${isErrorPhone ? "show" : "hide"}`}>Введите номер телефона</p>
                </label>

                <label className="form__date">
                <p className="form__date-title">Даты тураffff</p>
                <select name="dateTour" onChange={(event) => handleField(event, 'date')}>
                    <option value="">Выберите дату тура</option>
                    <option value="23.06 - 30.06">23.06 - 30.06</option>
                    <option value="14.07 - 21.07">14.07 - 21.07</option>
                    <option value="20.08 - 27.08">20.08 - 27.08</option>
                </select>
                <p className={`form__error-text + ${isErrorDate ? "show" : "hide"}`}>Укажите желаемую дату тура</p>
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
                <p className={`form__error-text + ${isErrorTariff ? "show" : "hide"}`}>Укажите тариф</p>
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
