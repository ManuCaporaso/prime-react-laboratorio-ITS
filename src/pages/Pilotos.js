import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import GaleriaPilotos from '../components/GaleriaPilotos';

const pilotos = [
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Verstappen },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Norris },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Leclerc },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Piastri },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Sainz },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Rusell },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Perez },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Alonso },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Hulkemberg },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Stroll },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Tsunoda },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Albon },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Ricciardo },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Gasly },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Bearman },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Magnussen },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Colapinto },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Zhou },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Sargent },
  { nombre: 'Lewis Hamilton', numero: "1", edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Bottas },
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
