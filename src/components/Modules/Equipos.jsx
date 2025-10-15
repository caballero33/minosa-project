import React from 'react';
import { HardDrive } from 'lucide-react';
import './Equipos.css';

const Equipos = () => {
  return (
    <div className="equipos-container">
      <div className="module-header">
        <h1><HardDrive size={28} /> Gestión de Equipos</h1>
        <p>Administra los equipos y dispositivos de la mina</p>
      </div>
      
      <div className="equipos-content">
        <div className="equipos-grid">
          {/* Aquí iría el contenido real de la gestión de equipos */}
          <div className="placeholder-content">
            <h2>Módulo de Gestión de Equipos</h2>
            <p>Esta sección estará disponible pronto.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipos;
