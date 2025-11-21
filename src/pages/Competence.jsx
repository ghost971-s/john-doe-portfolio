import Competence from "../Competence";
import Nav from '../components/Nav.jsx';
import '../App.css';

export default function Home() {
    return (
      <>
        

        {/* HERO */}
        <header className="hero">
          <div className="hero-content">
            <h1>Bonjour je suis John Doe</h1>
            <h2 className="lead">
              Développeur web full stack
            </h2>
            <a href="#services" className="btn btn-primary custom-cta mt-3">
              Découvrir mes services
            </a>
          </div>
        </header>

        {/* SECTION A PROPOS ET COMPETENCE */}
        <div className="container my-5">
          <div className="row">
            {/* Colonne gauche : À propos */}
            <div className="col-md-6 col-12 col-md-6 col-lg-6 mx auto">
              <h2 className="section-title">À propos</h2>
              <hr className="separateur-bleu" />
              <p>
                Je travaille avec React, Node.js, HTML, CSS, Bootstrap et Tailwind.
              </p>
            </div>
 
            {/* Colonne droite : Compétence */}
            <div className="col-12 col-md-6 col-lg-6 mx auto">
              <Competence />
            </div>
          </div>
        </div>
      </>
    );
} 