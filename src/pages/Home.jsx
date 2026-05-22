import "../styles/Home.css";

export default function Home() {
  return (
    <main className="home-page">

      <section className="hero-section">
        <h1>
          Flexible Labeling Solutions for Modern
          Biopharmaceutical and Clinical Workflows
        </h1>
      </section>

      <section className="why-section">
        <h2>Why UVMARK?</h2>

        <div className="why-grid">

          <div className="why-card">
            <div className="icon">◻</div>
            <h3>Agile Small-Batch Support</h3>
            <p>
              Supporting evolving laboratory operations,
              pilot projects, and specialized workflow requirements.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">◷</div>
            <h3>7×24 Responsive Collaboration</h3>
            <p>
              Fast-response communication across technical,
              operational, and regional teams.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">⌘</div>
            <h3>Digital Workflow Visibility</h3>
            <p>
              Supporting clearer identification, workflow coordination,
              and traceability from request to delivery.
            </p>
          </div>

        </div>
      </section>

      <section className="focus-section">
        <h2>What We Focus On</h2>

        <div className="focus-grid">
          <div className="focus-item">Labels</div>
          <div className="focus-item">Printers & Scanners</div>
          <div className="focus-item">Software</div>
          <div className="focus-item">Label Design</div>
          <div className="focus-item">Pre-Printed Labels</div>
          <div className="focus-item">Pre-Labelling Labware</div>
        </div>
      </section>
<section className="cta-section">
  <h2>Let’s Get Labelling.</h2>

  <p>
    Contact our team to discuss laboratory identification,
    workflow coordination, and application-focused solutions
    for biopharmaceutical and clinical environments.
  </p>

  <a className="cta-button" href="/contact">
    Contact Us
  </a>
</section>
    </main>
  );
}
