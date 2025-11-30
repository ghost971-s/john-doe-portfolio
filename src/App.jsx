import React from 'react';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Services from './pages/Services.jsx';      
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx'; 
import Contact from './pages/contact.jsx';
import Mentions from './pages/Mentions.jsx';
function App() {
  return (
   
  

    
<div>
      <Nav />

       <Routes>   
           {/* Routes définies (Home, Services, Portfolio) */}
           <Route path="/" element={<Home />} />
           <Route path="/services" element={<Services />} />       
           <Route path="/portfolio" element={<Portfolio />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/mentions" element={<Mentions />} />    
           {/* Route pour gérer les pages 404 non trouvées */}
           <Route path="*" element={<div>404 Page Not Found</div>} />
         </Routes> 
   
      {/* Footer global */}
      <Footer />      
      </div>

)  
}

export default App;
