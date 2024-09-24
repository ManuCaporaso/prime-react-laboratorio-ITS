import React from 'react';
import F1 from '../assets/images/home.jpg'

const Home = () => {
  return (
    <div className="home-page">
      <h1>Bienvenido al Mundo de la Fórmula 1</h1>
      <img className="home-image" src={F1} alt="Fórmula 1" />
    </div>
  );
};

export default Home;
