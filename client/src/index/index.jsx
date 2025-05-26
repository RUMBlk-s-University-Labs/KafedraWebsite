import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import './index.css'

function Index() {
    return (
        <div>
            <NewsSlider/>
            <div className="message-container bg-tria">
                <h2 id='about' className="text-white bg-unua">Про сайт</h2> 
                <div className="imgbox"><img src={`/files/images/about.jpeg`}/></div>
                <p>
                Інформаційний портал кафедри суспільних наук Національного університету "Освітній Простір" створений з метою представлення основних напрямів діяльності кафедри, ознайомлення студентів, абітурієнтів і всіх зацікавлених осіб з її освітньою, науковою та громадською активністю. Цей сайт слугує як зручна платформа для доступу до актуальних новин, корисних ресурсів, а також контактної інформації.
                </p>
                <p>
                Кафедра суспільних наук Національного університету "Освітній Простір" є одним із провідних академічних підрозділів, що поєднує в собі глибокі гуманітарні традиції та інноваційні підходи до вивчення соціальних процесів. Її місія — формування світогляду нового покоління громадян, здатних критично мислити, брати активну участь у суспільному житті та приймати відповідальні рішення в умовах швидких змін.
                Кафедра забезпечує викладання широкого спектру дисциплін, зокрема соціології, філософії, культурології, етики, політології, релігієзнавства, а також курсів, спрямованих на формування громадянських та міжкультурних компетентностей. Навчальний процес поєднує теоретичні знання з практичним аналізом сучасних соціальних викликів. Викладацький склад кафедри — це досвідчені науковці, кандидати та доктори наук, а також молоді перспективні дослідники, які активно беруть участь у міжнародних проєктах, конференціях і грантових програмах.
                Особливу увагу кафедра приділяє науково-дослідній роботі студентів. Щорічно проводяться наукові конференції, круглі столи, дебати, в яких активно беруть участь студенти різних курсів. Кафедра також підтримує міжвузівські та міжнародні зв’язки, сприяючи академічній мобільності та обміну досвідом.
                </p>
            </div>
        </div>
    )
}

function NewsSlider() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      fetch("/api/news?limit=10")
        .then((res) => res.json())
        .then((data) => setNews(data))
        .catch((err) => console.error(err));
    }, []);
  
    return (
      <div className="message-container">
        <h3 className="text-center text-white bg-unua">Останні новини</h3>
        <Carousel interval={10000} className="bg-dua">
          {news.map((item) => (
            <Carousel.Item key={item.id}>
              <div className="text-center"
                style={{
                  backgroundImage: `url(/files/images/news_${item.id}.jpeg)`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `100% 100%`,
                  height: `75vh`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                }}
              >
                <div className="bg-dark bg-opacity-50 text-white slider-footer">
                  <div>
                    <h5>{item.title}</h5>
                    <p>Дата публікації: {new Date(item.date).toLocaleDateString()}</p>
                  </div>
                  <button onClick={() => { location.href = `/news.html?article=${item.id}`;}} className="bg-tria">Докладніше</button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }

export default Index