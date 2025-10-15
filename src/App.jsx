import React, { useState, useEffect } from 'react';
import Login from './components/Auth/Login';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import Procesos from './components/Modules/Procesos';
import Laboratorio from './components/Modules/Laboratorio';
import Administracion from './components/Modules/Administracion';
import Clientes from './components/Modules/Clientes';
import Equipos from './components/Modules/Equipos';
import Reportes from './components/Modules/Reportes';
import Configuracion from './components/Modules/Configuracion';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModule, setActiveModule] = useState(() => {
    // Obtener el módulo activo del hash o usar 'dashboard' por defecto
    const hash = window.location.hash.replace('#', '');
    return hash || 'dashboard';
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Manejar cambios en el hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveModule(hash);
      } else {
        setActiveModule('dashboard');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveModule('dashboard');
    setIsSidebarOpen(false);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Mostrar login si no está autenticado
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

      const renderModule = () => {
        switch (activeModule) {
          case 'dashboard':
            return <Dashboard />;
          case 'procesos':
            return <Procesos />;
          case 'laboratorio':
            return <Laboratorio />;
          case 'administracion':
            return <Administracion />;
          case 'clientes':
            return <Clientes />;
          case 'equipos':
            return <Equipos />;
          case 'reportes':
            return <Reportes />;
          case 'configuracion':
            return <Configuracion />;
          default:
            return <Dashboard />;
        }
      };

  return (
    <div className="App">
      <Header 
        onLogout={handleLogout} 
        onToggleSidebar={handleToggleSidebar}
      />
      <div className="app-layout">
        <Sidebar 
          activeModule={activeModule} 
          setActiveModule={setActiveModule}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        {isSidebarOpen && (
          <div 
            className="sidebar-overlay" 
            onClick={() => setIsSidebarOpen(false)}
          />
        )}
        <main className="main-content">
          {renderModule()}
        </main>
      </div>
    </div>
  );
}

export default App;
