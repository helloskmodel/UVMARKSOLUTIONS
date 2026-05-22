import '../styles/about.css';

export default function About() {
  return (
    <section className="about-page page-shell">
      <p className="eyebrow">About UVMARK</p>
      <h1>Supporting Modern Biopharmaceutical Workflows</h1>
      <p className="lead">UVMARK works closely with research and clinical teams to develop flexible labeling materials and workflow-focused identification solutions for evolving laboratory environments.</p>
      <div className="about-blocks">
        <article><span>01</span><h3>Application First</h3><p>We start from container, temperature, chemical exposure, printer and workflow requirements.</p></article>
        <article><span>02</span><h3>Fast Iteration</h3><p>Small-batch trials, sample evaluation and rapid material adjustment for active projects.</p></article>
        <article><span>03</span><h3>Long-term Support</h3><p>Technical support across material selection, printing, barcode readability and field use.</p></article>
      </div>
    </section>
  );
}
