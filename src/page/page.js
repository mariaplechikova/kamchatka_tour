import "./page.css";
import "./journey.css";
import "./day1.css";
import "./day2.css";
import "./services-block.css";
import "./day3.css";
import "./day4-5-6.css";
import "./day7.css";
import "./day8.css";
import "./prise-block.css";
import "./application-block.css";
import Slider from './slider'

function Page() {
  const listImg1 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории в 6 квадратных километров находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]
  
  const listImg2 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории в 6 квадратных километров находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]

  const listImg3 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории в 6 квадратных километров находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]

  const listImg4 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории в 6 квадратных километров находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]

  const listImg5 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории в 6 квадратных километров находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]

  const listImg6 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории в 6 квадратных километров находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]

  const listImg7 = [
    {url:'slider1.jpg',
    title: "Бурые медведи",
    description: "Медведи Камчатки основные хозяева территории. Чаще всего встречаются на реках, озёрах и в океанских бухтах"},

    {url:'slider2.jpg',
    title: "Долина гейзеров",
    description: "На территории в 6 квадратных километров находятся грязевые вулканы, гейзеры, озёра, термальные источники, реки, водопады."},

    {url: 'slider3.jpg',
    title: "Ключевская сопка",
    description: "Самый высокий действующий вулкан в Евразии. Возраст приблизительно 7000 лет."},

    {url: 'slider4.jpg',
    title: "Бурые медведи",
    description: "Есть хорошая возможность понаблюдеть бурых медведей в естественной среде обитания"}
  ]


  return (
    <div className="page">
            
        <div className="journey-block Container">

          <div className="journey-block__text">

            <h2 className="journey-block__text__title">Путешествие на край света начинается</h2>

            <div className="journey-block__text__pharagraf-big">Ваша мечта осуществилась, вы приняли решение, 
              и вам предстоит путешествие на край света.</div>
            <div className="journey-block__text__pharagraf-small">Этот маршрут лучший вариант для тех, кто хочет 
              ощутить, как живёт самая молодая земля нашей планеты, 
              многое увидеть, испытать на себе и полюбить, увезти целый 
              рюкзак незабываемых чувств и впечатлений. Каждый день вы 
              будете выезжать на радиальные маршруты, а проживать в комфортабельных 
              двухместных номерах. </div>
                
            <div className="journey-block__text__table">
                    <div>
                        <img src='level 1.svg'/>
                        <p>Сложность</p>
                        <p>Для семейного отдыха</p>
                    </div>
                    <div>
                        <img src='calendar 1.svg'/>
                        <p>Период</p>
                        <p>Июль - сентябрь</p>
                    </div>
                    <div>
                        <img src='wall-clock 1.svg'/>
                        <p>Длительность</p>
                        <p>7 дней / 6 ночей</p>
                    </div>
                    <div>
                        <img src='hotels 1.svg'/>
                        <p>Проживание</p>
                        <p>Отель, без палаток</p>
                    </div>
            </div>
          
            <div className="journey-block__text__img-plane">
            </div>
                
            <div className="journey-block__text__pharagraf-white">
              Камчатка – земля великолепной заснеженной природы, 
              действующих вулканов и диких мест, где ещё не ступала нога человека. 
            </div>

            <div>
              <p className="journey-block__text__quote-text">“Когда мы подлетали к Камчатке, у меня захватило дух от увиденного. 
              Это за гранью реальности. Невероятно!”</p>
              <p className="journey-block__text__quote-name">Максим, @max_max </p>
            </div>
                  
          </div>

          <div className="journey-block__background">
            
            <div>
              <img src="pngwing 2.png" className="journey-block__background__plane"></img>
              <div className="journey-block__background__gradient"></div>

              <img src='image 87.jpg' className="journey-block__background__mountains"/>
            </div>
            
          </div>
                
        </div>


        <div className="first-day Container">

            <div className="first-day__content">
              <div className="first-day-text">
                
                <h2 className="Text-title Text-color-white"><span>День 1.</span> Прибытие. Встреча в аэропорту и размещение</h2>
                <p className="Text-pharagraf Text-color-grey">
                  С высоты птичьего полета вы увидите знаменитые «домашние»  вулканы – Корякский, Авачинский и Козельский. У выхода в аэропорту <span>вас встретят с табличкой «ДРИМ ТУР».</span>
                </p>
                <p className="Text-pharagraf Text-color-grey">
                  <span>По пути в гостиницу сбор средств</span> с членов группы, инструктаж по программе этого дня (бассейн с термальной водой, шашлык, знакомство с группой, алкоголь, фейерверк не раньше 20:00). 
                </p>
                <p className="Text-pharagraf Text-color-grey">
                  После выезд (вид транспорта зависит от величины группы) на базу отдыха в курортный поселок Паратунка. 
                </p>
                <p className="Text-pharagraf Text-color-grey">
                  <span>Вечером</span>, после прибытия на Камчатку всех участников (если рейсы разные),  общая встреча, проверка снаряжения,  обсуждение программы завтрашнего дня.
                </p>
              </div>

              <div className="first-day-slider">
                <Slider size="320px" color='white' alignMobil="left" alignDesktop="left" arr={listImg1}/>
              </div>
            </div>

            <img src="./second-day-cloud.png" className="first-day__cloud" />
              
        </div>

        <div className="second-day Container">
            
            <div className="second-day-text">
              <h2 className="Text-title Text-color-black"><span>День 2.</span> Вилючинский водопад, вулкан и Верхне-Паратунские термальные источники</h2>
              
              <div  className="second-day-p-top">
                <p className="Text-pharagraf Text-color-black">
                  Инструктаж перед поездкой (передвижение и поведение группы в лесу, общение с медведями, форма одежды, ), снаряжение, (взять тару для воды при заезде на Зайкин ключ, купальные принадлежности).
                </p>
                <p className="Text-pharagraf Text-color-black">
                  Сбор участников на Роуп Джамп для прыжков с высоты над водопадом. Заранее решаем кто прыгает.
                </p>
              </div>
              
              <img src="./second-day-mountain.png" className="second-day-mountain"></img>

              <div className="second-day-p-bottom">
                <p className="Text-pharagraf Text-color-black">
                  Выезд из отеля в 10.00. Переезд в верховья реки Паратунка к подножию вулкана Вилючинский. Обзорная пешеходная экскурсия к водопаду Вилючинский. Термос с чаем, шоколад. Возвращение назад.
                </p>
                <p className="Text-pharagraf Text-color-black">
                  Обед. Купание в Верхне-Паратунских термальных источниках, расположенных на склоне сопки Горячая.
                </p>
                <p className="Text-pharagraf Text-color-black">
                  Продолжительность – 6-8 часов. Трансфер в гостиницу.
                </p>
              </div>

              <div className="second-day-slider">
                <Slider size="320px" color="black" alignMobil="left" alignDesktop="right" arr={listImg2}/>
              </div>
             
            </div>
 
        </div>

        <div className="services-block Container">
          <h2 className="services-block__title">На протяжении маршрута вас ожидает:</h2>
          
          <div className="services-block___conteiner">

            <div className="services-block___conteiner__div">
              <img src="services-img1.jpg" className="services-block___conteiner__img"></img>
              <p className="services-block__conteiner__paragraf">
                <p className="services-block__conteiner__title">Аудиосопровождение</p>
                Новый способ увидеть и услышать, то место, где вы находитесь. С помощью аудиогида вы сможете совершить увлекательную экскурсию по городу.
              </p>
            </div>

            <div className="services-block___conteiner__div">
              <img src="services-img2.png" className="services-block___conteiner__img"></img>
              <p className="services-block__conteiner__paragraf">
                <p className="services-block__conteiner__title">Разнообразное питание</p>
                Каждый обед мы готовим с большой любовью. Кормим вас традиционными камчатскими блюдами. Еда - залог хорошего отдыха!
              </p>
            </div>

            <div className="services-block___conteiner__div">
              <img src="services-img3.png" className="services-block___conteiner__img"></img>
              <p className="services-block__conteiner__paragraf">
                <p className="services-block__conteiner__title">Безопасность на маршруте</p>
                Наша команда проводит инструктаж, рассказывает как правильно себя вести, как избежать опасных ситуаций.
              </p>
            </div>

            <div className="services-block___conteiner__div">
              <img src="services-img4.png" className="services-block___conteiner__img"></img>
              <p className="services-block__conteiner__paragraf">
                <p className="services-block__conteiner__title">Потрясающие фото</p>
                Можете не переживать, что не успели сделать фото. Наш фотограф успевает везде и за всеми. У вас будут самые лучшие фото!
              </p>
            </div>

          </div>
        </div>

        <div className="third-day Container">
          <div className="third-day-text">
            <h2 className="Text-title Text-color-black"><span>День 3.</span> Горные цирки и водопады вулкана Вачкажец </h2>
            <p className="Text-pharagraf Text-color-black">
              Вачкажец–горный массив и его окрестности, одно из красивейших мест первозданной камчатской природы. Небольшой пеший переход не успеет Вас утомить. А в награду за труд в конце пути открывается великолепный вид на горное озеро в чаше кратера старого потухшего вулкана, обрамленное пиками старых, невысоких гор.
            </p>
            <p className="Text-pharagraf Text-color-black">
              Выезд из гостиницы и переезд около 2 часов. Пеший переход около 5 км.в одну сторону к горным циркам вулкана Вачкажец, осмотр водопада. Обед.  Отдых. По прибытию в машину чай с шоколадом! Обратный переход по тому же пути.
            </p>
            <p className="Text-pharagraf Text-color-black">
              Продолжительность: 8 часов. Трансфер в гостиницу.
            </p>
          </div>

          <div className="third-day-slider">
            <Slider size="320px" color="black" alignMobil="left" alignDesktop="right" arr={listImg3}/>
          </div>

          {/* <div className="third-day-background"> */}
            
          {/* </div> */}

        </div>

        <div className="block-day">

          <div className="fourth-day Container">

            <div className="fourth-day-text">
              <h2 className="Text-title Text-color-white"><span>День 4.</span> Экскурсия к подножию Авачинского вулкана</h2>
              <p className="Text-pharagraf Text-color-grey">
                Инструктаж по поведению группы в горах. Проверка снаряжения.Выезд на автомашине на вулканическое плато (высота 900 м) к подножию Авачинского вулкана (2 часа).
              </p>
              <p className="Text-pharagraf Text-color-grey">
                Пешеходная экскурсия к горе Верблюд, представляющую собой вулканическую экструзию. Находится в седловине между Корякским и Авачинским вулканами, относительная высота 100-150 м, ширина - около 100 м и по длине она протягивается на 500 м., состоит из трех сросшихся блоков.
              </p>
              <p className="Text-pharagraf Text-color-grey">
                Обед.  Поездка в Паратунку с купанием. 
              </p>
              <p className="Text-pharagraf Text-color-grey">
                Продолжительность – 8 часов. Трансфер в гостиницу. 
              </p>
              
            </div>

            <div className="fourth-day-slider">
              <Slider size="320px" color="white" alignMobil="left" alignDesktop="left" arr={listImg4}/>
            </div>
          </div>
          
          <div className="fifth-day Container">

            <div className="fifth-day-text">
              <h2 className="Text-title Text-color-white"><span>День 5.</span> Морская прогулка к острову Старичков </h2>
              <p className="Text-pharagraf Text-color-white">
                Инструктаж по поведению группы при передвижении на плавсредствах, приему таблеток от морской болезни.
              </p>
              <p className="Text-pharagraf Text-color-white">
                Выезд на причал.  Морская прогулка по Авачинской бухте. Осмотр панорамы города Петропавловска-Камчатского, Авачинской губы и Авачинского залива. Маршрут пролегает мимо бухты Тихая, острова Бабушкин камень, мыса Станицкого, камней «Три брата». Увлекательная возможность донной рыбалки на терпуга, ленка, камбалу у «Трех братьев», мыса Безымянный, у острова Старичков.
              </p>
              <p className="Text-pharagraf Text-color-white">
                Осмотр птичьих базаров - смешанных колонии кайр, моевок и бакланов. Трансфер в гостиницу.
              </p>
              <p className="Text-pharagraf Text-color-white">
                Продолжительность 6 часов.
              </p>
            </div>
            
            <div className="fifth-day-slider">
              <Slider size="320px" color="white" alignMobil="left" alignDesktop="right" arr={listImg5}/>
            </div>
          </div>

          <div className="sixth-day Container">

            <div className="sixth-day-text">
              <h2 className="Text-title Text-color-white"><span>День 6.</span> Берег Тихого океана, экскурсия по городу </h2>
              <p className="Text-pharagraf Text-color-white">
                Поездка на берег Тихого океана, в район Халактырского пляжа. Прогулка. Обед в городе. Обзорная экскурсия по г. Петропавловску-Камчатскому с посещением смотровых площадок. Рыбный рынок. 
              </p>
              <p className="Text-pharagraf Text-color-white">
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
              <Slider size="320px" color="white" alignMobil="left" alignDesktop="left" arr={listImg6}/>
            </div>
          </div>

          <img src="./second-day-cloud.png" className="block-day__cloud" />  
        
        </div>

        <div className="seventh-day Container">
            
            <div className="seventh-day-text">
              <h2 className="Text-title Text-color-black"><span>День 7.</span> Вертолетная экскурсия в Долину Гейзеров и кальдеру вулкана Узон / свободный день</h2>
              
              <div  className="seventh-day-p-top">
                <p className="Text-pharagraf Text-color-dark-grey">
                  Экскурсия проводится в содружестве с «ВИТЯЗЬ-ТРЕВЕЛ», крупнейшим оператором вертолётных туров на Камчатке. Выезд в аэропорт «Витязь –Аэро». К вашим услугам –современный аэропортовый комплекс, включающий в себя удобный зал ожидания, кафетерий, сувенирный магазин.
                </p>
                <p className="Text-pharagraf Text-color-dark-grey">
                  Перелёт до Долины гейзеров занимает 1 час 10 минут. По пути, при благоприятных условиях, вы осмотрите два действующих вулкана – Карымский и Малый Семячик из окон вертолёта.  
                </p>
              </div>
              
              <img src="./seventh-day-geyser.png" className="seventh-day-geyser"></img>

              <p className="seventh-day-text-middle Text-pharagraf Text-color-dark-grey">
                Перелёт и посадка в кальдере Узон. Кальдера образовалась в результате обрушения стенок древнего вулкана около 40 тысяч лет назад, на её дне очень ярко проявляется гидротермальная деятельность.Сотни столбов пара вырываются здесь из жёлтых фумарольных полей. Осмотр термальных полей.
              </p>

              <div className="seventh-day-p-bottom">
                <p className="Text-pharagraf Text-color-dark-grey">
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

              <div className="seventh-day-slider">
                <Slider size="320px" color="black" alignMobil="left" alignDesktop="right" arr={listImg7}/>
              </div>
             
            </div>
          
        </div>

        <div className="eighth-day Container">
          
          <h2 className="Text-title Text-color-white"><span>День 8.</span> Отъезд с Камчатки. Трансфер в аэропорт</h2>
          
          <p className="Text-pharagraf Text-color-white">
            Заезд на рынок, прощальное посещение «медведей», фото на память. Возвращайтесь следующим летом!
          </p>

        </div>

        <div className="prise-block Container">

          <h3 className="prise-block__title">Стоимость участия</h3>

          <div className="prise-block__rite">
            <div className="prise-block__rite__point Text-pharagraf Text-color-black">
              <p>Базовый (для камчадал)</p>
              <p>70 000 руб</p>
            </div>
            <div className="prise-block__rite__point Text-pharagraf Text-color-black">
              <p>Базовый + проживание</p>
              <p>99 000 руб</p>
            </div>
            <div className="prise-block__rite__point Text-pharagraf Text-color-black">
              <p>Базовый + проживание + долина гейзеров</p>
              <p>179 000 руб</p>
            </div>
          </div>

            <div className="prise-block__send-request Links"><a>Отправить заявку</a></div>
            <div className="prise-block__description">
              <p>В стоимость входит</p>
              <ul className="Text-pharagraf Text-color-dark-grey">
                <li>встреча и проводы в аэропорту   </li>
                <li>питание: обеды во время экскурсий</li>
                <li>услуги гида </li>
                <li>все транспортные услуги ( автобусы, джипы-вездеходы 4WD)</li>
                <li>все указанные в программе экскурсии</li>
              </ul>
            </div>
            <div className="prise-block__addition">
              <p>За дополнительную плату</p>
              <ul className="Text-pharagraf Text-color-dark-grey">
                <li>вертолётная экскурсия в Долину Гейзеров и кальдеру Узона, оплачивается в день вылета</li>
                <li>дополнительные экскурсии и опции</li>
                <li>размещение в гостинице</li>
                <li>питание(кроме обедов во время экскурсий)</li>
                <li>личные расходы</li>
              </ul>
            </div>
            <div className="prise-block__useful-links">
              <a className="Links">Информация о бронях</a>
              <a  className="Links">Важная информация</a>
              <a  className="Links">Условия договора и возврата</a>
            </div>
          
        </div>

        <div className="application-block Container">

          <div className="application-block__title">
            <p>Онлайн-заявка</p>
            <div>
              <a>
                <img src="VK.png" />
                <img src="odnoklassniki.png" />
              </a>
            </div>
          </div>

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
              <p className="application-block__form-title">Напишите Ваш комментарий сдесь</p>
              <input type='textarea' value="Напишите Ваш комментарий" className="application-block__form-input"></input>
            </label>

            <button className="application-block__form__button Links">Отправить заявку</button>

          </form>

          <form className="application-block__form-email">

            <img src="application-img.png" className="application-block__img"/>
            <div>
              <h4  className="application-block__form-email__title">Что нужно знать отправляясь на Камчатку?</h4>
              <p  className="application-block__form-email__paragraf">Получите памятку туриста просто оставив свой e-mail.</p>
              <input type='email' value="Ваш e-mail" className="application-block__form-email__input"></input>
              <button className="application-block__form__button">Получить</button>
            </div>
            
          </form>
        </div>

    </div>
  );
}
  
  export default Page;