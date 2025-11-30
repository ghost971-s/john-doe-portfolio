import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { HelmetProvider } from 'react-helmet-async';


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <HelmetProvider>    {/*pour component Mentions  pour ne pas etre indexe */}
   <BrowserRouter>
  <App />
  </BrowserRouter>
  </HelmetProvider>
  </StrictMode>,
  
)
