import Hero from "../components/Hero";
import "../styles/pages.css";

export default function Services() {
  return (
    <section id="services" className="page-section light-section">
      <Hero
        eyebrow="Services & Support"
        title="Flexible Customization, Fast Response and Application-Focused Support"
        subtitle="We support small-batch customization, sample testing, material selection and labeling workflow improvement for fast-moving research and clinical teams."
      />

      <div className="content-wrap service-list">
        <div>
          <span>01</span>
          <h3>Application Review</h3>
          <p>We review container, temperature, surface, chemical exposure, printer and barcode needs.</p>
        </div>
        <div>
          <span>02</span>
          <h3>Material Matching</h3>
          <p>We help match face stock, adhesive and ribbon to the actual laboratory environment.</p>
        </div>
        <div>
          <span>03</span>
          <h3>Customization</h3>
          <p>We support flexible size, layout, color coding, roll format and small-batch customization.</p>
        </div>
      </div>
    </section>
  );
}
