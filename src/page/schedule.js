import "./schedule.css";

function Schedule() {
  return (
    <div className="schedule">
  
      <div className="schedule-container">
            
        <div className="schedule-journey">

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
              {/* <p className="kamchatka">Камчатка</p> */}
              <img src='image 87.jpg' className="mountains"/>
            </div>
            
          </div>

    
                
        </div>

          
          
  
      </div>
            
    </div>
  );
}
  
  export default Schedule;