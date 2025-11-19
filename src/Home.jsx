export default function Home() {
    return (
      <>
        {/* HERO */}
        <header className="hero">
          <div className="hero-content">
            <h1>Bienvenue sur mon portfolio</h1>
            <p className="lead">
              Développeur web spécialisé en React, JavaScript et intégration moderne.
            </p>
  
            <a href="#services" className="btn btn-primary custom-cta mt-3">
              Découvrir mes services
            </a>
          </div>
        </header>
  
        {/* SECTION A PROPOS */}
        <section className="container py-5">
          <h2 className="section-title">À propos</h2>
          <p>
            Passionné par le développement web, je crée des interfaces modernes,
            rapides et entièrement responsives.
          </p>
  
          <hr className="separateur-bleu" />
  
          <p>
            Je travaille avec React, Node.js, HTML, CSS, Bootstrap et Tailwind.
          </p>
        </section>
      </>
    );
  }