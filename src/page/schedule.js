import "./schedule.css";
import "./first-day.css";
import "./second-day.css";
import "./third-day.css";
import "./fourth-day.css";
import "./seventh-day.css";
import "./eighth-day.css";
import Slider from './slider'

function Schedule() {
  return (
    <div className="schedule">
  
      <div className="schedule-container">
            
        <div className="schedule-journey container">

          <div className="schedule-journey-text">

            <h2>Путешествие на край света начинается</h2>

            <div className="big-text black-text">Ваша мечта осуществилась, вы приняли решение, 
              и вам предстоит путешествие на край света.</div>
            <div className="smoll-text black-text">Этот маршрут лучший вариант для тех, кто хочет 
              ощутить, как живёт самая молодая земля нашей планеты, 
              многое увидеть, испытать на себе и полюбить, увезти целый 
              рюкзак незабываемых чувств и впечатлений. Каждый день вы 
              будете выезжать на радиальные маршруты, а проживать в комфортабельных 
              двухместных номерах. </div>
                
            <div className="schedule-block">
                    <div>
                        <img src='level 1.svg'className=""/>
                        <p>Сложность</p>
                        <p>Для семейного отдыха</p>
                    </div>
                    <div>
                        <img src='calendar 1.svg'className=""/>
                        <p>Период</p>
                        <p>Июль - сентябрь</p>
                    </div>
                    <div>
                        <img src='wall-clock 1.svg'className=""/>
                        <p>Длительность</p>
                        <p>7 дней / 6 ночей</p>
                    </div>
                    <div>
                        <img src='hotels 1.svg'className=""/>
                        <p>Проживание</p>
                        <p>Отель, без палаток</p>
                    </div>
            </div>
          
            <div className="plane">
            </div>
                
            <div className="big-text white-text">
              Камчатка – земля великолепной заснеженной природы, 
              действующих вулканов и диких мест, где ещё не ступала нога человека. 
            </div>

            <div className="quote-text">
              <p>“Когда мы подлетали к Камчатке, у меня захватило дух от увиденного. 
              Это за гранью реальности. Невероятно!”</p>
              <p className="quote-name white-text">Максим, @max_max </p>
            </div>
                  
          </div>

          <div className="schedule-journey-background">
            
            <div className="journey-background">
              <img src="pngwing 2.png" className="plane-img"></img>
              <div className="gradient"></div>

              <img src='image 87.jpg' className="mountains"/>
            </div>
            
          </div>
                
        </div>


        <div className="first-day container">

            <div className="first-day-text">
              
              <h2 className="days-title"><span>День 1.</span> Прибытие. Встреча в аэропорту и размещение</h2>
              <p>
                С высоты птичьего полета вы увидите знаменитые «домашние»  вулканы – Корякский, Авачинский и Козельский. У выхода в аэропорту <span>вас встретят с табличкой «ДРИМ ТУР».</span>
              </p>
              <p>
                <span>По пути в гостиницу сбор средств</span> с членов группы, инструктаж по программе этого дня (бассейн с термальной водой, шашлык, знакомство с группой, алкоголь, фейерверк не раньше 20:00). 
              </p>
              <p>
                После выезд (вид транспорта зависит от величины группы) на базу отдыха в курортный поселок Паратунка. 
              </p>
              <p>
                <span>Вечером</span>, после прибытия на Камчатку всех участников (если рейсы разные),  общая встреча, проверка снаряжения,  обсуждение программы завтрашнего дня.
              </p>
            </div>

            <div className="first-day-slider">
              <Slider />
            </div>
              
        </div>

        <div className="second-day container">
            
            <div className="second-day-text">
              <h2 className="days-title"><span>День 2.</span> Вилючинский водопад, вулкан и Верхне-Паратунские термальные источники</h2>
              
              <div  className="second-day-p-top">
                <p>
                  Инструктаж перед поездкой (передвижение и поведение группы в лесу, общение с медведями, форма одежды, ), снаряжение, (взять тару для воды при заезде на Зайкин ключ, купальные принадлежности).
                </p>
                <p>
                  Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. Заранее решаем кто прыгает.
                </p>
              </div>
              
              <img src="./second-day-mountain.png" className="second-day-mountain"></img>

              <div className="second-day-p-bottom">
                <p>
                  Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к подножию вулкана Вилючинский. Обзорная пешеходная экскурсия к водопаду Вилючинский. Термос с чаем, шоколад. Возвращение назад.
                </p>
                <p>
                  Обед. Купание в Верхне-Паратунских термальных источниках, расположенных на склоне сопки Горячая.
                </p>
                <p>
                  Продолжительность – 6-8 часов. Трансфер в гостиницу.
                </p>
              </div>

              <div className="second-day-slider">
                <Slider />
              </div>
             
            </div>

            <div className="second-day-cloud">
              <img src="second-day-cloud.png"></img>
            </div> 
          
        </div>

        <div className="third-day container">
          <div className="third-day-text">
            <h2 className="days-title"><span>День 3.</span> Горные цирки и водопады вулкана Вачкажец </h2>
            <p className="text-smoll text-grey">
              Вачкажец–горный массив и его окрестности, одно из красивейших мест первозданной камчатской природы. Небольшой пеший переход не успеет Вас утомить. А в награду за труд в конце пути открывается великолепный вид на горное озеро в чаше кратера старого потухшего вулкана, обрамленное пиками старых, невысоких гор.
            </p>
            <p className="text-smoll text-grey">
              Выезд из гостиницы и переезд около 2 часов. Пеший переход около 5 км.в одну сторону к горным циркам вулкана Вачкажец, осмотр водопада. Обед.  Отдых. По прибытию в машину чай с шоколадом! Обратный переход по тому же пути.
            </p>
            <p className="text-smoll text-grey">
              Продолжительность: 8 часов. Трансфер в гостиницу.
            </p>
          </div>

          <div className="third-day-slider">
            <Slider />
          </div>

          {/* <div className="third-day-background"> */}
            
          {/* </div> */}

        </div>

        <div className="block-day container">

          <div className="fourth-day global-day">

            <div className="fourth-day-text">
              <h2 className="days-title"><span>День 4.</span> Экскурсия к подножию Авачинского вулкана</h2>
              <p className="global-text-smoll global-text-grey">
                Инструктаж по поведению группы в горах. Проверка снаряжения.Выезд на автомашине на вулканическое плато (высота 900 м) к подножию Авачинского вулкана (2 часа).
              </p>
              <p className="global-text-smoll global-text-grey">
                Пешеходная экскурсия к горе Верблюд, представляющую собой вулканическую экструзию. Находится в седловине между Корякским и Авачинским вулканами, относительная высота 100-150 м, ширина - около 100 м и по длине она протягивается на 500 м., состоит из трех сросшихся блоков.
              </p>
              <p className="global-text-smoll global-text-grey">
                Обед.  Поездка в Паратунку с купанием. 
              </p>
              <p className="global-text-smoll global-text-grey">
                Продолжительность – 8 часов. Трансфер в гостиницу. 
              </p>
              
            </div>

            <div className="fourth-day-slider">
              <Slider />
            </div>
          </div>

          
          
          <div className="fifth-day global-day">

            <div className="fifth-day-text">
              <h2 className="days-title"><span>День 5.</span> Морская прогулка к острову Старичков </h2>
              <p className="global-text-smoll global-text-white">
                Инструктаж по поведению группы при передвижении на плавсредствах, приему таблеток от морской болезни.
              </p>
              <p className="global-text-smoll global-text-white">
                Выезд на причал.  Морская прогулка по Авачинской бухте. Осмотр панорамы города Петропавловска-Камчатского, Авачинской губы и Авачинского залива. Маршрут пролегает мимо бухты Тихая, острова Бабушкин камень, мыса Станицкого, камней «Три брата». Увлекательная возможность донной рыбалки на терпуга, ленка, камбалу у «Трех братьев», мыса Безымянный, у острова Старичков.
              </p>
              <p className="global-text-smoll global-text-white">
                Осмотр птичьих базаров - смешанных колонии кайр, моевок и бакланов. Трансфер в гостиницу.
              </p>
              <p className="global-text-smoll global-text-white">
                Продолжительность 6 часов.
              </p>
            </div>
            
            <div className="fifth-day-slider">
              <Slider />
            </div>
          </div>

          <div className="sixth-day global-day">

            <div className="sixth-day-text">
              <h2 className="days-title"><span>День 6.</span> Берег Тихого океана, экскурсия по городу </h2>
              <p className="global-text-smoll global-text-white">
                Поездка на берег Тихого океана, в район Халактырского пляжа. Прогулка. Обед в городе. Обзорная экскурсия по г. Петропавловску-Камчатскому с посещением смотровых площадок. Рыбный рынок. 
              </p>
              <p className="global-text-smoll global-text-white">
                Продолжительность -5 часов.  Трансфер в гостиницу.
              </p>

              <div className="sixth-addition">
                <h3>Дополнительные услуги</h3>
                <div>
                  <p>Серфинг</p>
                  <p>Прыжки с высоты над водопадом.<br />Записываться заранее. </p>
                </div>
                <div>
                  <p>SUP борды</p>
                  <p>Прыжки с высоты над водопадом.<br />Записываться заранее. </p>
                </div>

              </div>

            </div>

            <div className="sixth-day-slider">
              <Slider />
            </div>
          </div>
          

        </div>

        <div className="seventh-day container">

          <div className="seventh-day-text">

            <h2 className="seventh-text-title"><span>День 7.</span> Вертолетная экскурсия в Долину Гейзеров и кальдеру вулкана Узон / свободный день</h2>
    
            <div className="seventh-day-text-top">
              <p className="global-text-smoll global-text-black">
                Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ», крупнейшим оператором вертолётных туров на Камчатке. Выезд в аэропорт «Витязь –Аэро». К вашим услугам –современный аэропортовый комплекс, включающий в себя удобный зал ожидания, кафетерий, сувенирный магазин.
              </p>

              <p className="global-text-smoll global-text-black">
                Перелёт до Долины гейзеров занимает 1 час 10 минут. По пути, при благоприятных условиях, вы осмотрите два действующих вулкана – Карымский и Малый Семячик из окон вертолёта.  
              </p>
            </div>

            <div className="seventh-day-geysers">
              <img src="./second-day-mountain.png"></img>
            </div>

            <p className="seventh-day-text-middle global-text-smoll global-text-black">
                Перелёт и посадка в кальдере Узон. Кальдера образовалась в результате обрушения стенок древнего вулкана около 40 тысяч лет назад, на её дне очень ярко проявляется гидротермальная деятельность.Сотни столбов пара вырываются здесь из жёлтых фумарольных полей. Осмотр термальных полей.
            </p>

            <div className="seventh-day-text-bottom">
              <p className="global-text-smoll global-text-black">
                Перелёт и посадка в Налычевской долине. Купание в горячих источниках. Здесь же вам предложат обед - горячее, чай и камчатский морс. Трансфер в гостиницу. 
              </p>

              <div className="seventh-addition">

                <h3>Дополнительные услуги</h3>

                <div>
                <p>Серфинг</p>
                <p>Прыжки с высоты над водопадом.<br />Записываться заранее. </p>
                </div>

                <div>
                <p>SUP борды</p>
                <p>Прыжки с высоты над водопадом.<br />Записываться заранее. </p>
                </div>

              </div>

            </div>

            <div className="seventh-slider">
              {/* <div> */}
              {/* <Slider /> */}
              {/* </div> */}
              
            </div>

          </div>
            
        </div>

        <div className="eighth-day container">
          
          <h2 className="days-title"><span>День 1.</span> Отъезд с Камчатки. Трансфер в аэропорт</h2>
          
          <p className="global-text-smoll global-text-white">
            Заезд на рынок, прощальное посещение «медведей», фото на память. Возвращайтесь следующим летом!
          </p>

        </div>

      </div>
            
    </div>
  );
}
  
  export default Schedule;