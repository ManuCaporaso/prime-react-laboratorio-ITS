// src/components/Footer.js
import React from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

const FooterComponent = () => {
  return (
    <footer className="footer">
      <Card>
        <div className="footer-content">
          <div className="social-media">
            <h4>Síguenos en redes sociales</h4>
            <Button icon="pi pi-facebook" className="p-button-rounded p-button-info" aria-label="Facebook" />
            <Button icon="pi pi-twitter" className="p-button-rounded p-button-info" aria-label="Twitter" />
            <Button icon="pi pi-instagram" className="p-button-rounded p-button-info" aria-label="Instagram" />
          </div>
          <div className="additional-info">
            <h4>Información Adicional</h4>
            <p>Dirección: 123 Calle F1, Ciudad del Motor</p>
            <p>Email: contacto@f1.com</p>
            <p>Teléfono: +123 456 789</p>
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default FooterComponent;
