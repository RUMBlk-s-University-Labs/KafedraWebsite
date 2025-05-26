import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import './newsSlider.css'

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
                  <button onClick={() => { location.href = `/news?article=${item.id}`;}} className="bg-tria">
                    Докладніше</button>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }

  export default NewsSlider
  