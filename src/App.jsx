
import './App.css'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import Competences from './Competence.jsx'
function App() {


  return (
    <>
  <Nav/>
        <header className="hero">
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur web fullstack</h2>
          <button className="btn btn-primary mt-3" id="btn">En savoir plus</button>
        </div>
      </header>
    
          <section className="container my-5">
           <div className="row">
            <div className=" col-12 col-md-8 col-lg-6">
            <div className="section-title">
              <h2>A propos</h2>
              <hr className="my-2 separateur-bleu" />
              </div>
              
              <img src="/public/images/jda.jpg" alt="john doe" className="img-fluid mb-3"></img>
              <p>  Passionné par le développement web, je conçois des sites modernes et
        performants. Je maîtrise les technologies front-end et back-end, et
        j’aime relever de nouveaux défis techniques.</p>
        <p>
          
        Mon objectif est de créer des expériences utilisateurs fluides et
        esthétiques, tout en garantissant des performances optimales.
        </p>
            </div>
            
      <Competences />
      
     </div>
      </section>

  
     
    <Footer/>

    
      
 </> 
        );

}

export default App;