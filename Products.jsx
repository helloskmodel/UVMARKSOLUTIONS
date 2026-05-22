import "./styles/global.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <Home />
      <About />
      <Products />
      <Services />
      <Contact />
    </div>
  );
}
