import "../styles/header.css";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "SERVICES", href: "#services" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="UVMARK Home">
        <img src="/uvmark-logo.png" alt="UVMARK logo" className="brand-logo" />
      </a>

      <nav className="nav-panel" aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="nav-link">
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
