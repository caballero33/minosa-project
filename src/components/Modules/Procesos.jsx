import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Clock, 
  Package,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  Route,
  Fuel,
  User
} from 'lucide-react';
import './Procesos.css';

const Procesos = () => {
  const [selectedLote, setSelectedLote] = useState('lote1');

  const transporteData = {
    lote1: {
      id: 'Lote 1',
      status: 'En Tránsito',
      origen: 'Pesrania A',
      destino: 'Puerto Exportación',
      conductor: 'Carlos Mendoza',
      vehiculo: 'CAM-001',
      carga: 'Cobre, Oro, Plata',
      pesoTotal: 198.6,
      unidad: 'kg',
      fechaInicio: '2024-01-15',
      fechaEstimada: '2024-01-18',
      progreso: 65,
      ubicacionActual: 'Carretera Panamericana Km 245',
      combustible: 75,
      temperatura: 22,
      rutas: [
        { id: 'ruta1', nombre: 'Pesrania A', completado: true, tiempo: '08:00' },
        { id: 'ruta2', nombre: 'Centro Logístico', completado: true, tiempo: '12:30' },
        { id: 'ruta3', nombre: 'Carretera Panamericana', completado: false, tiempo: 'En curso' },
        { id: 'ruta4', nombre: 'Puerto Exportación', completado: false, tiempo: 'Pendiente' }
      ]
    },
    lote2: {
      id: 'Lote 2',
      status: 'Preparando',
      origen: 'Pesrania D',
      destino: 'Centro de Distribución',
      conductor: 'Ana García',
      vehiculo: 'CAM-002',
      carga: 'Hierro, Zinc',
      pesoTotal: 409.8,
      unidad: 'kg',
      fechaInicio: '2024-01-20',
      fechaEstimada: '2024-01-22',
      progreso: 15,
      ubicacionActual: 'Pesrania D - Cargando',
      combustible: 100,
      temperatura: 18,
      rutas: [
        { id: 'ruta1', nombre: 'Pesrania D', completado: false, tiempo: 'En curso' },
        { id: 'ruta2', nombre: 'Centro de Distribución', completado: false, tiempo: 'Pendiente' }
      ]
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'En Tránsito': return '#f59e0b';
      case 'Completado': return '#10b981';
      case 'Preparando': return '#6b7280';
      case 'Retrasado': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const currentData = transporteData[selectedLote];

  return (
    <div className="procesos">
      <div className="procesos-header">
        <div className="header-content">
          <div className="header-title">
            <Truck size={32} />
            <h1>Seguimiento de Transporte</h1>
          </div>
          <p>Monitoreo en tiempo real del transporte de cargas mineras</p>
        </div>
      </div>

      <div className="procesos-content">
        <div className="lote-selector">
          <button 
            className={`lote-tab ${selectedLote === 'lote1' ? 'active' : ''}`}
            onClick={() => setSelectedLote('lote1')}
          >
            Lote 1
          </button>
          <button 
            className={`lote-tab ${selectedLote === 'lote2' ? 'active' : ''}`}
            onClick={() => setSelectedLote('lote2')}
          >
            Lote 2
          </button>
        </div>

        <div className="transporte-info">
          <div className="info-card main-info">
            <div className="card-header">
              <div className="status-info">
                <h2>{currentData.id}</h2>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(currentData.status) }}
                >
                  {currentData.status}
                </span>
              </div>
              <div className="progress-info">
                <span className="progress-text">{currentData.progreso}% Completado</span>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${currentData.progreso}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="info-grid">
              <div className="info-item">
                <MapPin size={20} />
                <div className="info-content">
                  <span className="label">Origen</span>
                  <span className="value">{currentData.origen}</span>
                </div>
              </div>
              
              <div className="info-item">
                <MapPin size={20} />
                <div className="info-content">
                  <span className="label">Destino</span>
                  <span className="value">{currentData.destino}</span>
                </div>
              </div>
              
              <div className="info-item">
                <User size={20} />
                <div className="info-content">
                  <span className="label">Conductor</span>
                  <span className="value">{currentData.conductor}</span>
                </div>
              </div>
              
              <div className="info-item">
                <Truck size={20} />
                <div className="info-content">
                  <span className="label">Vehículo</span>
                  <span className="value">{currentData.vehiculo}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card cargo-info">
            <h3>Carga</h3>
            <div className="cargo-details">
              <div className="cargo-item">
                <Package size={20} />
                <div className="cargo-content">
                  <span className="label">Contenido</span>
                  <span className="value">{currentData.carga}</span>
                </div>
              </div>
              
              <div className="cargo-item">
                <Package size={20} />
                <div className="cargo-content">
                  <span className="label">Peso Total</span>
                  <span className="value">{currentData.pesoTotal} {currentData.unidad}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card vehicle-info">
            <h3>Estado del Vehículo</h3>
            <div className="vehicle-details">
              <div className="vehicle-item">
                <Fuel size={20} />
                <div className="vehicle-content">
                  <span className="label">Combustible</span>
                  <span className="value">{currentData.combustible}%</span>
                </div>
              </div>
              
              <div className="vehicle-item">
                <Clock size={20} />
                <div className="vehicle-content">
                  <span className="label">Temperatura</span>
                  <span className="value">{currentData.temperatura}°C</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ruta-section">
          <div className="ruta-header">
            <Route size={24} />
            <h3>Ruta de Transporte</h3>
          </div>
          
          <div className="ruta-timeline">
            {currentData.rutas.map((ruta, index) => (
              <div key={ruta.id} className="ruta-item">
                <div className="ruta-marker">
                  <div className={`marker-circle ${ruta.completado ? 'completed' : 'pending'}`}>
                    {ruta.completado ? <CheckCircle size={20} /> : <Clock size={20} />}
                  </div>
                  {index < currentData.rutas.length - 1 && (
                    <div className={`connection-line ${ruta.completado ? 'completed' : ''}`}></div>
                  )}
                </div>
                
                <div className="ruta-content">
                  <div className="ruta-info">
                    <span className="ruta-name">{ruta.nombre}</span>
                    <span className="ruta-time">{ruta.tiempo}</span>
                  </div>
                  <div className="ruta-status">
                    {ruta.completado ? (
                      <span className="status-completed">Completado</span>
                    ) : (
                      <span className="status-pending">Pendiente</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ubicacion-section">
          <div className="ubicacion-header">
            <MapPin size={24} />
            <h3>Ubicación Actual</h3>
          </div>
          
          <div className="ubicacion-content">
            <div className="ubicacion-info">
              <span className="ubicacion-text">{currentData.ubicacionActual}</span>
            </div>
            
            <div className="mapa-placeholder">
              <div className="mapa-content">
                <MapPin size={48} />
                <span>Mapa de Ubicación</span>
                <small>GPS en tiempo real</small>
              </div>
            </div>
          </div>
        </div>

        <div className="actions-section">
          <button className="action-btn primary">
            <Play size={16} />
            Iniciar Transporte
          </button>
          <button className="action-btn secondary">
            <Pause size={16} />
            Pausar
          </button>
          <button className="action-btn tertiary">
            <RotateCcw size={16} />
            Reiniciar
          </button>
          <button className="action-btn alert">
            <AlertCircle size={16} />
            Reportar Incidencia
          </button>
        </div>
      </div>
    </div>
  );
};

export default Procesos;
