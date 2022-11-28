import "./online-application.css";

function OnlineApplication() {
    return (
        <form className="application-block__form">

            <div className="application-block__form__input">
                <label>
                    <p className="application-block__form-title">Имя участника</p>
                    <input type='text' value='Имя' className="application-block__form-input"></input>
                </label>
                <label>
                    <p className="application-block__form-title">Количество человек</p>
                    <input type='number' value='1' className="application-block__form-input"></input>
                </label>
            </div>

            <div className="application-block__form__radio">
                <p className="application-block__form-title">Тариф</p>

                <label>
                    <input type='radio' name="radio"></input>
                    <div>
                    <p>Базовый (для камчадал)</p>
                    <p>79 000 руб</p>
                    </div>
                </label>

                <label>
                    <input type='radio' name="radio"></input>
                    <div>
                    <p>Базовый + проживание</p>
                    <p>99 000 руб</p>
                    </div>
                </label>

                <label>
                    <input type='radio' name="radio"></input>
                    <div>
                    <p>Базовый + проживание + долина гейзеров</p>
                    <p>179 000 руб</p>
                    </div>
                </label>
            </div>

            <label className="application-block__form__date">
                <p className="application-block__form-title">Даты тура</p>
                <input type='date' value="23.06 - 04.07" className="application-block__form-input"></input>
            </label>

            <label className="application-block__form__comment">
                <p className="application-block__form-title">Комментарий</p>
                <input type='textarea' value="Напишите Ваш комментарий" className="application-block__form-input"></input>
            </label>

            <button className="application-block__form__button Links">Отправить заявку</button>

        </form>
    )
}

export default OnlineApplication;
