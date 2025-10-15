import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Filter, 
  Calendar, 
  BarChart2, 
  PieChart, 
  LineChart,
  Search
} from 'lucide-react';
import './Reportes.css';

const Reportes = () => {
  const [activeTab, setActiveTab] = useState('produccion');
  const [dateRange, setDateRange] = useState({
    start: '2024-01-01',
    end: '2024-12-31'
  });

  const reportes = {
    produccion: [
      { id: 1, titulo: 'Reporte de Producción Diaria', tipo: 'Producción', fecha: '2024-01-15', formato: 'PDF', tamaño: '2.4 MB' },
      { id: 2, titulo: 'Análisis de Eficiencia Mensual', tipo: 'Eficiencia', fecha: '2024-01-10', formato: 'Excel', tamaño: '1.8 MB' },
      { id: 3, titulo: 'Consumo de Energía', tipo: 'Energía', fecha: '2024-01-05', formato: 'PDF', tamaño: '1.2 MB' },
    ],
    mantenimiento: [
      { id: 4, titulo: 'Mantenimiento Preventivo Q1', tipo: 'Mantenimiento', fecha: '2024-01-12', formato: 'PDF', tamaño: '3.1 MB' },
      { id: 5, titulo: 'Historial de Fallas', tipo: 'Fallas', fecha: '2023-12-28', formato: 'Excel', tamaño: '2.5 MB' },
    ],
    calidad: [
      { id: 6, titulo: 'Control de Calidad Mensual', tipo: 'Calidad', fecha: '2024-01-08', formato: 'PDF', tamaño: '1.9 MB' },
      { id: 7, titulo: 'Análisis de Desviaciones', tipo: 'Calidad', fecha: '2023-12-15', formato: 'PDF', tamaño: '2.2 MB' },
    ]
  };

  const metricas = [
    { titulo: 'Producción Total', valor: '1,245 Tn', porcentaje: '+12%', tendencia: 'up' },
    { titulo: 'Eficiencia', valor: '87%', porcentaje: '+5%', tendencia: 'up' },
    { titulo: 'Tiempo de Inactividad', valor: '2.3%', porcentaje: '-1.2%', tendencia: 'down' },
    { titulo: 'Costo por Tonelada', valor: '$45.60', porcentaje: '-3.2%', tendencia: 'down' },
  ];

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setDateRange(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="reportes-container">
      <div className="reportes-header">
        <h1>Reportes y Análisis</h1>
        <div className="reportes-actions">
          <div className="date-range-picker">
            <label>Rango de Fechas:</label>
            <input 
              type="date" 
              name="start" 
              value={dateRange.start} 
              onChange={handleDateChange} 
            />
            <span>a</span>
            <input 
              type="date" 
              name="end" 
              value={dateRange.end} 
              onChange={handleDateChange} 
            />
            <button className="btn-filter">
              <Filter size={16} />
              Filtrar
            </button>
          </div>
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Buscar reportes..." />
          </div>
        </div>
      </div>

      <div className="metrics-grid">
        {metricas.map((metrica, index) => (
          <div key={index} className="metric-card">
            <h3>{metrica.titulo}</h3>
            <div className="metric-value">
              <span className="value">{metrica.valor}</span>
              <span className={`trend ${metrica.tendency}`}>
                {metrica.porcentaje}
              </span>
            </div>
            <div className="metric-chart">
              <div className="chart-placeholder">
                {metrica.tendency === 'up' ? <LineChart size={24} /> : <BarChart2 size={24} />}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="tabs-container">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'produccion' ? 'active' : ''}`}
            onClick={() => setActiveTab('produccion')}
          >
            Producción
          </button>
          <button 
            className={`tab ${activeTab === 'mantenimiento' ? 'active' : ''}`}
            onClick={() => setActiveTab('mantenimiento')}
          >
            Mantenimiento
          </button>
          <button 
            className={`tab ${activeTab === 'calidad' ? 'active' : ''}`}
            onClick={() => setActiveTab('calidad')}
          >
            Calidad
          </button>
        </div>

        <div className="tab-content">
          <div className="reportes-list">
            {reportes[activeTab].map((reporte) => (
              <div key={reporte.id} className="reporte-card">
                <div className="reporte-icon">
                  <FileText size={24} />
                </div>
                <div className="reporte-info">
                  <h4>{reporte.titulo}</h4>
                  <div className="reporte-meta">
                    <span className="tipo">{reporte.tipo}</span>
                    <span className="fecha">{reporte.fecha}</span>
                    <span className="formato">{reporte.formato}</span>
                    <span className="tamano">{reporte.tamaño}</span>
                  </div>
                </div>
                <div className="reporte-actions">
                  <button className="btn-download">
                    <Download size={18} />
                    Descargar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="graficos-container">
        <div className="grafico-card">
          <h3>Producción Mensual</h3>
          <div className="grafico-placeholder">
            <BarChart2 size={48} />
            <p>Gráfico de producción mensual</p>
          </div>
        </div>
        <div className="grafico-card">
          <h3>Distribución por Proceso</h3>
          <div className="grafico-placeholder">
            <PieChart size={48} />
            <p>Gráfico de distribución</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reportes;
