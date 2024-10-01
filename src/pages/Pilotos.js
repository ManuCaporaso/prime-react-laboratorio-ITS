import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import GaleriaPilotos from '../components/GaleriaPilotos';
import '../styles/Pilotos.css'

const pilotos = [
  { nombre: 'Max Verstappen', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Verstappen },
  { nombre: 'Lando Norris', numero: "4", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Norris },
  { nombre: 'Charles Leclerc', numero: "16", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Leclerc },
  { nombre: 'Oscar Piastri', numero: "81", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Piastri },
  { nombre: 'Carlos Sainz', numero: "55", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Sainz },
  { nombre: 'Lewis Hamilton', numero: "44", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Hamilton },
  { nombre: 'George Russell', numero: "63", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Rusell },
  { nombre: 'Sergio Perez', numero: "11", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Perez },
  { nombre: 'Fernando Alonso', numero: "14", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Alonso },
  { nombre: 'Nico Hulkenberg', numero: "27", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Hulkemberg },
  { nombre: 'Lance Stroll', numero: "18", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Stroll },
  { nombre: 'Yuki Tsunoda', numero: "22", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Tsunoda },
  { nombre: 'Alexander Albon', numero: "23", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Albon },
  { nombre: 'Daniel Ricciardo', numero: "3", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Ricciardo },
  { nombre: 'Pierre Gasly', numero: "10", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Gasly },
  { nombre: 'Oliver Bearman', numero: "50", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Bearman },
  { nombre: 'Kevin Magnussen', numero: "20", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Magnussen },
  { nombre: 'Esteban Ocon', numero: "31", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Ocon },
  { nombre: 'Franco Colapinto', numero: "43", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Colapinto },
  { nombre: 'Zhou Guanyu', numero: "24", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Zhou },
  { nombre: 'Logan Sargeant', numero: "2", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Sargent },
  { nombre: 'Valtteri Bottas', numero: "77", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Bottas },
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
            subTitle={`Numero Auto:${piloto.numero} - Edad: ${piloto.edad} - Equipo: ${piloto.equipo}`}
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
