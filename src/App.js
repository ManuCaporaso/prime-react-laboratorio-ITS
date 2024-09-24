import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pilotos from './pages/Pilotos';
import Campeonato from './pages/Campeonato';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pilotos" element={<Pilotos />} />
        <Route path="/campeonato" element={<Campeonato />} />
      </Routes>
    </Router>
  );
};

export default App;

