import "./footer.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <footer>

        <div className="footer">

            <div className="footer__smoll-block">
                <img src="logo.png" className="footer-logo"/>
                <Link 
                to="section1"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className="grey-text Cursor-Pointer">
                    Расписание тура
                </Link>
                <Link 
                to="section2"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className="grey-text Cursor-Pointer">
                    Стоимость
                </Link>
                <Link 
                to="section3"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className="grey-text Cursor-Pointer">
                    Как записаться
                </Link>
                <Link 
                to="section4"
                spy={true}
                // smooth={true}
                offset={-110}
                duration={500}
                className="grey-text Cursor-Pointer">
                    Команда
                </Link>
            </div>

            <div className="footer__line"></div>

            <div className="footer__big-block"> 
                <div>
                    <p>Социальные сети</p>
                    <a href="https://vk.com/mariya_plechikova"><img src='VK.png' className="social-button"/></a>
                </div>
            </div>

            <div className="footer__line middle-line"></div>

            <div className="footer__big-block">
                <div>
                    <img src='video-review.png' className="video-review"/>
                    <p>Смотрите видео отзывы наших клиентов</p>
                    <a href="" className="grey-text">Перейти</a>
                </div>
            </div>

            <div className="footer__line"></div>

            <div className="footer__smoll-block footer__end">
                <p id="tel">+7 (760) 354-23-23</p>
                <p className="grey-text">Работаем с 9:00 до 18:00</p>

                <br></br>
                
                <p>
                    <img src='email.png' className="footer__icons-email"/>
                       info@dreamkamtour.ru
                </p>
                
                <p>
                    <img src='location.png'className="footer__icons-location"/>
                       ул. Рубинштейна, 41
                </p>
                
            </div>

        </div>

        <div className="copyright grey-text">
            <hr className="copyright__line"></hr>
            2021 &copy; Dreamkam Tour
        </div>
    
    </footer>
  );
}

export default Footer;