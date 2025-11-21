
import Nav from '../components/Nav.jsx';
import '../App.css';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <div className="hero-content">
          <h1>Bonjour je suis John Doe</h1>
          <h2 className="lead">Développeur web full stack</h2>
          <a href="#services" className="btn btn-primary custom-cta mt-3">
            En savoir plus
          </a>
        </div>
      </header>

      {/* SECTION A PROPOS ET COMPETENCE */}
      {/* Container avec Ombre */}
      <div className="container mb-5 shadow p-4 rounded mt-5">
        <div className="row">
          
          {/* COLONNE GAUCHE : À propos */}
          <div className="col-12 col-md-6"> 
            
            {/* Titre "À propos" avec ligne courte centrée */}
            <div className="text-center mb-4">
              <h2 className="section-title d-inline-block mb-0">A propos</h2>
              {/* Ligne bleue centrée sous le titre */}
              <div className="mx-auto" style={{  height: '3px', backgroundColor: '#007bff',  }}></div>
            </div>

            <img src="images/jda.jpg" alt="profil" className="img-fluid mt-3" />
            <p className="mt-3">
              « Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in ris…
            </p>
          </div>
          
          {/* COLONNE DROITE : Mes compétences */}
          
          <div className="col-12 col-md-6"> 

            {/* Titre "Mes compétences" avec ligne courte centrée */}
            <div className="text-center mb-4">
              <h2 className="section-title  d-inline-block mb-0">Mes compétences</h2>
              {/* Ligne bleue centrée sous le titre */}
              <div className="mx-auto" style={{ height: '3px', backgroundColor: '#007bff', }}></div>
            </div>
            
            <div className="competences-list">
                
                {/* HTML */}
                <p className="mb-1">HTML5 – 90%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-danger" style={{ width: "90%" }} role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* CSS */}
                <p className="mb-1">CSS3 – 80%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-info" style={{ width: "80%" }} role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* JS */}
                <p className="mb-1">JavaScript – 70%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-warning" style={{ width: "70%" }} role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* PHP */}
                <p className="mb-1">PHP – 60%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-success" style={{ width: "60%" }} role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                {/* React */}
                <p className="mb-1">React – 50%</p>
                <div className="progress mb-3">
                  <div className="progress-bar bg-primary" style={{ width: "50%" }} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>

            </div>
          </div>
          
        </div> {/* Ferme la div.row */}
      </div> {/* Ferme la div.container avec shadow */}

    </>
  );
}
