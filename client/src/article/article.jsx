import '../main.css'
import './article.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function Article({id, date, title, content, page=1}) {
  const [showImage, setShowImage] = useState(true);
  document.title = `${title} | Кафедра суспільних наук НУ "Освітній Простір"`;
  return (
    <div>
      <div className="article message-container bg-tria" id={`news_${id}`}>
          <h4 className='title text-white bg-unua'>{title}</h4>
          <h6 className='text-white bg-dua date'>Дата публікації: {new Date(date).toLocaleDateString()}</h6>
          {showImage && (
            <div className="imgbox">
              <img
                src={`/files/images/news_${id}.jpeg`}
                alt={title}
                onError={() => setShowImage(false)}
              />
            </div>
          )}
          <p>{content}</p>
      </div>
      <div className='control-center'>
        <button className='bg-unua text-white' onClick={() => location.href = `news?page=${page}`}>Більше новин</button>
      </div>
    </div>
  )
}

export default Article