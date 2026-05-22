import Hero from "../components/Hero";
import "../styles/pages.css";

export default function About() {
  return (
    <section id="about" className="page-section light-section">
      <Hero
        eyebrow="About UVMARK"
        title="Supporting Modern Biopharmaceutical Workflows"
        subtitle="UVMARK works closely with biopharmaceutical research and clinical teams to develop flexible labeling materials and workflow-focused identification solutions for evolving laboratory and clinical environments."
      />

      <div className="content-wrap about-content">
        <h2>How We Work</h2>
        <p>
          UVMARK is built for laboratories and clinical research teams that move quickly,
          test often and require identification solutions that adapt with their workflows.
          We focus on practical labeling performance, clear material selection and responsive
          customization instead of a traditional product-catalog approach.
        </p>
        <p>
          Our work covers laboratory labels, cryogenic storage labels, freezer labels,
          chemical-resistant labels, sterilization labels and workflow-focused identification
          support. We help teams evaluate container type, temperature range, adhesive performance,
          printing method, barcode readability and application environment before recommending a solution.
        </p>

        <div className="two-column">
          <div>
            <h3>What We Support</h3>
            <p>Research labs, biopharmaceutical teams, clinical laboratories, biobanks, IVF/ART labs and cold-chain workflows.</p>
          </div>
          <div>
            <h3>How We Deliver</h3>
            <p>Material selection, sample testing, small-batch customization, fast quotation, technical communication and long-term workflow support.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
