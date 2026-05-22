import '../styles/caseStudies.css';

const cases = [
  ['Biobank Storage', 'Stable tube and box identification for −80 °C and LN₂ environments.'],
  ['Clinical Research', 'Barcode labels supporting sample tracking and process visibility.'],
  ['Histology Lab', 'Slide identification through xylene, alcohol series and staining workflows.'],
];

export default function CaseStudies() {
  return (
    <section className="cases-page page-shell">
      <p className="eyebrow">Case Studies</p>
      <h1>Practical Labeling Support by Workflow</h1>
      <p className="lead">Short, readable stories that show the problem, environment and recommended label approach.</p>
      <div className="case-list">
        {cases.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </div>
    </section>
  );
}
