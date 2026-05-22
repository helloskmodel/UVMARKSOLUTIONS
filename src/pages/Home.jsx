import "../styles/Home.css";

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const company = form.get("company");
    const email = form.get("email");
    const need = form.get("need");

    const subject = encodeURIComponent("UVMARK Website Enquiry");
    const body = encodeURIComponent(
      `Company Name: ${company}\nEmail Address: ${email}\n\nWhat do you need?\n${need}`
    );

    window.location.href = `mailto:support@uvmarksolutions.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-text">
          <h1>
            Flexible Labeling Solutions
            <br />
            for Fast-Moving Laboratories
          </h1>

          <p>
            Supporting biopharmaceutical research, clinical diagnostics, and
            transfusion workflows.
          </p>

          <a href="#contact" className="home-button">
            Contact Us
          </a>
        </div>

        <div className="home-hero-image">
          <img src="/home-hero-lab.png" alt="Future laboratory automation" />
        </div>
      </section>

      <section className="home-section">
        <h2>Why UVMARK?</h2>

        <div className="why-grid">
          <div className="why-card">
            <div className="why-icon">↻</div>
            <h3>Agile Small-Batch Flexibility</h3>
            <p>Flexible coordination for rapidly evolving laboratory operations.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">⚡</div>
            <h3>7×24 Responsive Collaboration</h3>
            <p>Fast-response communication across technical and operational teams.</p>
          </div>

          <div className="why-card">
            <div className="why-icon">⌁</div>
            <h3>Digital Workflow Visibility</h3>
            <p>Shared workflow communication from request to delivery.</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Products & Services</h2>

        <div className="ps-grid">
          <div className="ps-panel">
            <div className="ps-label">Products</div>

            <div className="ps-items">
              <div className="ps-item">
                <div className="ps-icon label-icon"></div>
                <span>Labels</span>
              </div>

              <div className="ps-item">
                <div className="ps-icon printer-icon"></div>
                <span>Printers & Scanners</span>
              </div>

              <div className="ps-item">
                <div className="ps-icon software-icon"></div>
                <span>Software</span>
              </div>
            </div>
          </div>

          <div className="ps-panel">
            <div className="ps-label">Services</div>

            <div className="ps-items">
              <div className="ps-item">
                <div className="ps-icon design-icon"></div>
                <span>Label Design</span>
              </div>

              <div className="ps-item">
                <div className="ps-icon preprint-icon"></div>
                <span>Pre-Printed Labels</span>
              </div>

              <div className="ps-item">
                <div className="ps-icon labware-icon"></div>
                <span>Pre-Labelling Labware</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact" id="contact">
        <div className="contact-copy">
          <h2>Let’s Get Labelling.</h2>
          <p>
            Contact our team to discuss laboratory identification, workflow
            coordination, and application-focused solutions for biopharmaceutical
            and clinical environments.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Company Name</label>
          <input name="company" required placeholder="Your company" />

          <label>Email Address</label>
          <input name="email" type="email" required placeholder="name@company.com" />

          <label>What do you need?</label>
          <textarea
            name="need"
            required
            placeholder="Tell us about your application, workflow, or identification need."
          />

          <button type="submit">Contact Us</button>
        </form>
      </section>
    </main>
  );
}
