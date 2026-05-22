import "../styles/About.css";

export default function About() {
  return (
    <section className="about-page">
      <h2>About UVMARK</h2>

      <p className="about-intro">
        UVMARK supports modern biopharmaceutical, clinical,
        and laboratory environments with application-focused
        labeling and identification solutions.
      </p>

      <div className="about-grid">

        <div className="about-card">
          <h3>Collaborative Solution Development</h3>
        </div>

        <div className="about-card">
          <h3>Advanced Label Materials</h3>
        </div>

        <div className="about-card">
          <h3>Customer-Centered Agile Support</h3>
        </div>

        <div className="about-card">
          <h3>Workflow-Focused Execution</h3>
        </div>

      </div>
    </section>
  );
}
