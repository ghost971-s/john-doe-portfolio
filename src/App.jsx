import { useState } from 'react'
import './App.css'

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
          <button className="btn btn-primary mt-3">En savoir plus</button>
        </div>
      </header>
      <body>
        <main>
          <section className="container my-5">
           <div className="row">
            <div className=" col-md-6">
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
      
            <div className="col-md-6 text-center">
            < div className="section-title">
            <h2>Mes competences</h2>
              </div> 
          </div>
</div>

          </section>
        </main>
      </body>
    </>
  );
}

export default App;