import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const datosCampeonato = [
  { posicion: 1, numero: 44, nombre: 'Lewis', apellido: 'Hamilton', escuderia: '/path/to/mercedes-logo.png', imagen: '/path/to/hamilton.jpg', puntos: 300 },
  { posicion: 2, numero: 33, nombre: 'Max', apellido: 'Verstappen', escuderia: '/path/to/redbull-logo.png', imagen: '/path/to/verstappen.jpg', puntos: 290 },
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
        <Column body={rowData => <img src={rowData.escuderia} alt="Escudería" />} header="Escudería" />
        <Column body={rowData => <img src={rowData.imagen} alt="Piloto" />} header="Piloto" />
        <Column field="puntos" header="Puntos" />
      </DataTable>
    </div>
  );
};

export default Campeonato;
