import React, { useState } from 'react';
import { LogOut, User } from 'lucide-react';
import './Header.css';

const Header = ({ onLogout, onToggleSidebar }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <div className="logo">
            <span className="logo-text">aura</span>
            <span className="logo-subtitle">360° MINING</span>
          </div>
          <div className="ceo-info">
            <span>Barbosa – CEO Aura</span>
          </div>
        </div>
        
        <nav className="nav">
          <button 
            className="menu-toggle"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (onToggleSidebar) onToggleSidebar();
            }}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#equipos">Equipos</a></li>
            <li><a href="#reportes">Reportes</a></li>
            <li><a href="#configuracion">Configuración</a></li>
          </ul>
          
          <div className="user-actions">
            <div className="user-info">
              <User size={18} />
              <span>Admin</span>
            </div>
            <button className="logout-btn" onClick={onLogout} title="Cerrar Sesión">
              <LogOut size={18} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
