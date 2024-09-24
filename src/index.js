import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'primereact/resources/themes/saga-blue/theme.css';  // Tema de PrimeReact
import 'primereact/resources/primereact.min.css';          // Estilos de PrimeReact
import 'primeicons/primeicons.css';                        // Íconos de PrimeReact
import './styles/App.css';                                 // Estilos personalizados

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
