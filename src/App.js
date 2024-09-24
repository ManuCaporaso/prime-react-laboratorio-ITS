import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FooterComponent from './components/Footer';
import Home from './pages/Home';
import Pilotos from './pages/Pilotos';
import Campeonato from './pages/Campeonato';

const App = () => {
  return (
    <Router>
      {/* Navbar global */}
      <Navbar />

      {/* Contenido principal basado en las rutas */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pilotos" element={<Pilotos />} />
          <Route path="/campeonato" element={<Campeonato />} />
        </Routes>
      </div>

      {/* Footer global */}
      <FooterComponent />
    </Router>
  );
};

export default App;

