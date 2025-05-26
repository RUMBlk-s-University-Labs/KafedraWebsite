import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../main.css'
import './gallery.css'
import Body from '../body/body.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PageSwitch from '../pageSwitch/pageSwitch.jsx'

function Gallery() {
    const [searchParams, setSearchParams] = useSearchParams();
    const page = parseInt(searchParams.get("page")) || 1;
    const goToPage = (p) => {
        setSearchParams({ page: p });
    };

    const [images, setImages] = useState([]);
    const [modalImage, setModalImage] = useState(null);
    const limit = 20;
  
    useEffect(() => {
      fetch("/api/gallery")
        .then(res => res.json())
        .then(data => setImages(data));
    }, []);
  
    const totalPages = Math.ceil(images.length / limit);
    const currentImages = images.slice((page - 1) * limit, page * limit);
  
    return (
      <div>
        <h2 className="text-white bg-unua">Галерея</h2>
        <PageSwitch page={page} pages={totalPages} goToPage={goToPage} />
        <div className="gallery-grid">
          {currentImages.map((src, i) => (
            <div key={i}>
              <div className="card pointer" onClick={() => setModalImage(src)} data-bs-toggle="modal" data-bs-target="#imageModal">
                <img src={src}/>
              </div>
            </div>
          ))}
        </div>
        <PageSwitch page={page} pages={totalPages} goToPage={goToPage} />
  
        <div className="modal fade" id="imageModal">
          <div className="modal-dialog modal-dialog-centered modal-sm modal-md modal-lg modal-xl modal-xxl">
            <div className="modal-content bg-unua rounded-0">
              <div className="modal-body text-center">
                {modalImage && <img src={modalImage} className="img-fluid" />}
              </div>
              <div className="modal-footer justify-content-center">
                <button type="button" className="btn bg-tria" data-bs-dismiss="modal">Закрити</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Body>
                <Gallery/>
            </Body>
        </BrowserRouter>
    </StrictMode>,
)