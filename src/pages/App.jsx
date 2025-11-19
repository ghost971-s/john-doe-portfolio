import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Services from './pages/Services.jsx';
import Competence from './pages/Competence.jsx';
import Home from './pages/Home.jsx';
import Portfolio from './pages/Portfolio.jsx';
import '../App.css';
function App() {
  return (
  

    <BrowserRouter>


    <Nav />

   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        { <Route path="/portfolio" element={<Portfolio />}/> }
      </Routes>

      {/* Footer global */}
      <Footer />
    </BrowserRouter>
)  
}

export default App;
