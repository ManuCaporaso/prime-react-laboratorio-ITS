import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import GaleriaPilotos from '../components/GaleriaPilotos';
import GaleriaEscuderias from '../components/GaleriaEscuderias';
import '../styles/Campeonato.css'

const datosCampeonato = [
  { posicion: 1, numero: 1, nombre: 'Max', apellido: 'Verstapen', escuderia: GaleriaEscuderias.RedBull, imagen: GaleriaPilotos.Verstappen, puntos: 331 },
  { posicion: 2, numero: 4, nombre: 'Lando', apellido: 'Norris', escuderia: GaleriaEscuderias.McLaren, imagen: GaleriaPilotos.Norris, puntos: 279 },
  { posicion: 3, numero: 16, nombre: 'Charles', apellido: 'Leclerc', escuderia: GaleriaEscuderias.Ferrari, imagen: GaleriaPilotos.Leclerc, puntos: 245 },
  { posicion: 4, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.McLaren, imagen: GaleriaPilotos.Piastri, puntos: 237 },
  { posicion: 5, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 6, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 7, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 8, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 9, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 10, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 11, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 12, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 13, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 14, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 15, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 16, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },
  { posicion: 17, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: GaleriaEscuderias.Mercedes, imagen: GaleriaPilotos.Verstappen, puntos: 300 },

  // Agrega más datos aquí
];

const Campeonato = () => {
  return (
    <div className="campeonato-page">
      <h2>Clasificación del Campeonato</h2>
      <DataTable value={datosCampeonato} responsiveLayout="scroll">
        <Column field="posicion" header="Posición" />
        <Column field="numero" header="Número Auto" />
        <Column field="nombre" header="Nombre" />
        <Column field="apellido" header="Apellido" />
        <Column body={rowData => <img className='img-escuderia' src={rowData.escuderia} alt="Escudería" />} header="Escudería" />
        <Column body={rowData => <img className='img-piloto' src={rowData.imagen} alt="Piloto" />} header="Piloto" />
        <Column field="puntos" header="Puntos" />
      </DataTable>
    </div>
  );
};

export default Campeonato;
