
import Competence from "./Competence";
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
            En savoir plus
          </a>
        </div>
      </header>

      {/* SECTION A PROPOS ET COMPETENCE */}
      <div className="container my-5">
        <div className="row">
         
          {/* À propos */}
          <div className="col-12 col-md-6 col-lg-6 mx-auto ">
            <h2 className="section-title">À propos</h2>
            <hr className="separateur-bleu" />
            <img src="images/jda.jpg" alt="profil" className="img-fluid mt-3" />
            <p>« Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in ris…</p>
            
          </div>
                      {/* Compétence */}
          <div className="col-12 col-md-6 col-lg-6 mx-auto">
            <Competence />
          

          </div>
        

        </div>
      </div>
    </>
  );
}