import '../styles/products.css';

const products = [
  ['Cryogenic Labels', 'LN₂ and −80 °C storage labels for vials, tubes, boxes, racks and straws.'],
  ['Histology Labels', 'Chemical-resistant slide and cassette identification for staining and solvent workflows.'],
  ['Sterilization Labels', 'Autoclave, ETO and gamma-resistant labels for clinical and lab processing.'],
  ['Workflow Labels', 'Barcode-ready custom labels for LIMS, inventory and clinical research tracking.'],
];

export default function Products() {
  return (
    <section className="products-page page-shell">
      <p className="eyebrow">Product Focus</p>
      <h1>Labels for Critical Laboratory Conditions</h1>
      <p className="lead">A concise solution structure for website visitors: choose by workflow, condition and container.</p>
      <div className="product-grid">
        {products.map(([title, text]) => <article key={title}><div className="product-icon">▦</div><h3>{title}</h3><p>{text}</p></article>)}
      </div>
    </section>
  );
}
