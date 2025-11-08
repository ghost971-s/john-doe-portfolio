import { useState } from 'react'
import './App.css'
import Footer from './Footer.jsx'
function App() {


  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">John Doe</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Services</a>
              <a className="nav-link" href="#">Portfolio</a>
              <a className="nav-link" href="#">Contact</a>
              <a className="nav-link" href="#">Mentions legales</a>
            </div>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web fullstack</h2>
          <button className="btn btn-primary mt-3" id="btn">En savoir plus</button>
        </div>
      </header>
    
          <section className="container my-5">
           <div className="row">
            <div className=" col-12 col-md-8 col-lg-6">
            <div className="section-title">
              <h2>A propos</h2>
              </div>
              
              <img src="/public/images/jda.jpg" alt="john doe" className="img-fluid mb-3"></img>
              <p>  Passionné par le développement web, je conçois des sites modernes et
        performants. Je maîtrise les technologies front-end et back-end, et
        j’aime relever de nouveaux défis techniques.</p>
        <p>
          
        Mon objectif est de créer des expériences utilisateurs fluides et
        esthétiques, tout en garantissant des performances optimales.
        </p>
            </div>
      
            <div className="col-12 col-md-8 col-lg-6 ">
            <div className="section-title">
            <h2>Mes competences</h2>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar bg-danger" style={{width:"90%"}}>HTML5 90%</div>
                </div>
                <div className="progress mb-3">
        <div className="progress-bar bg-info" style={{ width: "80%" }}>
          CSS3 80%
        </div>
      </div>
      <div className="progress mb-3">
        <div className="progress-bar bg-warning" style={{ width: "70%" }}>
          JavaScript 70%
        </div> 
          </div>
          
      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{ width: "60%" }}>
          PHP 60%
        </div>
      </div>
      
      <div className="progress mb-3">
        <div className="progress-bar bg-primary" style={{ width: "50%" }}>
          React 50%
        </div>
      </div>
     </div></div>
      </section>
     <div>

  
     <footer className ="my-4 text-white bg-dark py-4"id='foot'>
            <div className="container">
            <div className="row text-center text-md-start">
                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
                <h5>John Doe</h5>
                <p>
                    40 rue Laure Diebold, 69009 Lyon, France<br />
                    10 20 30 40 50<br />
                    john.doe@gmail.com
                </p>
                <h6>Suivez-moi</h6>
                <div className="d-flex gap-3" id="rss">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook  fs-4"></i>
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-twitter  fs-4"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin 
        fs-4"></i>
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram fs-4"></i>
    </a>
    </div>
        </div>
    
    
    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
        <h5><a href="#" target="_blank" rel="noopener noreferrer">Liens utiles</a></h5>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Acceuil</a></h6>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Services</a></h6>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Portfolio</a></h6>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Me contacte</a></h6>            
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Mentions legales</a></h6>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
        <h5><a href="#" target="_blank" rel="noopener noreferrer">Mes dernieres realisations</a></h5>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Fresh food</a></h6>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Restaurant Akira</a></h6>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Espace bien-etre</a></h6>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">SEO</a></h6>
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Creation d'une API</a></h6>   
        <h6><a href="#" target="_blank" rel="noopener noreferrer">Maquette d'un site</a></h6>         
    </div>
    </div>
    </div>
    </footer>

     </div>
      
      
   
 
   </>
      );

}

export default App;