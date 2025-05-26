import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Body from './body/body.jsx'
import Index from './index/index.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Body>
        <Index />
      </Body>
    </BrowserRouter>
  </StrictMode>,
)
