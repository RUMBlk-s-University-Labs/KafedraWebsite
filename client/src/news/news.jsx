import 'bootstrap/dist/css/bootstrap.min.css';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './news.css'
import PageSwitch from '../pageSwitch/pageSwitch.jsx'
import Article from '../article/article.jsx';

function News() {
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const [article, setArticle] = useState(null);

  const reqArticle = searchParams.get("article");  
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = 10;

  useEffect(() => {
    if (!reqArticle) {
      fetch(`/api/news?after=${(page-1)*limit}&limit=${limit}`)
        .then(res => res.json())
        .then(data => setNews(data));

      fetch(`/api/news/len`)
        .then(res => res.json())
        .then(len => setTotalPages(Math.ceil(len / 10)));
    } else {
      fetch(`/api/news/${reqArticle}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch(() => setArticle(
        { title: "Помилка",
          date: Date.now(),
          content: "Новину не знайдено"
        }));
    }
  }, [reqArticle, page]);

  const goToPage = (p) => {
    setSearchParams({ page: p });
  };
  
  if (article == null) {
    document.title = `Новини | Кафедра суспільних наук НУ "Освітній Простір"`;
    return (
      <div>
        <h2 className="text-white bg-unua">Новини</h2>

        <PageSwitch page={page} pages={totalPages} goToPage={goToPage}/>

        <div className="news-grid">
          {news.map((item) => (
            <div key={item.id} className="card pointer" 
              onClick={() => location.href 
                = `/news?article=${item.id}&page=${page}`
              }
            >
              <img src={`/files/images/news_${item.id}.jpeg`}
                alt={item.title}
                onError={(e) => {e.target.src = '/files/logo.png'}}
              />
              <div className="card-body bg-unua text-white shadow">
                <h5 className="card-title">{item.title}</h5>
              </div>
              <h6 className='card-footer bg-dua text-white'>
                Дата публікації: {new Date(item.date).toLocaleDateString()}
              </h6>
            </div>
          ))}
        </div>

        <PageSwitch page={page} pages={totalPages} goToPage={goToPage}/>
      </div>
    );
  } else {
    return (
      <Article id={article.id} date={article.date} title={article.title} content={article.content} page={page}/>
    );
  }
}

export default News
