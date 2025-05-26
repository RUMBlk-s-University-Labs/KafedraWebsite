import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Body from './Body.jsx'
import Index from './index.jsx'
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
