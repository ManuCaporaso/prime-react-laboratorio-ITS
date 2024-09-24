import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import GaleriaPilotos from '../components/GaleriaPilotos';

const pilotos = [
  { nombre: 'Lewis Hamilton', edad: 36, equipo: 'Mercedes', imagen: GaleriaPilotos.Hamilton },
  { nombre: 'Max Verstappen', edad: 24, equipo: 'Red Bull', imagen: GaleriaPilotos.Verstappen },
  // Agrega más pilotos aquí
];

const Pilotos = () => {
  return (
    <div className="pilotos-page">
      <h2>Pilotos de la Temporada</h2>
      <div className="pilotos-grid">
        {pilotos.map((piloto, index) => (
          <Card
            key={index}
            title={piloto.nombre}
            subTitle={`Edad: ${piloto.edad} - Equipo: ${piloto.equipo}`}
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
