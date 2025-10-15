import React from 'react';
import { 
  BarChart3, 
  Settings, 
  Microscope, 
  Users, 
  Cog 
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ activeModule, setActiveModule, isOpen, onClose }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Operaciones', icon: BarChart3 },
    { id: 'laboratorio', label: 'Laboratorio', icon: Microscope },
    { id: 'procesos', label: 'Procesos', icon: Settings },
    { id: 'administracion', label: 'Administración', icon: Cog },
    { id: 'clientes', label: 'Clientes', icon: Users }
  ];

  const handleModuleClick = (moduleId) => {
    setActiveModule(moduleId);
    // Navegar a la sección correspondiente
    const section = moduleId === 'dashboard' ? '' : `#${moduleId}`;
    window.location.hash = section;
    if (onClose) onClose(); // Cerrar sidebar en móvil al seleccionar módulo
  };

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h3>Módulos de Gestión</h3>
      </div>
      
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map(item => (
            <li key={item.id}>
              <button
                className={`nav-item ${activeModule === item.id ? 'active' : ''}`}
                onClick={() => handleModuleClick(item.id)}
              >
                <span className="nav-icon">
                  <item.icon size={20} />
                </span>
                <span className="nav-label">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="sidebar-footer">
        <div className="company-info">
          <p>© 2024 Aura 360° Mining</p>
          <p>Gestión Minera Integral</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
