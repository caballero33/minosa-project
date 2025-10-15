import React, { useState } from 'react';
import { Truck, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import './GestionEquipos.css';

const GestionEquipos = () => {
  const [filterStatus, setFilterStatus] = useState('todos');

  const equipos = [
    {
      id: 1,
      nombre: 'Excavadora CAT-320',
      tipo: 'Excavadora',
      estado: 'activo',
      ubicacion: 'Pit Norte',
      operador: 'Juan Pérez',
      horasTrabajo: 1250,
      ultimaRevision: '2024-01-15',
      proximaRevision: '2024-02-15',
      eficiencia: 92
    },
    {
      id: 2,
      nombre: 'Cargador 980M',
      tipo: 'Cargador',
      estado: 'mantenimiento',
      ubicacion: 'Taller',
      operador: 'María García',
      horasTrabajo: 2100,
      ultimaRevision: '2024-01-10',
      proximaRevision: '2024-01-25',
      eficiencia: 88
    },
    {
      id: 3,
      nombre: 'Volquete 777G',
      tipo: 'Volquete',
      estado: 'activo',
      ubicacion: 'Pit Sur',
      operador: 'Carlos López',
      horasTrabajo: 3200,
      ultimaRevision: '2024-01-14',
      proximaRevision: '2024-02-14',
      eficiencia: 95
    },
    {
      id: 4,
      nombre: 'Bulldozer D10T',
      tipo: 'Bulldozer',
      estado: 'detenido',
      ubicacion: 'Pit Central',
      operador: 'Ana Martínez',
      horasTrabajo: 1800,
      ultimaRevision: '2024-01-08',
      proximaRevision: '2024-01-20',
      eficiencia: 0
    },
    {
      id: 5,
      nombre: 'Perforadora Atlas Copco',
      tipo: 'Perforadora',
      estado: 'activo',
      ubicacion: 'Pit Este',
      operador: 'Roberto Silva',
      horasTrabajo: 950,
      ultimaRevision: '2024-01-12',
      proximaRevision: '2024-02-12',
      eficiencia: 89
    }
  ];

  const filteredEquipos = filterStatus === 'todos' 
    ? equipos 
    : equipos.filter(equipo => equipo.estado === filterStatus);

  const estadisticas = {
    total: equipos.length,
    activos: equipos.filter(e => e.estado === 'activo').length,
    mantenimiento: equipos.filter(e => e.estado === 'mantenimiento').length,
    detenidos: equipos.filter(e => e.estado === 'detenido').length
  };

  return (
    <div className="gestion-equipos">
      <div className="module-header">
        <h1>Gestión de Equipos</h1>
        <p>Control y monitoreo de maquinaria minera</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card total">
          <div className="stat-icon">
            <Truck size={24} />
          </div>
          <div className="stat-info">
            <h3>Total Equipos</h3>
            <span className="stat-number">{estadisticas.total}</span>
          </div>
        </div>
        <div className="stat-card activos">
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div className="stat-info">
            <h3>Activos</h3>
            <span className="stat-number">{estadisticas.activos}</span>
          </div>
        </div>
        <div className="stat-card mantenimiento">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-info">
            <h3>Mantenimiento</h3>
            <span className="stat-number">{estadisticas.mantenimiento}</span>
          </div>
        </div>
        <div className="stat-card detenidos">
          <div className="stat-icon">
            <AlertCircle size={24} />
          </div>
          <div className="stat-info">
            <h3>Detenidos</h3>
            <span className="stat-number">{estadisticas.detenidos}</span>
          </div>
        </div>
      </div>

      <div className="equipos-section">
        <div className="section-header">
          <h2>Lista de Equipos</h2>
          <div className="filters">
            <button 
              className={`filter-btn ${filterStatus === 'todos' ? 'active' : ''}`}
              onClick={() => setFilterStatus('todos')}
            >
              Todos
            </button>
            <button 
              className={`filter-btn ${filterStatus === 'activo' ? 'active' : ''}`}
              onClick={() => setFilterStatus('activo')}
            >
              Activos
            </button>
            <button 
              className={`filter-btn ${filterStatus === 'mantenimiento' ? 'active' : ''}`}
              onClick={() => setFilterStatus('mantenimiento')}
            >
              Mantenimiento
            </button>
            <button 
              className={`filter-btn ${filterStatus === 'detenido' ? 'active' : ''}`}
              onClick={() => setFilterStatus('detenido')}
            >
              Detenidos
            </button>
          </div>
        </div>

        <div className="equipos-grid">
          {filteredEquipos.map(equipo => (
            <div key={equipo.id} className={`equipo-card ${equipo.estado}`}>
              <div className="equipo-header">
                <div className="equipo-info">
                  <h3>{equipo.nombre}</h3>
                  <span className="tipo">{equipo.tipo}</span>
                </div>
                <span className={`status-badge ${equipo.estado}`}>
                  {equipo.estado}
                </span>
              </div>

              <div className="equipo-details">
                <div className="detail-row">
                  <span className="label">Ubicación:</span>
                  <span className="value">{equipo.ubicacion}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Operador:</span>
                  <span className="value">{equipo.operador}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Horas de Trabajo:</span>
                  <span className="value">{equipo.horasTrabajo.toLocaleString()} hrs</span>
                </div>
                <div className="detail-row">
                  <span className="label">Eficiencia:</span>
                  <span className="value">{equipo.eficiencia}%</span>
                </div>
              </div>

              <div className="equipo-footer">
                <div className="revision-info">
                  <small>Última revisión: {equipo.ultimaRevision}</small>
                  <small>Próxima: {equipo.proximaRevision}</small>
                </div>
                <div className="equipo-actions">
                  <button className="action-btn primary">Ver Detalles</button>
                  <button className="action-btn secondary">Historial</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GestionEquipos;
