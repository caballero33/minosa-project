import React, { useState } from 'react';
import { CheckCircle, Play, Clock } from 'lucide-react';
import './ProcesosMiners.css';

const ProcesosMiners = () => {
  const [activeTab, setActiveTab] = useState('extraccion');

  const procesos = {
    extraccion: {
      title: 'Proceso de Extracción',
      description: 'Gestión del proceso de extracción de minerales',
      steps: [
        { name: 'Perforación', status: 'completed', progress: 100 },
        { name: 'Voladura', status: 'in-progress', progress: 75 },
        { name: 'Carga', status: 'pending', progress: 0 },
        { name: 'Transporte', status: 'pending', progress: 0 }
      ]
    },
    procesamiento: {
      title: 'Procesamiento de Mineral',
      description: 'Transformación del mineral extraído',
      steps: [
        { name: 'Trituración', status: 'completed', progress: 100 },
        { name: 'Molienda', status: 'in-progress', progress: 60 },
        { name: 'Clasificación', status: 'pending', progress: 0 },
        { name: 'Concentración', status: 'pending', progress: 0 }
      ]
    },
    transporte: {
      title: 'Sistema de Transporte',
      description: 'Gestión del transporte interno y externo',
      steps: [
        { name: 'Carga en Planta', status: 'completed', progress: 100 },
        { name: 'Transporte Interno', status: 'in-progress', progress: 80 },
        { name: 'Almacenamiento', status: 'pending', progress: 0 },
        { name: 'Despacho', status: 'pending', progress: 0 }
      ]
    }
  };

  const equipos = [
    { id: 1, name: 'Excavadora CAT-320', status: 'activo', ubicacion: 'Pit Norte', ultimaRevision: '2024-01-15' },
    { id: 2, name: 'Cargador 980M', status: 'mantenimiento', ubicacion: 'Taller', ultimaRevision: '2024-01-10' },
    { id: 3, name: 'Volquete 777G', status: 'activo', ubicacion: 'Pit Sur', ultimaRevision: '2024-01-14' },
    { id: 4, name: 'Bulldozer D10T', status: 'detenido', ubicacion: 'Pit Central', ultimaRevision: '2024-01-08' }
  ];

  return (
    <div className="procesos-miners">
      <div className="module-header">
        <h1>Gestión de Procesos Mineros</h1>
        <p>Monitoreo y control de operaciones mineras</p>
      </div>

      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'extraccion' ? 'active' : ''}`}
          onClick={() => setActiveTab('extraccion')}
        >
          Extracción
        </button>
        <button 
          className={`tab ${activeTab === 'procesamiento' ? 'active' : ''}`}
          onClick={() => setActiveTab('procesamiento')}
        >
          Procesamiento
        </button>
        <button 
          className={`tab ${activeTab === 'transporte' ? 'active' : ''}`}
          onClick={() => setActiveTab('transporte')}
        >
          Transporte
        </button>
      </div>

      <div className="process-content">
        <div className="process-info">
          <h2>{procesos[activeTab].title}</h2>
          <p>{procesos[activeTab].description}</p>
        </div>

        <div className="process-steps">
          <h3>Etapas del Proceso</h3>
          <div className="steps-container">
            {procesos[activeTab].steps.map((step, index) => (
              <div key={index} className={`step ${step.status}`}>
                <div className="step-number">{index + 1}</div>
                <div className="step-content">
                  <h4>{step.name}</h4>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${step.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{step.progress}%</span>
                </div>
                <div className="step-status">
                  {step.status === 'completed' && <CheckCircle size={20} />}
                  {step.status === 'in-progress' && <Play size={20} />}
                  {step.status === 'pending' && <Clock size={20} />}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="equipment-section">
          <h3>Equipos Asignados</h3>
          <div className="equipment-grid">
            {equipos.map(equipo => (
              <div key={equipo.id} className={`equipment-card ${equipo.status}`}>
                <div className="equipment-header">
                  <h4>{equipo.name}</h4>
                  <span className={`status-badge ${equipo.status}`}>
                    {equipo.status}
                  </span>
                </div>
                <div className="equipment-details">
                  <p><strong>Ubicación:</strong> {equipo.ubicacion}</p>
                  <p><strong>Última Revisión:</strong> {equipo.ultimaRevision}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcesosMiners;
