import "../styles/hero.css";

export default function Hero({ eyebrow, title, subtitle }) {
  return (
    <section className="hero-block">
      <p className="hero-eyebrow">{eyebrow}</p>
      <h1 className="hero-title">{title}</h1>
      <p className="hero-subtitle">{subtitle}</p>
    </section>
  );
}
