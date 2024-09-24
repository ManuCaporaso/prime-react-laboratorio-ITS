// src/components/Sidebar.js
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import { Card } from 'primereact/card';

const images = [
  { src: '/path/to/image1.jpg', alt: 'Descripción 1', text: 'Texto de la imagen 1' },
  { src: '/path/to/image2.jpg', alt: 'Descripción 2', text: 'Texto de la imagen 2' },
  { src: '/path/to/image3.jpg', alt: 'Descripción 3', text: 'Texto de la imagen 3' },
  // Agrega más imágenes si es necesario
];

const SidebarComponent = () => {
  const [visible, setVisible] = useState(false);

  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const carouselItemTemplate = (image) => {
    return (
      <div className="image-container">
        <Card title={image.alt}>
          <img src={image.src} alt={image.alt} style={{ width: '100%' }} />
          <p>{image.text}</p>
        </Card>
      </div>
    );
  };

  return (
    <div>
      <Button label="Abrir Sidebar" icon="pi pi-bars" onClick={() => setVisible(true)} />
      <Sidebar visible={visible} onHide={() => setVisible(false)} position="left">
        <h3>Galería</h3>
        <Carousel 
          value={images} 
          itemTemplate={carouselItemTemplate} 
          numVisible={1} 
          numScroll={1} 
          responsiveOptions={responsiveOptions} 
        />
        <p>Texto adicional debajo del carrusel.</p>
      </Sidebar>
    </div>
  );
};

export default SidebarComponent;
