import "../styles/Products.css";

export default function Products() {
  return (
    <section className="products-page">

      <h2>Labels</h2>

      <div className="products-grid">
        <div>Tubes & Vials</div>
        <div>PCR Tubes & Strips</div>
        <div>Automotive Parts</div>
        <div>Printed Circuit Boards</div>
        <div>Blood Products</div>
        <div>Microplates</div>
        <div>Microscope Slides</div>
      </div>

      <h2>By Resistance</h2>

      <div className="products-grid">
        <div>Cryogenic (-196°C)</div>
        <div>Deep-Freeze (-80°C)</div>
        <div>Xylene & Chemicals</div>
        <div>Autoclave</div>
        <div>Heat Resistant</div>
      </div>

    </section>
  );
}
