import "../styles/About.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <h1>Built Around Laboratory Workflow Needs</h1>

        <p className="about-intro">
          UVMARK works closely with biopharmaceutical and clinical laboratory
          teams to develop flexible identification workflows supported by
          advanced labeling materials, application expertise, and coordinated
          operational support.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Close Customer Collaboration</h3>

          <p>
            We work closely with laboratory and operational teams to understand
            workflow requirements, environmental conditions, and evolving
            identification needs.
          </p>
        </div>

        <div className="about-card">
          <h3>Advanced Label Materials</h3>

          <p>
            We collaborate with leading material and technology partners to
            support demanding laboratory, clinical, and automation-ready
            applications.
          </p>
        </div>

        <div className="about-card">
          <h3>Workflow-Focused Coordination</h3>

          <p>
            Cross-functional coordination across technical support, production,
            logistics, and customer service helps maintain responsive project
            execution and communication visibility.
          </p>
        </div>
      </div>
    </section>
  );
}
