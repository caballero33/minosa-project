import React, { useState } from 'react';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simular proceso de login
    setTimeout(() => {
      setIsLoading(false);
      onLogin();
    }, 1500);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="login-card">
          <div className="login-header">
            <div className="logo-section">
              <div className="logo">
                <span className="logo-text">aura</span>
                <span className="logo-subtitle">360° MINING</span>
              </div>
            </div>
            <h1>Sistema de Gestión Minera</h1>
            <p>Accede a tu panel de control</p>
            <div className="decorative-line"></div>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <button 
              type="submit" 
              className={`login-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="loading-spinner"></div>
              ) : (
                'Login'
              )}
            </button>

            <div className="form-group">
              <div className="input-container">
                <User className="input-icon" size={20} />
                <input
                  type="text"
                  name="username"
                  placeholder="Usuario"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <Lock className="input-icon" size={20} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="form-footer">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Recordarme</label>
              </div>
              <a href="#" className="forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
          </form>
        </div>
      </div>

      <div className="login-right">
      </div>
    </div>
  );
};

export default Login;
