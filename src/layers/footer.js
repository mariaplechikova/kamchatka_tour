import "./footer.css";
import Logo from "./logo.js";

function Footer() {
  return (
    <div className="footer">

        <footer>

            <div className="smoll">
                <Logo />
                <p className="grey">Расписание тура</p>
                <p className="grey">Стоимость</p>
                <p className="grey">Как записаться</p>
                <p className="grey">Команда</p>
            </div>

            <hr></hr>

            <div className="big"> 
                Виджет социальной сети
            </div>

            <hr></hr>

            <div className="big">
                <div>
                    <img src='video-review.png' className="video-review"/>
                    <p>Смотрите видео отзывы наших клиентов</p>
                    <a href="" className="grey">Перейти</a>
                </div>
                <br></br>
                <br></br>
                <div>
                    <p>Социальные сети</p>
                    <a href=""><img src='VK.png'/></a>
                </div>
            </div>

            <hr></hr>

            <div className="smoll">
                <p id="tel">+7 (760) 354-23-23</p>
                <p className="grey">Работаем с 9:00 до 18:00</p>

                <br></br>
                
                <p>
                    <img src='email.png' className="icons"/>
                       info@dreamkamtour.ru
                </p>
                
                <p>
                    <img src='location.png'className="icons"/>
                       ул. Рубинштейна, 41
                </p>
                
            </div>

            <div className="copyright grey">
                <hr></hr>
                2021 &copy; Dreamkam Tour
            </div>

    </footer>
    
    </div>
  );
}

export default Footer;