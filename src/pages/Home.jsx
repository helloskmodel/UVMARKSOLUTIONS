import Hero from "../components/Hero";
import "../styles/pages.css";

export default function Home() {
  return (
    <main id="home" className="page-section home-section">
      <Hero
        eyebrow="Modern Biotech Workflow Support"
        title="Flexible Labeling Solutions for Fast-Moving Laboratories and Clinical Research"
        subtitle="Agile labeling and identification support for modern biotech workflows."
      />

      <div className="intro-grid">
        <div className="intro-card">
          <h3>Flexible Labeling</h3>
          <p>Small-batch, workflow-focused labeling support for changing laboratory needs.</p>
        </div>
        <div className="intro-card">
          <h3>Critical Conditions</h3>
          <p>Cryogenic, freezer, chemical-resistant and sterilization-ready label options.</p>
        </div>
        <div className="intro-card">
          <h3>Fast Response</h3>
          <p>US and China team coverage for faster communication, sampling and follow-up.</p>
        </div>
      </div>
    </main>
  );
}
