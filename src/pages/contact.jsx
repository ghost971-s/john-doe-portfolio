import { IDLE_BLOCKER } from "react-router-dom";

export default function Contact () {
return (
    <>
<div className="container my-5">
    <h1 className="text-center"> Contact</h1>
<p className="section-inf">Pour me contacter en vue d'un entretien ou d'une futre collaboration, merci de remplir le formulaire de contact</p>
<div className="lilbleu-line"></div>
</div>
<div className="container mb-5 shadow p-4 rounded">
<div className="row">
    <div className="col-12 col-md-6 col-lg-6">
    <div className="section-formulaire">
        < h2 className="title-linef">Formulaire de contact</h2>

<form action="#" method="POST">
    {/* 1. Nom */}
    <div className="mb-3">
        {/* <label htmlFor="nom" className="form-label">Votre nom</label> ⬅️ On retire le label */}
        <input 
            type="text" 
            className="form-control" 
            id="nom" 
            name="nom" 
            placeholder="Votre nom" // 💡 AJOUT DU PLACEHOLDER
            required 
        />
    </div>

    {/* 2. Adresse Email */}
    <div className="mb-3">
        
        <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            placeholder="Votre adresse email" // 💡 AJOUT DU PLACEHOLDER
            required 
        />
    </div>

    {/* 3. Numéro de Téléphone */}
    <div className="mb-3">
        
        <input 
            type="tel" 
            className="form-control" 
            id="telephone" 
            name="telephone" 
            placeholder="Votre numéro de téléphone" 
        />
    </div>
    
    {/* 4. Sujet */}
    <div className="mb-3">
        <input 
            type="text" 
            className="form-control" 
            id="sujet" 
            name="sujet" 
            placeholder="Sujet" 
            required 
        />
    </div>

    {/* 5. Votre message (Zone de texte) */}
    <div className="mb-4">
        <textarea 
            className="form-control" 
            id="message" 
            name="message" 
            rows="12" 
            placeholder="Votre message" 
            required
        ></textarea>
    </div>

    {/* Bouton d'Envoi */}
    <div className="text-center">
        <button type="submit" className="btn btn-primary">
            Envoyer
        </button>
    </div>
</form>
        </div>
    </div>
    <div className="col-12 col-md-6 col-lg-6">
        <h2 className="title-linec">Mes coordonnes</h2>
          <h4>John Doe</h4>
          <div className="contact-details">
    
    {/* Conteneur Flexbox pour les détails */}
    <ul className="list-unstyled">
        
        {/* Ligne 1 : Nom/Titre */}
        <li className="d-flex align-items-center mb-0">
            <i className="bi bi-person-fill text-primary me-3 fs-5"></i> {/* Icône Personne */}
            <span>John Doe</span>
        </li>

        {/* Ligne 2 : Adresse (Localisation) */}
        <li className="d-flex align-items-center mb-0">
            <i className="bi bi-geo-alt-fill text-primary me-3 fs-5"></i> {/* Icône Localisation */}
            <span>69 rue Laim Debed <br/> 69009 Lyon, France</span>
        </li>

        {/* Ligne 3 : Téléphone */}
        <li className="d-flex align-items-center mb-0">
            <i className="bi bi-telephone-fill text-primary me-3 fs-5"></i> {/* Icône Téléphone */}
            <span>10 20 30 40 50</span>
        </li>
        
        {/* Ligne 4 : Email */}
        <li className="d-flex align-items-center mb-0">
            <i className="bi bi-envelope-fill text-primary me-3 fs-5"></i> {/* Icône Email */}
            <span>john.doe@gmail.com</span>
        </li>
        
    </ul>
    <img src="/images/adr.jpg" alt="adresse Laure Diebold" className="img-fluid mt-3" />
</div>
    </div>
    </div>
    </div>    
        
    
</>
)
}
