import IniciarSesion from "./pages/iniciarSesion";
import PaginaPrincipal from "./pages/paginaPrincipal";
import Contactanos from "./pages/contactanos";
import QuienesSomos from "./pages/quienesSomos";
import Animales from "./pages/animales";

import Footer from "./components/Footer";
import Popup from "./components/Popup";

import './App.css';
import './styles/App.css';
import './styles/estiloContactanos.css';
import './styles/estiloTabla.css';
import './styles/estiloMenu.css';
import './styles/sobrenosotros.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Menuar from './components/script';

function App() {
  const [botonPopup, setBotonPopup] = useState('false');
  return (
    <div>
      <Router>
        <div onLoad={() => setBotonPopup(false)}>
          <header>
            <nav className="nav">
              <div className="logo">
                <img src="imagenes/logo.png" alt="Logo Página" class="Pequenio" />
              </div>
              <ul className="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="quienesSomos">Quiénes Somos</a></li>
                <li><a href="contactanos">Contáctanos</a></li>
                <li><a href="animales">Animales</a></li>
                <li><button id="iniciarSesion" onClick={() => setBotonPopup(true)}>Iniciar Sesión</button></li>
              </ul>
            </nav>
          </header>
        </div>
        <Routes>
          <Route exact path="/" element={<PaginaPrincipal />} />
          <Route path="/Contactanos" element={<Contactanos />} />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/QuienesSomos" element={<QuienesSomos />} />
          <Route path="/Animales" element={<Animales />} />
        </Routes>
        <Footer />
        <Popup trigger={botonPopup} setTrigger={setBotonPopup} />
      </Router>
    </div>
  );
}

export default App;