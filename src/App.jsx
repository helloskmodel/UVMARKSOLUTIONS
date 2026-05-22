
import React from "react";
import "./styles.css";

const logoUrl = "/uvmark-logo.png";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

const heroBlocks = {
  home: {
    eyebrow: "Modern Biotech Workflow Support",
    title: "Flexible Labeling Solutions for Fast-Moving Laboratories and Clinical Research",
    subtitle: "Agile labeling and identification support for modern biotech workflows.",
  },
};

function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand">
        <img src={logoUrl} alt="UVMARK logo" className="brand-logo" />
      </a>

      <nav className="nav-panel">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-block">
      <p className="hero-eyebrow">{heroBlocks.home.eyebrow}</p>
      <h1 className="hero-title">{heroBlocks.home.title}</h1>
      <p className="hero-subtitle">{heroBlocks.home.subtitle}</p>
    </section>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />

      <main id="home" className="page-section">
        <Hero />
      </main>

      <section id="about" className="page-section light-section">
        <Hero />
      </section>

      <section id="products" className="page-section">
        <Hero />
      </section>

      <section id="services" className="page-section light-section">
        <Hero />
      </section>
    </div>
  );
}
