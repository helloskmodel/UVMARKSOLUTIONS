import '../styles/home.css';

const strengths = [
  ['Flexible', 'Small-batch customization'],
  ['Fast', 'Rapid response for active labs'],
  ['Reliable', 'Materials for demanding workflows'],
  ['Support', 'US + China coverage, 7×24'],
];

const workflows = [
  ['Cryogenic', 'LN₂ / −80 °C storage'],
  ['Histology', 'Xylene and solvent exposure'],
  ['Sterilization', 'Autoclave, ETO, gamma'],
  ['Clinical', 'Traceability and barcode workflows'],
];

function IconMark() { return <span className="icon-mark" aria-hidden="true"><span></span><span></span><span></span></span>; }

export default function Home({ goTo }) {
  return (
    <section className="home-page">
      <div className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow">Modern Biotech Workflow Support</p>
          <h1>Flexible Labeling Solutions for Fast-Moving Laboratories</h1>
          <p className="intro">Agile identification support for research, biopharma, clinical and cold-chain workflows.</p>
          <div className="hero-actions">
            <button onClick={() => goTo('products')}>Explore Solutions</button>
            <button className="secondary" onClick={() => goTo('about')}>How We Work</button>
          </div>
        </div>
        <div className="hero-panel">
          <img src="/uvmark-logo.png" alt="UVMARK" />
          <div className="panel-note">Custom label materials · barcode-ready · workflow-focused</div>
        </div>
      </div>

      <div className="keyword-grid">
        {strengths.map(([title, text]) => <article key={title}><IconMark /><h3>{title}</h3><p>{text}</p></article>)}
      </div>

      <section className="home-section">
        <p className="section-kicker">Application Keywords</p>
        <h2>Built around lab conditions, not just label sizes.</h2>
        <div className="workflow-grid">
          {workflows.map(([title, text]) => <div key={title}><IconMark /><strong>{title}</strong><span>{text}</span></div>)}
        </div>
      </section>
    </section>
  );
}
