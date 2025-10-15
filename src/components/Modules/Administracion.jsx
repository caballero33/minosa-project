import React, { useState } from 'react';
import { 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Calendar,
  DollarSign,
  FileCheck,
  Shield,
  Users,
  TrendingUp
} from 'lucide-react';
import './Administracion.css';

const Administracion = () => {
  const [activeTab, setActiveTab] = useState('revisiones');

  const revisionesData = [
    {
      id: 'REV001',
      tipo: 'Entrega',
      lote: 'Lote 1',
      cliente: 'Minerals Corp',
      fecha: '2024-01-18',
      estado: 'Pendiente',
      documentos: ['Factura', 'Certificado Calidad', 'Informe Ambiental'],
      monto: 45000,
      prioridad: 'alta'
    },
    {
      id: 'REV002',
      tipo: 'Factura',
      lote: 'Lote 2',
      cliente: 'Global Mining',
      fecha: '2024-01-20',
      estado: 'Aprobado',
      documentos: ['Factura', 'Informe Trabajo'],
      monto: 32000,
      prioridad: 'media'
    },
    {
      id: 'REV003',
      tipo: 'Informe Ambiental',
      lote: 'Lote 1',
      cliente: 'Eco Minerals',
      fecha: '2024-01-22',
      estado: 'Revisando',
      documentos: ['Informe Ambiental', 'Certificado'],
      monto: 0,
      prioridad: 'alta'
    }
  ];

  const facturasData = [
    {
      id: 'FAC001',
      numero: 'F-2024-001',
      cliente: 'Minerals Corp',
      lote: 'Lote 1',
      fecha: '2024-01-18',
      vencimiento: '2024-02-18',
      monto: 45000,
      estado: 'Pendiente',
      moneda: 'USD'
    },
    {
      id: 'FAC002',
      numero: 'F-2024-002',
      cliente: 'Global Mining',
      lote: 'Lote 2',
      fecha: '2024-01-20',
      vencimiento: '2024-02-20',
      monto: 32000,
      estado: 'Pagada',
      moneda: 'USD'
    }
  ];

  const informesData = [
    {
      id: 'INF001',
      tipo: 'Ambiental',
      titulo: 'Informe de Impacto Ambiental - Pesrania A',
      fecha: '2024-01-15',
      autor: 'Dr. María González',
      estado: 'Completado',
      archivo: 'inf_ambiental_2024_001.pdf'
    },
    {
      id: 'INF002',
      tipo: 'Trabajo',
      titulo: 'Reporte Mensual de Operaciones',
      fecha: '2024-01-20',
      autor: 'Ing. Carlos Mendoza',
      estado: 'En Revisión',
      archivo: 'rep_trabajo_enero_2024.pdf'
    }
  ];

  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'Aprobado': return '#10b981';
      case 'Pendiente': return '#f59e0b';
      case 'Revisando': return '#3b82f6';
      case 'Pagada': return '#10b981';
      case 'Completado': return '#10b981';
      case 'En Revisión': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getPrioridadColor = (prioridad) => {
    switch (prioridad) {
      case 'alta': return '#ef4444';
      case 'media': return '#f59e0b';
      case 'baja': return '#10b981';
      default: return '#6b7280';
    }
  };

  return (
    <div className="administracion">
      <div className="administracion-header">
        <div className="header-content">
          <div className="header-title">
            <FileText size={32} />
            <h1>Administración y Revisión</h1>
          </div>
          <p>Gestión de revisiones, facturas e informes de entrega</p>
        </div>
      </div>

      <div className="administracion-content">
        <div className="tabs-navigation">
          <button 
            className={`tab-btn ${activeTab === 'revisiones' ? 'active' : ''}`}
            onClick={() => setActiveTab('revisiones')}
          >
            <CheckCircle size={20} />
            Revisiones
          </button>
          <button 
            className={`tab-btn ${activeTab === 'facturas' ? 'active' : ''}`}
            onClick={() => setActiveTab('facturas')}
          >
            <DollarSign size={20} />
            Facturas
          </button>
          <button 
            className={`tab-btn ${activeTab === 'informes' ? 'active' : ''}`}
            onClick={() => setActiveTab('informes')}
          >
            <FileCheck size={20} />
            Informes
          </button>
        </div>

        {activeTab === 'revisiones' && (
          <div className="tab-content">
            <div className="section-header">
              <h2>Revisiones de Entrega</h2>
              <button className="add-btn">
                <Upload size={20} />
                Nueva Revisión
              </button>
            </div>

            <div className="revisiones-grid">
              {revisionesData.map(revision => (
                <div key={revision.id} className="revision-card">
                  <div className="card-header">
                    <div className="revision-info">
                      <h3>{revision.tipo} - {revision.id}</h3>
                      <span className="lote-badge">{revision.lote}</span>
                    </div>
                    <div className="status-badges">
                      <span 
                        className="estado-badge"
                        style={{ backgroundColor: getEstadoColor(revision.estado) }}
                      >
                        {revision.estado}
                      </span>
                      <span 
                        className="prioridad-badge"
                        style={{ backgroundColor: getPrioridadColor(revision.prioridad) }}
                      >
                        {revision.prioridad.toUpperCase()}
                      </span>
                    </div>
                  </div>

                  <div className="revision-details">
                    <div className="detail-row">
                      <span className="label">Cliente:</span>
                      <span className="value">{revision.cliente}</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="label">Fecha:</span>
                      <span className="value">
                        <Calendar size={14} />
                        {new Date(revision.fecha).toLocaleDateString()}
                      </span>
                    </div>
                    
                    {revision.monto > 0 && (
                      <div className="detail-row">
                        <span className="label">Monto:</span>
                        <span className="value monto">${revision.monto.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="documentos-section">
                    <h4>Documentos:</h4>
                    <div className="documentos-list">
                      {revision.documentos.map((doc, index) => (
                        <span key={index} className="documento-item">
                          <FileText size={14} />
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="card-actions">
                    <button className="action-btn primary">
                      <Eye size={16} />
                      Revisar
                    </button>
                    <button className="action-btn secondary">
                      <Edit size={16} />
                      Editar
                    </button>
                    <button className="action-btn tertiary">
                      <Download size={16} />
                      Descargar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'facturas' && (
          <div className="tab-content">
            <div className="section-header">
              <h2>Gestión de Facturas</h2>
              <button className="add-btn">
                <FileText size={20} />
                Nueva Factura
              </button>
            </div>

            <div className="facturas-table">
              <div className="table-header">
                <div className="table-row">
                  <div className="col">Número</div>
                  <div className="col">Cliente</div>
                  <div className="col">Lote</div>
                  <div className="col">Fecha</div>
                  <div className="col">Vencimiento</div>
                  <div className="col">Monto</div>
                  <div className="col">Estado</div>
                  <div className="col">Acciones</div>
                </div>
              </div>
              
              <div className="table-body">
                {facturasData.map(factura => (
                  <div key={factura.id} className="table-row">
                    <div className="col">
                      <span className="factura-numero">{factura.numero}</span>
                    </div>
                    <div className="col">{factura.cliente}</div>
                    <div className="col">
                      <span className="lote-badge">{factura.lote}</span>
                    </div>
                    <div className="col">
                      {new Date(factura.fecha).toLocaleDateString()}
                    </div>
                    <div className="col">
                      {new Date(factura.vencimiento).toLocaleDateString()}
                    </div>
                    <div className="col monto">
                      ${factura.monto.toLocaleString()} {factura.moneda}
                    </div>
                    <div className="col">
                      <span 
                        className="estado-badge"
                        style={{ backgroundColor: getEstadoColor(factura.estado) }}
                      >
                        {factura.estado}
                      </span>
                    </div>
                    <div className="col">
                      <div className="action-buttons">
                        <button className="action-btn small">
                          <Eye size={14} />
                        </button>
                        <button className="action-btn small">
                          <Download size={14} />
                        </button>
                        <button className="action-btn small">
                          <Edit size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'informes' && (
          <div className="tab-content">
            <div className="section-header">
              <h2>Informes y Documentación</h2>
              <button className="add-btn">
                <Upload size={20} />
                Subir Informe
              </button>
            </div>

            <div className="informes-grid">
              {informesData.map(informe => (
                <div key={informe.id} className="informe-card">
                  <div className="card-header">
                    <div className="informe-info">
                      <h3>{informe.titulo}</h3>
                      <span className={`tipo-badge ${informe.tipo.toLowerCase()}`}>
                        {informe.tipo}
                      </span>
                    </div>
                    <span 
                      className="estado-badge"
                      style={{ backgroundColor: getEstadoColor(informe.estado) }}
                    >
                      {informe.estado}
                    </span>
                  </div>

                  <div className="informe-details">
                    <div className="detail-row">
                      <span className="label">Autor:</span>
                      <span className="value">{informe.autor}</span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="label">Fecha:</span>
                      <span className="value">
                        <Calendar size={14} />
                        {new Date(informe.fecha).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="detail-row">
                      <span className="label">Archivo:</span>
                      <span className="value archivo">
                        <FileText size={14} />
                        {informe.archivo}
                      </span>
                    </div>
                  </div>

                  <div className="card-actions">
                    <button className="action-btn primary">
                      <Eye size={16} />
                      Ver
                    </button>
                    <button className="action-btn secondary">
                      <Download size={16} />
                      Descargar
                    </button>
                    <button className="action-btn tertiary">
                      <Edit size={16} />
                      Editar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="administracion-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div className="stat-content">
            <h3>Revisiones Pendientes</h3>
            <span className="stat-number">
              {revisionesData.filter(r => r.estado === 'Pendiente').length}
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3>Facturas Pendientes</h3>
            <span className="stat-number">
              ${facturasData.filter(f => f.estado === 'Pendiente').reduce((acc, f) => acc + f.monto, 0).toLocaleString()}
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <FileCheck size={24} />
          </div>
          <div className="stat-content">
            <h3>Informes Completados</h3>
            <span className="stat-number">
              {informesData.filter(i => i.estado === 'Completado').length}
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <h3>Eficiencia</h3>
            <span className="stat-number">94%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Administracion;
