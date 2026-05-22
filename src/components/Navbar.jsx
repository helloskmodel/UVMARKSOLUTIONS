import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src="/logo.png" alt="UVMARK" />
      </div>

      <nav>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PRODUCTS</a>
        <a href="#">CASE STUDIES</a>
        <a href="#">CONTACT</a>
      </nav>

    </header>
  );
}
