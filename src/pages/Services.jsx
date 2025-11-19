import React from 'react';
import Footer from '../components/Footer.jsx';
 

function Services() {
  return (
    <>
     
     
     <div>
  <img src="/images/seo.jpg" alt="Bannière de services" className="img-fluid" />
</div>
      <div className="text-center my-5">
        <h1>Mon offre de services</h1>
        <p>Voici les prestations sur lesquelles je peux intervenir</p>
        <hr />
      </div>

      <div className="container my-5 text-center">
        <div className="row">

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <i className="bi bi-pencil display-4 text-primary mb-3"></i>
            <h3>UX Design</h3>
            <p>L'UX Design est une discipline qui consiste à concevoir des produits ergonomiques et adaptés aux utilisateurs.</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <i className="bi bi-code-slash display-4 text-primary mb-3"></i>
            <h3>Développement Web</h3>
            <p>Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation modernes.</p>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <i className="bi bi-search display-4 text-primary mb-3"></i>
            <h3>Référencement (SEO)</h3>
            <p>Le référencement naturel (SEO) est une technique qui permet d'optimiser un site web pour qu'il remonte dans les résultats des moteurs de recherche.</p>
          </div>

        </div>
      </div>

      
    </>
  );
}

export default Services;
