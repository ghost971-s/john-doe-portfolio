import { Link } from 'react-router-dom';
import React from 'react';
import banner from '/images/banner.jpg';

function Portfolio() {
  return (
    <div className="portfolio-page">

      {/* Banner */}
      <img src={banner} alt="banner" className="img-fluid w-100" />

      {/* Titre + texte + trait */}
      <div className="text-center my-4">
        <h1 className="page-title">Portfolio</h1>
        <p className="intro">Voici quelques-unes de mes réalisations</p>
        <hr className="intro-hr" />
      </div>

      {/* Grid des projets */}
      <div className="row">
        
        {/* Colonne 1 : Fresh-food et SEO */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          
          {/* CARTE 1: Fresh-food */}
          {/* La carte contient l'image, le titre et le bouton */}
          <div className="portfolio-card mb-4">
            <img src="/images/portfolio/fresh-food.jpg" className="img-fluid" alt="fresh-food" />
            <div className="card-content"> 
              <p className='projet-title'>Fresh-food</p>
              <p>Site de vente de produits frais en ligne</p>
              <Link to="/details/fresh-food" className="btn btn-primary">Voir le site</Link>
           <p className='projet-des'>Site realise avec PHP et MySQL</p>
          
           
            </div>
          </div>

          {/* CARTE 4: SEO */}
          <div className="portfolio-card">  
            <img src="/images/portfolio/seo.jpg" className='img-fluid' alt='seo' />
            <div className="card-content">
              <p className="projet-title">SEO</p>
              <p>Amelioration du referencement d'un site de e-commerce</p>
              <Link to="/details/SEO" className="btn btn-primary">Voir le site</Link>
            <p className='projet-des'>Utilisation des outils SEO</p>
            </div>
          </div>
        </div>
        
        {/* Colonne 2 : Restaurant Akira et API */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          
          {/* CARTE 2: Restaurant Akira */}
          <div className="portfolio-card mb-4">
            <img src="/images/portfolio/rj.jpg" className="img-fluid" alt="restaurant-japonais" />
            <div className="card-content">
              <p className='projet-title'>Restaurant Akira</p>
              <p>Site de vente de produits frais en ligne</p>
              <Link to="/details/RA" className='btn btn-primary'>Voir le site</Link>
              <p className='projet-des'>Site realise ave WordPress</p>
            </div>
          </div>

          {/* CARTE 5: Création d'une API */}
          <div className="portfolio-card">
            <img src="/images/portfolio/coder.jpg" className='img-fluid' alt='coder' />
            <div className="card-content">
              <p className='projet-title'>Creation d'une API</p>
              <p>Creation d'une API RESTFULL pubique</p>
              <Link to="/details/coder" className="btn btn-primary">Voir le site</Link>
            <p className='projet-des'>PHP-SYMPHONY</p>
            </div>
          </div>
        </div>
        
        {/* Colonne 3 : Espace bien etre et Maquette */}
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          
          {/* CARTE 3: Espace bien etre */}
          <div className="portfolio-card mb-4">
            <img src="/images/portfolio/esb.jpg" className="img-fluid" alt="espace-bien-etre" />
            <div className="card-content">
              <p className='projet-title'>Espace bien etre</p>
              <p>Site de vente de produits frais en ligne</p>
              <Link to="/details/esb" className="btn btn-primary">Voir le site</Link>
              <p className='projet-des'>Site realise avec LARAVEL</p>
            </div>
          </div>

          {/* CARTE 6: Maquette d'un site web */}
          <div className="portfolio-card">
            <img src="/images/portfolio/screens.jpg" className="img-fluid" alt="Maquette d'un site web" />
            <div className="card-content">
              <p className="projet-title">Maquette d'un site web</p> 
              <p>Creation du prototype d'un site</p>
              <Link to="/details/MUS" className="btn btn-primary">Voir le site</Link>
            <p className='projet-des'>Realise avec FIGMA</p>
            </div>
          </div>
        </div>
        
      </div>

    </div>
  );
}

export default Portfolio;