export default function Competences() {
  return (
    <div className="container py-5 text-center">
      <div className="col-12 col-md-8 col-lg-6 mx-auto">
        <div className="section-title mb-4">
          <h2>Mes compétences</h2>
          <hr className="my-2 separateur-bleu" />
        </div>

        {/* HTML */}
        <div className="progress mb-3">
          <div className="progress-bar bg-danger" style={{ width: "90%" }}>
            HTML5 – 90%
          </div>
        </div>

        {/* CSS */}
        <div className="progress mb-3">
          <div className="progress-bar bg-info" style={{ width: "80%" }}>
            CSS3 – 80%
          </div>
        </div>

        {/* JS */}
        <div className="progress mb-3">
          <div className="progress-bar bg-warning" style={{ width: "70%" }}>
            JavaScript – 70%
          </div>
        </div>

        {/* PHP */}
        <div className="progress mb-3">
          <div className="progress-bar bg-success" style={{ width: "60%" }}>
            PHP – 60%
          </div>
        </div>

        {/* React */}
        <div className="progress mb-3">
          <div className="progress-bar bg-primary" style={{ width: "50%" }}>
            React – 50%
          </div>
        </div>
      </div>
    </div>
  );
}
