import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Contact from "./pages/Contact.jsx";

function Header() {
  return (
    <header className="header">
      <NavLink className="brand" to="/"><img src="/uvmark-logo.png" alt="UVMARK logo" /></NavLink>
      <nav className="nav">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/about">ABOUT UVMARK</NavLink>
        <NavLink to="/products">PRODUCTS & SERVICES</NavLink>
        <NavLink to="/case-studies">CASE STUDIES</NavLink>
        <NavLink to="/contact">CONTACT</NavLink>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
}
