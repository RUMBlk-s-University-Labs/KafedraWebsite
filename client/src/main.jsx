import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Body from './body/body.jsx'
import Index from './index/index.jsx'
import Gallery from './gallery/gallery.jsx'
import News from './news/news.jsx'
import Contacts from './contacts/contacts.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Body>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Body>
    </BrowserRouter>
  </StrictMode>
)
