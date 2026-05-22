import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import CaseStudies from './pages/CaseStudies.jsx';

const pages = { home: Home, about: About, products: Products, cases: CaseStudies };

function App() {
  const [page, setPage] = useState('home');
  const Page = useMemo(() => pages[page] || Home, [page]);
  const nav = [
    ['home', 'Home'],
    ['about', 'About'],
    ['products', 'Products'],
    ['cases', 'Case Studies'],
  ];

  return (
    <>
      <header className="site-header">
        <button className="brand" onClick={() => setPage('home')} aria-label="UVMARK Home">
          <img src="/uvmark-logo.png" alt="UVMARK logo" />
        </button>
        <nav className="nav-links">
          {nav.map(([key, label]) => (
            <button key={key} className={page === key ? 'active' : ''} onClick={() => setPage(key)}>{label}</button>
          ))}
        </nav>
      </header>
      <main><Page goTo={setPage} /></main>
      <footer className="site-footer">
        <span>UVMARK Solutions</span><span>Flexible labeling support for modern laboratories.</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
