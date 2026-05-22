import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <CaseStudies />
      <Contact />
      <Footer />
    </>
  );
}
