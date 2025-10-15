import React, { useState } from 'react';
import { 
  Users, 
  Package, 
  Calendar, 
  DollarSign,
  Search,
  Filter,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  Star,
  MapPin,
  Phone,
  Mail,
  Building,
  TrendingUp
} from 'lucide-react';
import './Clientes.css';

const Clientes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('todos');
  const [selectedClient, setSelectedClient] = useState(null);

  const clientesData = [
    {
      id: 'CLI001',
      nombre: 'Minerals Corp',
      contacto: 'John Smith',
      email: 'john@mineralscorp.com',
      telefono: '+1-555-0123',
      direccion: '123 Mining Ave, Denver, CO',
      tipo: 'Corporativo',
      rating: 4.8,
      status: 'Activo',
      fechaRegistro: '2023-06-15',
      pedidosTotales: 45,
      valorTotal: 1250000,
      mineralesPreferidos: ['Cobre', 'Oro', 'Plata'],
      pedidosPendientes: [
        {
          id: 'PED001',
          mineral: 'Cobre',
          cantidad: 500,
          unidad: 'kg',
          pureza: '≥98%',
          fechaSolicitud: '2024-01-20',
          fechaEntrega: '2024-02-15',
          status: 'En Proceso',
          prioridad: 'alta',
          lote: 'Lote 3'
        },
        {
          id: 'PED002',
          mineral: 'Oro',
          cantidad: 10,
          unidad: 'kg',
          pureza: '≥99%',
          fechaSolicitud: '2024-01-22',
          fechaEntrega: '2024-02-20',
          status: 'Pendiente',
          prioridad: 'alta',
          lote: 'Lote 4'
        }
      ]
    },
    {
      id: 'CLI002',
      nombre: 'Global Mining Solutions',
      contacto: 'Maria García',
      email: 'maria@gms.com',
      telefono: '+1-555-0456',
      direccion: '456 Industrial Blvd, Phoenix, AZ',
      tipo: 'Corporativo',
      rating: 4.6,
      status: 'Activo',
      fechaRegistro: '2023-08-10',
      pedidosTotales: 32,
      valorTotal: 890000,
      mineralesPreferidos: ['Hierro', 'Zinc'],
      pedidosPendientes: [
        {
          id: 'PED003',
          mineral: 'Hierro',
          cantidad: 1000,
          unidad: 'kg',
          pureza: '≥95%',
          fechaSolicitud: '2024-01-18',
          fechaEntrega: '2024-02-10',
          status: 'Confirmado',
          prioridad: 'media',
          lote: 'Lote 2'
        }
      ]
    },
    {
      id: 'CLI003',
      nombre: 'Eco Minerals Ltd',
      contacto: 'David Chen',
      email: 'david@ecominerals.com',
      telefono: '+1-555-0789',
      direccion: '789 Green Street, Seattle, WA',
      tipo: 'Sostenible',
      rating: 4.9,
      status: 'Activo',
      fechaRegistro: '2023-09-05',
      pedidosTotales: 18,
      valorTotal: 420000,
      mineralesPreferidos: ['Plata', 'Cobre'],
      pedidosPendientes: [
        {
          id: 'PED004',
          mineral: 'Plata',
          cantidad: 200,
          unidad: 'kg',
          pureza: '≥97%',
          fechaSolicitud: '2024-01-25',
          fechaEntrega: '2024-02-25',
          status: 'Solicitado',
          prioridad: 'baja',
          lote: 'Lote 5'
        }
      ]
    }
  ];

  const filteredClientes = clientesData.filter(cliente => {
    const matchesSearch = cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cliente.contacto.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'todos' || cliente.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Activo': return '#10b981';
      case 'Inactivo': return '#6b7280';
      case 'Pendiente': return '#f59e0b';
      default: return '#6b7280';
    }
  };

  const getPedidoStatusColor = (status) => {
    switch (status) {
      case 'En Proceso': return '#3b82f6';
      case 'Confirmado': return '#10b981';
      case 'Pendiente': return '#f59e0b';
      case 'Solicitado': return '#6b7280';
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
    <div className="clientes">
      <div className="clientes-header">
        <div className="header-content">
          <div className="header-title">
            <Users size={32} />
            <h1>Gestión de Clientes</h1>
          </div>
          <p>Administración de clientes y peticiones de minerales</p>
        </div>
      </div>

      <div className="clientes-content">
        <div className="controls-section">
          <div className="search-box">
            <Search size={20} />
            <input
              type="text"
              placeholder="Buscar cliente o contacto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="filter-box">
            <Filter size={20} />
            <select 
              value={filterStatus} 
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="todos">Todos los Estados</option>
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
              <option value="pendiente">Pendiente</option>
            </select>
          </div>

          <button className="add-btn">
            <Users size={20} />
            Nuevo Cliente
          </button>
        </div>

        <div className="clientes-grid">
          {filteredClientes.map(cliente => (
            <div key={cliente.id} className="cliente-card">
              <div className="card-header">
                <div className="cliente-info">
                  <div className="cliente-name">
                    <h3>{cliente.nombre}</h3>
                    <div className="rating">
                      <Star size={16} />
                      <span>{cliente.rating}</span>
                    </div>
                  </div>
                  <span className="tipo-badge">{cliente.tipo}</span>
                </div>
                <span 
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(cliente.status) }}
                >
                  {cliente.status}
                </span>
              </div>

              <div className="cliente-details">
                <div className="detail-row">
                  <Users size={16} />
                  <span className="label">Contacto:</span>
                  <span className="value">{cliente.contacto}</span>
                </div>
                
                <div className="detail-row">
                  <Mail size={16} />
                  <span className="label">Email:</span>
                  <span className="value">{cliente.email}</span>
                </div>
                
                <div className="detail-row">
                  <Phone size={16} />
                  <span className="label">Teléfono:</span>
                  <span className="value">{cliente.telefono}</span>
                </div>
                
                <div className="detail-row">
                  <MapPin size={16} />
                  <span className="label">Dirección:</span>
                  <span className="value">{cliente.direccion}</span>
                </div>
                
                <div className="detail-row">
                  <Calendar size={16} />
                  <span className="label">Registro:</span>
                  <span className="value">
                    {new Date(cliente.fechaRegistro).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <div className="cliente-stats">
                <div className="stat-item">
                  <Package size={16} />
                  <div className="stat-content">
                    <span className="stat-number">{cliente.pedidosTotales}</span>
                    <span className="stat-label">Pedidos</span>
                  </div>
                </div>
                
                <div className="stat-item">
                  <DollarSign size={16} />
                  <div className="stat-content">
                    <span className="stat-number">${(cliente.valorTotal / 1000).toFixed(0)}K</span>
                    <span className="stat-label">Valor Total</span>
                  </div>
                </div>
              </div>

              <div className="minerales-preferidos">
                <h4>Minerales Preferidos:</h4>
                <div className="minerales-list">
                  {cliente.mineralesPreferidos.map((mineral, index) => (
                    <span key={index} className="mineral-tag">
                      {mineral}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pedidos-pendientes">
                <h4>Pedidos Pendientes ({cliente.pedidosPendientes.length}):</h4>
                {cliente.pedidosPendientes.map(pedido => (
                  <div key={pedido.id} className="pedido-item">
                    <div className="pedido-header">
                      <span className="pedido-id">{pedido.id}</span>
                      <span 
                        className="prioridad-badge"
                        style={{ backgroundColor: getPrioridadColor(pedido.prioridad) }}
                      >
                        {pedido.prioridad.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="pedido-details">
                      <span className="mineral">{pedido.mineral}</span>
                      <span className="cantidad">{pedido.cantidad} {pedido.unidad}</span>
                      <span className="pureza">{pedido.pureza}</span>
                    </div>
                    
                    <div className="pedido-status">
                      <span 
                        className="status-text"
                        style={{ color: getPedidoStatusColor(pedido.status) }}
                      >
                        {pedido.status}
                      </span>
                      <span className="lote">{pedido.lote}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-actions">
                <button className="action-btn primary">
                  <Eye size={16} />
                  Ver Detalles
                </button>
                <button className="action-btn secondary">
                  <Package size={16} />
                  Nuevo Pedido
                </button>
                <button className="action-btn tertiary">
                  <TrendingUp size={16} />
                  Historial
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredClientes.length === 0 && (
          <div className="no-results">
            <Users size={48} />
            <h3>No se encontraron clientes</h3>
            <p>Intenta ajustar los filtros de búsqueda</p>
          </div>
        )}
      </div>

      <div className="clientes-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Clientes</h3>
            <span className="stat-number">{clientesData.length}</span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Package size={24} />
          </div>
          <div className="stat-content">
            <h3>Pedidos Activos</h3>
            <span className="stat-number">
              {clientesData.reduce((acc, cliente) => acc + cliente.pedidosPendientes.length, 0)}
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3>Valor Total</h3>
            <span className="stat-number">
              ${(clientesData.reduce((acc, cliente) => acc + cliente.valorTotal, 0) / 1000000).toFixed(1)}M
            </span>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Star size={24} />
          </div>
          <div className="stat-content">
            <h3>Rating Promedio</h3>
            <span className="stat-number">
              {(clientesData.reduce((acc, cliente) => acc + cliente.rating, 0) / clientesData.length).toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientes;
