import "./styles/global.css";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <Home />
    </div>
  );
}
