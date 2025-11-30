import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav.jsx';
import '../App.css';

export default function Home() {
  // ÉTAT pour stocker les données GitHub et l'état de chargement
  const [githubData, setGithubData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // EFFET pour récupérer les données une seule fois au chargement du composant
  useEffect(() => {
      const fetchGithubData = async () => {
          try {
              const response = await fetch('https://api.github.com/users/github-john-doe');
              
              if (!response.ok) {
                  throw new Error(`Erreur HTTP: ${response.status}`);
              }
              
              const data = await response.json();
              setGithubData(data);
              
          } catch (err) {
              console.error("Erreur de récupération GitHub:", err);
              setError(err.message);
          } finally {
              setIsLoading(false);
          }
      };

      fetchGithubData();
  }, []); 

  // Gestion de l'affichage pendant le chargement
  if (isLoading) {
      return <div className="text-center my-5">Chargement du profil GitHub...</div>;
  }

  // Gestion de l'affichage en cas d'erreur
  if (error || !githubData) {
      return (
          <div className="text-center my-5 text-danger">
              Erreur: {error || "Impossible de charger les données GitHub."}
          </div>
      );
  }

  // Rendu principal
  return (

    <>
      {/* HERO */}
      <header className="hero">
          <div className="hero-content">  
          <h1>Bonjour je suis John Doe</h1>
          <h2 className="lead">Développeur web full stack</h2>
          <button 
                type="button" 
                className="btn btn-primary custom-cta mt-3" 
                data-bs-toggle="modal" 
                data-bs-target="#githubModal"
            > En savoir plus
          </button>
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
{/* FENÊTRE MODALE GITHUB */}
<div className="modal fade" id="githubModal" tabIndex="-1" aria-labelledby="githubModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        
                        {/* En-tête de la modale */}
                        <div className="modal-header">
                            <h5 className="modal-title" id="githubModalLabel">
                                Profil GitHub de {githubData.name || githubData.login}
                            </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        
                        {/* Corps de la modale */}
                        <div className="modal-body text-center">
                            <img 
                                src={githubData.avatar_url} 
                                alt="Avatar GitHub" 
                                className="img-fluid rounded-circle mb-3" 
                                style={{ width: '150px', height: '150px' }} 
                            />
                            <h4 className="fw-bold">{githubData.name || githubData.login}</h4>
                            <p className="text-muted">{githubData.bio || "Pas de biographie disponible."}</p>
                            
                            <hr/>
                            
                            <ul className="list-unstyled">
                                <li>
                                    <i className="bi bi-geo-alt-fill me-2"></i> 
                                    Localisation : {githubData.location || 'Non spécifiée'}
                                </li>
                                <li>
                                    <i className="bi bi-person-fill me-2"></i> 
                                    Followers : {githubData.followers}
                                </li>
                                <li>
                                    <i className="bi bi-journal-code me-2"></i> 
                                    Dépôts publics : {githubData.public_repos}
                                </li>
                            </ul>

                            <a 
                                href={githubData.html_url} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn btn-dark mt-3"
                            >
                                Voir le profil complet sur GitHub
                            </a>
                        </div>
                        
                        {/* Pied de la modale */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
                </div>
    </>
  );
}
