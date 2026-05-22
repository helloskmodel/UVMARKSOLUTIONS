import Hero from "../components/Hero";
import "../styles/pages.css";

export default function Products() {
  return (
    <section id="products" className="page-section">
      <Hero
        eyebrow="Products & Materials"
        title="Labeling Materials Built for Critical Laboratory Conditions"
        subtitle="From cryogenic storage to chemical exposure, UVMARK helps laboratories match labels, adhesives and printing workflows to real operating conditions."
      />

      <div className="content-wrap card-grid">
        <article className="info-card">
          <h3>Cryogenic Labels</h3>
          <p>For liquid nitrogen, vapor-phase storage, cryo vials, tubes, boxes, racks and straws.</p>
        </article>
        <article className="info-card">
          <h3>Freezer Labels</h3>
          <p>For -80°C, -40°C, -20°C storage and dry-ice transport workflows.</p>
        </article>
        <article className="info-card">
          <h3>Chemical-Resistant Labels</h3>
          <p>For histology, slides, xylene exposure, alcohols, solvents and staining workflows.</p>
        </article>
        <article className="info-card">
          <h3>Sterilization Labels</h3>
          <p>For autoclave, ETO, gamma and sterilization process identification.</p>
        </article>
      </div>
    </section>
  );
}
