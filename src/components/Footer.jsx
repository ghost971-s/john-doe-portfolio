import React from 'react';
import { Link } from 'react-router-dom'; //  NÉCESSAIRE pour la navigation interne
import { BrowserRouter, Routes, Route } from 'react-router-dom';  
  
  function Footer () {

    return ( 

        <footer className ="my-4 text-white bg-dark py-4" id='foot'>
        <div className="container">
            <div className="row text-start text-md-center">
                
                {/* COLONNE 1 : John Doe & Réseaux Sociaux */}
                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
                    <h5>John Doe</h5>
                    <p>
                        40 rue Laure Diebold, 69009 Lyon, France<br />
                        {/* Lien téléphone cliquable */}
                        <a href="tel:+33102030405" className="text-white text-decoration-none">01 23 45 67 89</a><br />
                        {/* Lien email cliquable */}
                        <a href="mailto:john.doe@gmail.com" className="text-white text-decoration-none">john.doe@gmail.com</a>
                    </p>
                    <h6>Suivez-moi</h6>
                
                    <div className="d-flex gap-3 justify-content-start justify-content-md-center" id="rss">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook fs-4"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter fs-4"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin fs-4"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram fs-4"></i>
                        </a>
                    </div>
                </div>
            
                {/* COLONNE 2 : Liens utiles (Routes internes) */}
                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
                    <h5>Liens utiles</h5>
                    
                    {/* -------------------- UTILISATION DE <Link> -------------------- */}
                    {/* Accueil */}
                    <h6 className="mt-3"><Link to="/" className="text-white text-decoration-none">Accueil</Link></h6>
                    {/* Services */}
                    <h6><Link to="/services" className="text-white text-decoration-none">Services</Link></h6>
                    {/* Portfolio */}
                    <h6><Link to="/portfolio" className="text-white text-decoration-none">Portfolio</Link></h6>
                    {/* Contact }*/}
                    <h6><Link to="/contact" className="text-white text-decoration-none">Me contacter</Link></h6>            
                    {/* Mentions Légales (corrigé) */}
                    <h6><Link to="/mentions" className="text-white text-decoration-none">Mentions légales</Link></h6>
                    {/* ----------------------------------------------------------------- */}
                </div>

                {/* COLONNE 3 : Mes dernières réalisations (Routes internes vers le portfolio) */}
                <div className="col-12 col-md-6 col-lg-4 mb-4 mb-md-0">
                    <h5>Mes dernières réalisations</h5>
                    <h6 className="mt-3"><Link to="/Portfolio" className="text-white text-decoration-none">Fresh food</Link></h6>
                    <h6><Link to="/portfolio" className="text-white text-decoration-none">Restaurant Akira</Link></h6>
                    <h6><Link to="/portfolio" className="text-white text-decoration-none">Espace bien-être</Link></h6>
                    <h6><Link to="/portfolio" className="text-white text-decoration-none">SEO</Link></h6>
                    <h6><Link to="/portfolio" className="text-white text-decoration-none">Création d'une API</Link></h6>   
                    <h6><Link to="/portfolio" className="text-white text-decoration-none">Maquette d'un site</Link></h6>         
                </div>

            </div>
        </div>
    </footer>   
     )
    }
    export default Footer; 