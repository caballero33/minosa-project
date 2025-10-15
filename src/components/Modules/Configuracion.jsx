import React, { useState } from 'react';
import { 
  Settings, 
  Save, 
  User, 
  Shield, 
  Bell, 
  Database, 
  Users,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';
import './Configuracion.css';

const Configuracion = () => {
  const [activeTab, setActiveTab] = useState('perfil');
  const [formData, setFormData] = useState({
    nombre: 'Admin',
    email: 'admin@minosa.com',
    telefono: '+51 987 654 321',
    notificaciones: true,
    tema: 'claro',
    idioma: 'es',
    privacidad: 'privado',
    backupAutomatico: true,
    frecuenciaBackup: 'diario',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la configuración
    alert('Configuración guardada correctamente');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'perfil':
        return (
          <div className="config-section">
            <h3>Información del Perfil</h3>
            <div className="form-group">
              <label>Nombre</label>
              <input 
                type="text" 
                name="nombre" 
                value={formData.nombre} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleInputChange} 
              />
            </div>
            <div className="form-group">
              <label>Teléfono</label>
              <input 
                type="tel" 
                name="telefono" 
                value={formData.telefono} 
                onChange={handleInputChange} 
              />
            </div>
          </div>
        );
      
      case 'seguridad':
        return (
          <div className="config-section">
            <h3>Seguridad</h3>
            <div className="security-status">
              <div className="security-item">
                <Shield size={20} />
                <span>Autenticación de dos factores: </span>
                <span className="status-badge active">Activada</span>
              </div>
              <div className="security-item">
                <AlertCircle size={20} />
                <span>Último inicio de sesión: </span>
                <span>Hoy a las 10:30 AM</span>
              </div>
              <div className="security-item">
                <CheckCircle size={20} />
                <span>Contraseña: </span>
                <span>Último cambio hace 30 días</span>
                <button className="btn-change">Cambiar contraseña</button>
              </div>
            </div>
            
            <div className="sessions">
              <h4>Sesiones activas</h4>
              <div className="session-item">
                <div>
                  <strong>Chrome - Windows 10</strong>
                  <p>192.168.1.5 - Lima, PE</p>
                </div>
                <button className="btn-logout">Cerrar sesión</button>
              </div>
            </div>
          </div>
        );
      
      case 'notificaciones':
        return (
          <div className="config-section">
            <h3>Preferencias de Notificación</h3>
            <div className="notification-preference">
              <label className="switch">
                <input 
                  type="checkbox" 
                  name="notificaciones" 
                  checked={formData.notificaciones} 
                  onChange={handleInputChange} 
                />
                <span className="slider"></span>
              </label>
              <span>Recibir notificaciones por correo electrónico</span>
            </div>
            
            <div className="notification-types">
              <h4>Tipo de notificaciones</h4>
              <div className="notification-item">
                <input type="checkbox" id="notif1" defaultChecked />
                <label htmlFor="notif1">Alertas del sistema</label>
              </div>
              <div className="notification-item">
                <input type="checkbox" id="notif2" defaultChecked />
                <label htmlFor="notif2">Actualizaciones de estado</label>
              </div>
              <div className="notification-item">
                <input type="checkbox" id="notif3" defaultChecked />
                <label htmlFor="notif3">Recordatorios</label>
              </div>
            </div>
          </div>
        );
      
      case 'sistema':
        return (
          <div className="config-section">
            <h3>Configuración del Sistema</h3>
            <div className="form-group">
              <label>Tema</label>
              <select 
                name="tema" 
                value={formData.tema} 
                onChange={handleInputChange}
              >
                <option value="claro">Claro</option>
                <option value="oscuro">Oscuro</option>
                <option value="sistema">Usar configuración del sistema</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Idioma</label>
              <select 
                name="idioma" 
                value={formData.idioma} 
                onChange={handleInputChange}
              >
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="pt">Português</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Privacidad</label>
              <select 
                name="privacidad" 
                value={formData.privacidad} 
                onChange={handleInputChange}
              >
                <option value="publico">Público</option>
                <option value="privado">Privado</option>
                <option value="solo_yo">Solo yo</option>
              </select>
            </div>
            
            <div className="backup-settings">
              <h4>Respaldo de Datos</h4>
              <div className="form-group">
                <label className="switch">
                  <input 
                    type="checkbox" 
                    name="backupAutomatico" 
                    checked={formData.backupAutomatico} 
                    onChange={handleInputChange} 
                  />
                  <span className="slider"></span>
                </label>
                <span>Respaldos automáticos</span>
              </div>
              
              {formData.backupAutomatico && (
                <div className="form-group">
                  <label>Frecuencia de respaldo</label>
                  <select 
                    name="frecuenciaBackup" 
                    value={formData.frecuenciaBackup} 
                    onChange={handleInputChange}
                  >
                    <option value="diario">Diario</option>
                    <option value="semanal">Semanal</option>
                    <option value="mensual">Mensual</option>
                  </select>
                </div>
              )}
              
              <button className="btn-backup">
                <Database size={16} />
                Realizar copia de seguridad ahora
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="configuracion-container">
      <div className="config-header">
        <h1><Settings size={28} /> Configuración</h1>
        <p>Administra las preferencias y configuraciones de tu cuenta</p>
      </div>
      
      <div className="config-layout">
        <div className="config-sidebar">
          <button 
            className={`sidebar-item ${activeTab === 'perfil' ? 'active' : ''}`}
            onClick={() => setActiveTab('perfil')}
          >
            <User size={18} />
            Perfil
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'seguridad' ? 'active' : ''}`}
            onClick={() => setActiveTab('seguridad')}
          >
            <Shield size={18} />
            Seguridad
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'notificaciones' ? 'active' : ''}`}
            onClick={() => setActiveTab('notificaciones')}
          >
            <Bell size={18} />
            Notificaciones
          </button>
          <button 
            className={`sidebar-item ${activeTab === 'sistema' ? 'active' : ''}`}
            onClick={() => setActiveTab('sistema')}
          >
            <Settings size={18} />
            Sistema
          </button>
        </div>
        
        <div className="config-content">
          <form onSubmit={handleSubmit}>
            {renderTabContent()}
            <div className="form-actions">
              <button type="button" className="btn-cancel">
                <XCircle size={18} />
                Cancelar
              </button>
              <button type="submit" className="btn-save">
                <Save size={18} />
                Guardar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Configuracion;
