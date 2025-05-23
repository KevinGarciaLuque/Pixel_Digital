import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Servicios from "./pages/Servicios";
import Portafolio from "./pages/Portafolio";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";

// IMPORTA TU COMPONENTE DE DETALLE DE PORTAFOLIO
import ContentPortafolio from "./pages/content/portafolio/ContentPortafolio";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        {/* Ruta dinámica para detalle del portafolio */}
        <Route path="/portafolio/-:proyectoId" element={<ContentPortafolio />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

