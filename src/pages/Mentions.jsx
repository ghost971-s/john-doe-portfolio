        import { Helmet } from 'react-helmet-async';    
                function Mentions () {

                    return (
                        <>
                        {/* Étape Clé : Ajout de la balise noindex via Helmet */}
                    <Helmet>
                        <meta name="robots" content="noindex, nofollow" />
                    </Helmet>
                            {/* Conteneur principal et Titre */}
                                    <div className="container my-5 text-center">
                                        <h1>Mentions légales</h1>
                                        {/* Ligne bleue personnalisée sous le titre principal */}
                                        <div className="mx-auto" style={{ width: '400px', height: '5px', backgroundColor: '#007bff', marginBottom: '40px' }}></div>
                                    </div>
                        
                                    {/* Début de l'Accordéon (Conteneur des sections cliquables) */}
                                    <div className="container mb-5">
                                        <div className="accordion" id="mentionsAccordion">
                        
                                            {/* Section 1 : Éditeur du site */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingOne">
                                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                        Éditeur du site
                                                    </button>
                                                </h2>
                                               </div><div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#mentionsAccordion">
                                                    <div className="accordion-body bg-light"> 
                                                        <ul className="list-unstyled">
                                                            <li><strong>John Doe</strong></li>
                                                            <li><i className="bi bi-geo-alt-fill me-2"></i> 40 rue Laure Diebold</li>
                                                            <li><i className="bi bi-geo-alt-fill me-2"></i> 69009 Lyon, France</li>
                                                            <li><i className="bi bi-telephone-fill me-2"></i> 10 20 30 40 50</li>
                                                            <li><i className="bi bi-envelope-fill me-2"></i> john.doe@gmail.com</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            
                                            {/* Section 2 : Hébergeur */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingTwo">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                        Hébergeur
                                                    </button>
                                                </h2>
                                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#mentionsAccordion">
                                                    <div className="accordion-body">
                                                        Nom de l'hébergeur : [Nom de votre hébergeur]<br/>
                                                        Adresse : [Adresse de l'hébergeur]
                                                    </div>
                                                </div>
                                            </div>
                        
                                            {/* Section 3 : Crédits */}
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingThree">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                        Crédits
                                                    </button>
                                                    </h2>
                                                    
        {/* Pas de classe 'show', donc elle s'ouvre au clic */}
        <div id="collapseThree" className="accordion-collapse collapse show bg-opacity-10" aria-labelledby="headingThree" data-bs-parent="#mentionsAccordion">
            <div className="accordion-body "> 
            <h2 className='fw-bold'>Crédits</h2>
                Ce site a été réalisé par John Doe, étudiant au 
                 <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation</a>.
                <br/><br/>
                Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site 
                <a href="https://pixabay.com/" target="_blank" rel="noopener noreferrer">Pixabay</a>.           
                <br/><br/>
                La favicon de ce site a été fournie par 
                <a href="https://www.flaticon.com/fr/icones-gratuites/john-doe" title="john doe icônes" target="_blank" rel="noopener noreferrer">John doe icons erstellt von Freepik - Flaticon</a>.
            </div>
        </div>
                                                    </div>
                                                                                    
                                            
                                            
                                            
                                        </div>
                                    </div>
                                </>
                            );   
                }
                export default Mentions;