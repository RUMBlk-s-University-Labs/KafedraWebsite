import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './body.css'

function Body({children}) {
  return (
    <div className="d-flex flex-column min-vh-100 m-0">
      <header className="bg-unua margin fixed-top">
        <img src="/files/logo.png" className="logo pointer" alt="Logo" onClick={() => location.href="/"} />
        <div className="d-flex flex-column">
          <h1 className="text-white logo-title">Кафедра суспільних наук НУ "Освітній Простір"</h1>
          <nav className="bg-dua navbar navbar-expand-lg navbar-light bg-unua">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <a className="nav-link active text-white" aria-current="page" href="/#about">Про сайт</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="gallery">Галерея картинок</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="news?page=1">Новини</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="contacts">Контакти</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

        </div>
      </header>
      <main className='margin d-flex'>
        {children}
      </main>
      <footer className="bg-unua text-white py-1 mt-auto text-center margin">© 2025 Кафедра суспільних наук НУ "Освітній Простір"</footer>
    </div>
  )
}

export default Body
