import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import GaleriaPilotos from '../components/GaleriaPilotos';
import '../styles/Pilotos.css'

const pilotos = [
  { nombre: 'Max Verstappen', numero: "1", equipo: 'Red Bull Racing Honda RBPT', imagen: GaleriaPilotos.Verstappen },
  { nombre: 'Lando Norris', numero: "4", equipo: 'McLaren Mercedes', imagen: GaleriaPilotos.Norris },
  { nombre: 'Charles Leclerc', numero: "16", equipo: 'MFerrari', imagen: GaleriaPilotos.Leclerc },
  { nombre: 'Oscar Piastri', numero: "81", equipo: 'McLaren Mercedes', imagen: GaleriaPilotos.Piastri },
  { nombre: 'Carlos Sainz', numero: "55", equipo: 'Ferrari', imagen: GaleriaPilotos.Sainz },
  { nombre: 'Lewis Hamilton', numero: "44", equipo: 'Mercedes', imagen: GaleriaPilotos.Hamilton },
  { nombre: 'George Russell', numero: "63", equipo: 'Mercedes', imagen: GaleriaPilotos.Rusell },
  { nombre: 'Sergio Perez', numero: "11", equipo: 'Red Bull Racing Honda RBPT', imagen: GaleriaPilotos.Perez },
  { nombre: 'Fernando Alonso', numero: "14", equipo: 'Aston Martin Aramco Mercedes', imagen: GaleriaPilotos.Alonso },
  { nombre: 'Nico Hulkenberg', numero: "27", equipo: 'Haas Ferrari', imagen: GaleriaPilotos.Hulkemberg },
  { nombre: 'Lance Stroll', numero: "18", equipo: 'Aston Martin Aramco Mercedes', imagen: GaleriaPilotos.Stroll },
  { nombre: 'Yuki Tsunoda', numero: "22", equipo: 'RB Honda RBPT', imagen: GaleriaPilotos.Tsunoda },
  { nombre: 'Alexander Albon', numero: "23", equipo: 'Williams Mercedes', imagen: GaleriaPilotos.Albon },
  { nombre: 'Daniel Ricciardo', numero: "3", equipo: 'RB Honda RBPT', imagen: GaleriaPilotos.Ricciardo },
  { nombre: 'Pierre Gasly', numero: "10", equipo: 'Alpine Renault', imagen: GaleriaPilotos.Gasly },
  { nombre: 'Oliver Bearman', numero: "50", equipo: 'Haas Ferrari', imagen: GaleriaPilotos.Bearman },
  { nombre: 'Kevin Magnussen', numero: "20", equipo: 'Haas Ferrari', imagen: GaleriaPilotos.Magnussen },
  { nombre: 'Esteban Ocon', numero: "31", equipo: 'Alpine Renault', imagen: GaleriaPilotos.Ocon },
  { nombre: 'Franco Colapinto', numero: "43", equipo: 'Williams Mercedes', imagen: GaleriaPilotos.Colapinto },
  { nombre: 'Zhou Guanyu', numero: "24", equipo: 'Kick Sauber Ferrari', imagen: GaleriaPilotos.Zhou },
  { nombre: 'Logan Sargeant', numero: "2", equipo: 'Williams Mercedes', imagen: GaleriaPilotos.Sargent },
  { nombre: 'Valtteri Bottas', numero: "77", equipo: 'Kick Sauber Ferrari', imagen: GaleriaPilotos.Bottas },
    // Agrega más pilotos aquí
];

const Pilotos = () => {
  return (
    <div className="pilotos-page">
      <h2>Pilotos de la Temporada 2024</h2>
      <div className="pilotos-grid">
        {pilotos.map((piloto, index) => (
          <Card
            key={index}
            title={piloto.nombre} 
            subTitle={`Numero Auto:${piloto.numero} - Equipo: ${piloto.equipo}`}
            footer={<Button label="Ver Perfil" icon="pi pi-search" />}
            header={<img className="img-piloto" alt={piloto.nombre} src={piloto.imagen} />}
          >
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pilotos;
