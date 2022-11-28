import "./footer.css";
import Logo from "./logo.js";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>

        <div className="footer-block">

            <div className="smoll">
                <Link 
                to="section1"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className="grey Cursor-Pointer">
                    Расписание тура
                </Link>
                <Link 
                to="section2"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className="grey Cursor-Pointer">
                    Стоимость
                </Link>
                <Link 
                to="section3"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className="grey Cursor-Pointer">
                    Как записаться
                </Link>
                <Link 
                to="section4"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className=" grey Cursor-Pointer">
                    Команда
                </Link>
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

        </div>

        <div className="copyright grey">
            <hr></hr>
            2021 &copy; Dreamkam Tour
        </div>
    
    </footer>
  );
}

export default Footer;