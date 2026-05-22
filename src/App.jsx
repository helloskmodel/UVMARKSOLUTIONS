import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";

export default function App() {
  const path = window.location.pathname;

  let Page = Home;

  if (path === "/about") Page = About;
  if (path === "/products") Page = Products;
  if (path === "/case-studies") Page = CaseStudies;
  if (path === "/contact") Page = Contact;

  return (
    <>
      <Navbar />
      <Page />
      <Footer />
    </>
  );
}
