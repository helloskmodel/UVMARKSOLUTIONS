import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Houston · New York · Vancouver
        </p>

        <div className="footer-links">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>

        <p className="footer-copy">
          © 2026 UVMARK Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
