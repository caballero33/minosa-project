import React, { useState } from 'react';
import { 
  Microscope, 
  Package, 
  TrendingUp, 
  Calendar,
  Filter,
  Search,
  Download,
  Eye
} from 'lucide-react';
import './Laboratorio.css';

const Laboratorio = () => {
  const [selectedLote, setSelectedLote] = useState('lote1');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPurity, setFilterPurity] = useState('todos');

  const mineralesData = {
    lote1: [
      {
        id: 'MIN001',
        nombre: 'Cobre',
        pureza: 98.5,
        peso: 150.2,
        unidad: 'kg',
        fechaExtraccion: '2024-01-15',
        ubicacion: 'Pesrania A',
        estado: 'Analizado',
        color: '#b87333'
      },
      {
        id: 'MIN002',
        nombre: 'Oro',
        pureza: 99.2,
        peso: 2.8,
        unidad: 'kg',
        fechaExtraccion: '2024-01-16',
        ubicacion: 'Pesrania B',
        estado: 'En Análisis',
        color: '#ffd700'
      },
      {
        id: 'MIN003',
        nombre: 'Plata',
        pureza: 97.8,
        peso: 45.6,
        unidad: 'kg',
        fechaExtraccion: '2024-01-17',
        ubicacion: 'Pesrania C',
        estado: 'Analizado',
        color: '#c0c0c0'
      }
    ],
    lote2: [
      {
        id: 'MIN004',
        nombre: 'Hierro',
        pureza: 95.2,
        peso: 320.5,
        unidad: 'kg',
        fechaExtraccion: '2024-01-18',
        ubicacion: 'Pesrania D',
        estado: 'Analizado',
        color: '#8b4513'
      },
      {
        id: 'MIN005',
        nombre: 'Zinc',
        pureza: 96.8,
        peso: 89.3,
        unidad: 'kg',
        fechaExtraccion: '2024-01-19',
        ubicacion: 'Pesrania E',
        estado: 'En Análisis',
        color: '#7f8c8d'
      }
    ]
  };

  const filteredMinerales = mineralesData[selectedLote].filter(mineral => {
    const matchesSearch = mineral.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         mineral.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPurity = filterPurity === 'todos' || 
                         (filterPurity === 'alto' && mineral.pureza >= 98) ||
                         (filterPurity === 'medio' && mineral.pureza >= 95 && mineral.pureza < 98) ||
                         (filterPurity === 'bajo' && mineral.pureza < 95);
    return matchesSearch && matchesPurity;
  });

  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'Analizado': return '#10b981';
      case 'En Análisis': return '#f59e0b';
      case 'Pendiente': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div className="laboratorio">
      <div className="laboratorio-header">
        <div className="header-content">
          <div className="header-title">
            <Microscope size={32} />
            <h1>Laboratorio de Análisis</h1>
          </div>
          <p>Visualización y análisis de minerales extraídos por lote</p>
        </div>
      </div>

      <div className="laboratorio-content">
        <div className="controls-section">
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

          <div className="filters-section">
            <div className="search-box">
              <Search size={20} />
              <input
                type="text"
                placeholder="Buscar mineral o ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="filter-box">
              <Filter size={20} />
              <select 
                value={filterPurity} 
                onChange={(e) => setFilterPurity(e.target.value)}
              >
                <option value="todos">Todas las Purezas</option>
                <option value="alto">Alta Pureza (≥98%)</option>
                <option value="medio">Media Pureza (95-98%)</option>
                <option value="bajo">Baja Pureza (&lt;95%)</option>
              </select>
            </div>

            <button className="export-btn">
              <Download size={20} />
              Exportar Datos
            </button>
          </div>
        </div>

        <div className="minerales-grid">
          {filteredMinerales.map(mineral => (
            <div key={mineral.id} className="mineral-card">
              <div className="mineral-header">
                <div className="mineral-icon" style={{ backgroundColor: mineral.color }}>
                  <Package size={24} />
                </div>
                <div className="mineral-info">
                  <h3>{mineral.nombre}</h3>
                  <span className="mineral-id">{mineral.id}</span>
                </div>
                <span 
                  className="estado-badge"
                  style={{ backgroundColor: getEstadoColor(mineral.estado) }}
                >
                  {mineral.estado}
                </span>
              </div>

              <div className="mineral-details">
                <div className="detail-row">
                  <span className="label">Pureza:</span>
                  <span className="value pureza">
                    {mineral.pureza}%
                    <TrendingUp size={16} className="trend-icon" />
                  </span>
                </div>
                
                <div className="detail-row">
                  <span className="label">Peso:</span>
                  <span className="value">{mineral.peso} {mineral.unidad}</span>
                </div>
                
                
                
                <div className="detail-row">
                  <span className="label">Fecha:</span>
                  <span className="value">
                    <Calendar size={14} />
                    {new Date(mineral.fechaExtraccion).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="mineral-actions">
                <button className="action-btn primary">
                  <Eye size={16} />
                  Ver Detalles
                </button>
                <button className="action-btn secondary">
                  <Download size={16} />
                  Reporte
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredMinerales.length === 0 && (
          <div className="no-results">
            <Microscope size={48} />
            <h3>No se encontraron minerales</h3>
            <p>Intenta ajustar los filtros de búsqueda</p>
          </div>
        )}
      </div>

      <div className="laboratorio-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <Package size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Minerales</h3>
            <span className="stat-number">{mineralesData[selectedLote].length}</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>Pureza Promedio</h3>
            <span className="stat-number">
              {(mineralesData[selectedLote].reduce((acc, mineral) => acc + mineral.pureza, 0) / mineralesData[selectedLote].length).toFixed(1)}%
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Microscope size={24} />
          </div>
          <div className="stat-content">
            <h3>En Análisis</h3>
            <span className="stat-number">
              {mineralesData[selectedLote].filter(m => m.estado === 'En Análisis').length}
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Package size={24} />
          </div>
          <div className="stat-content">
            <h3>Pesos Totales</h3>
            <span className="stat-number">
              {mineralesData[selectedLote].reduce((acc, mineral) => acc + mineral.peso, 0).toFixed(1)} kg
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratorio;
