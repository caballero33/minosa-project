import React, { useState } from 'react';
import { 
  Pickaxe, 
  Microscope, 
  Truck, 
  Settings, 
  CheckCircle, 
  Clock,
  AlertCircle,
  Play
} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [selectedLote, setSelectedLote] = useState('lote1');

  const processStages = [
    {
      id: 'operaciones',
      name: 'Operaciones Mineras',
      icon: Pickaxe,
      status: 'completed',
      description: 'Extracción en San Andrés'
    },
    {
      id: 'laboratorio',
      name: 'Análisis',
      icon: Microscope,
      status: 'completed',
      description: 'Control de calidad en laboratorio'
    },
    {
      id: 'procesos',
      name: 'Procesamiento',
      icon: Truck,
      status: 'in-progress',
      description: 'Tratamiento de minerales'
    },
    {
      id: 'administracion',
      name: 'Administración',
      icon: Settings,
      status: 'pending',
      description: 'Gestión de operaciones'
    },
    {
      id: 'cliente',
      name: 'Entrega',
      icon: CheckCircle,
      status: 'pending',
      description: 'Entrega final'
    }
  ];

  const loteData = {
    lote1: {
      id: 'Lote SA-2023-01',
      status: 'En Proceso',
      startDate: '2023-11-01',
      endDate: '2023-12-15',
      progress: 65,
      material: 'Oro',
      location: 'San Andrés, Copán',
      team: 'Equipo Minero Copán',
      details: {
        operaciones: { status: 'completed', time: '2 días' },
        laboratorio: { status: 'completed', time: '1 día' },
        procesos: { status: 'in-progress', time: 'En curso' },
        administracion: { status: 'pending', time: 'Pendiente' },
        cliente: { status: 'pending', time: 'Pendiente' }
      }
    },
    lote2: {
      id: 'Lote SA-2023-02',
      status: 'Pendiente',
      startDate: '2023-12-01',
      endDate: '2024-01-15',
      progress: 15,
      material: 'Plata',
      location: 'San Andrés, Copán',
      team: 'Equipo Minero Copán',
      details: {
        operaciones: { status: 'in-progress', time: 'En curso' },
        laboratorio: { status: 'pending', time: 'Pendiente' },
        procesos: { status: 'pending', time: 'Pendiente' },
        administracion: { status: 'pending', time: 'Pendiente' },
        cliente: { status: 'pending', time: 'Pendiente' }
      }
    },
    lote3: {
      id: 'Lote SA-2023-00',
      status: 'Completado',
      startDate: '2023-09-15',
      endDate: '2023-10-30',
      progress: 100,
      material: 'Oro de Alta Ley',
      location: 'San Andrés, Copán',
      team: 'Equipo Minero Copán',
      details: {
        operaciones: { status: 'completed', time: '3 días' },
        laboratorio: { status: 'completed', time: '2 días' },
        procesos: { status: 'completed', time: '5 días' },
        administracion: { status: 'completed', time: '1 día' },
        cliente: { status: 'completed', time: 'Entregado' }
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#10b981';
      case 'in-progress': return '#f59e0b';
      case 'pending': return '#6b7280';
      default: return '#6b7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle size={20} />;
      case 'in-progress': return <Play size={20} />;
      case 'pending': return <Clock size={20} />;
      default: return <Clock size={20} />;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Panel de Control de Lotes</h1>
        <p>Monitoreo de procesos mineros por lote</p>
      </div>

      <div className="lotes-container">
        <div className="lote-selector">
          <button 
            className={`lote-tab ${selectedLote === 'lote1' ? 'active' : ''}`}
            onClick={() => setSelectedLote('lote1')}
          >
            Lote SA-2023-01
          </button>
          <button 
            className={`lote-tab ${selectedLote === 'lote2' ? 'active' : ''}`}
            onClick={() => setSelectedLote('lote2')}
          >
            Lote SA-2023-02
          </button>
          <button 
            className={`lote-tab ${selectedLote === 'lote3' ? 'active' : ''}`}
            onClick={() => setSelectedLote('lote3')}
          >
            Lote SA-2023-00
          </button>
        </div>

        <div className="lote-section">
          <div className="lote-header-bar">
            <h2>{loteData[selectedLote].id}</h2>
          </div>
          
          <div className="lote-content">
            <div className="lote-info">
              <h3>{loteData[selectedLote].id}</h3>
              <div className="lote-status">
                <span className={`status-badge ${loteData[selectedLote].status.toLowerCase().replace(' ', '-')}`}>
                  {loteData[selectedLote].status}
                </span>
                <span className="progress-text">{loteData[selectedLote].progress}% Completado</span>
              </div>
            </div>
            
            <div className="progress-bar-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${loteData[selectedLote].progress}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="process-flow">
            {processStages.map((stage, index) => {
              const stageData = loteData[selectedLote].details[stage.id];
              const IconComponent = stage.icon;
              
              return (
                <div key={stage.id} className="process-stage">
                  <div className="stage-info">
                    <span className="stage-name">{stage.name}</span>
                    <span className="stage-time">{stageData.time}</span>
                  </div>
                  
                  <div className="stage-container">
                    <div 
                      className={`stage-circle ${stageData.status}`}
                      style={{ backgroundColor: getStatusColor(stageData.status) }}
                    >
                      <IconComponent size={24} color="white" />
                    </div>
                    
                    {index < processStages.length - 1 && (
                      <div className={`connection-line ${stageData.status === 'completed' ? 'completed' : ''}`}></div>
                    )}
                  </div>
                  
                  <div className="stage-description">
                    {stage.description}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <div className="dashboard-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div className="stat-content">
            <h3>Lotes Completados</h3>
            <span className="stat-number">12</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Play size={24} />
          </div>
          <div className="stat-content">
            <h3>En Proceso</h3>
            <span className="stat-number">3</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <h3>En Cola</h3>
            <span className="stat-number">5</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <AlertCircle size={24} />
          </div>
          <div className="stat-content">
            <h3>Retrasos</h3>
            <span className="stat-number">1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
