import "./footer.css";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer>

        <div className="footer">

            <div className="footer__smoll-block">
                {/* <Link onClick={()=>scroll.scrollToTop()}>
                    <img src="logo.png" className="footer-logo Cursor-Pointer"/>
                </Link>  */}
                <Link 
                to="section0"
                spy={true}
                offset={-110}
                duration={500}
                >
                    <img src="logo.png" className="footer-logo Cursor-Pointer"/>
                </Link>
                
                <Link 
                to="section"
                spy={true}
                offset={-110}
                duration={500}
                className="grey-text Links">
                    Расписание тура
                </Link>
                <Link 
                to="section1"
                spy={true}
                offset={-110}
                duration={500}
                className="grey-text Links">
                    Расписание тура
                </Link>
                <Link 
                to="section2"
                spy={true}
                offset={-110}
                duration={500}
                className="grey-text Links">
                    Стоимость
                </Link>
                <Link 
                to="section3"
                spy={true}
                offset={-110}
                duration={500}
                className="grey-text Links">
                    Как записаться
                </Link>
                <Link 
                to="section4"
                spy={true}
                offset={-110}
                duration={500}
                className="grey-text Links">
                    Команда
                </Link>
            </div>

            <div className="footer__line"></div>

            <div className="footer__big-block"> 
                <div>
                    <p>Социальные сети</p>
                    <a href="https://vk.com/mariya_plechikova"><img src='VK.png' className="Social-button"/></a>
                </div>
            </div>

            <div className="footer__line middle-line"></div>

            <div className="footer__big-block">
                <div>
                    <img src='video-review.png' className="video-review"/>
                    <p>Смотрите видео отзывы наших клиентов</p>
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