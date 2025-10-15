import React from 'react';
import { CheckCircle, AlertTriangle, Info, AlertCircle } from 'lucide-react';
import './RecentActivity.css';

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'success',
      title: 'Proceso de extracción completado',
      time: 'Hace 15 minutos',
      icon: <CheckCircle size={20} />
    },
    {
      id: 2,
      type: 'warning',
      title: 'Mantenimiento programado - Equipo #12',
      time: 'Hace 1 hora',
      icon: <AlertTriangle size={20} />
    },
    {
      id: 3,
      type: 'info',
      title: 'Nuevo turno iniciado',
      time: 'Hace 2 horas',
      icon: <Info size={20} />
    },
    {
      id: 4,
      type: 'success',
      title: 'Carga completada - 150 toneladas',
      time: 'Hace 3 horas',
      icon: <CheckCircle size={20} />
    },
    {
      id: 5,
      type: 'error',
      title: 'Alerta de temperatura - Equipo #8',
      time: 'Hace 4 horas',
      icon: <AlertCircle size={20} />
    }
  ];

  return (
    <div className="recent-activity">
      <div className="activity-header">
        <h3>Actividad Reciente</h3>
        <button className="view-all-btn">Ver todo</button>
      </div>
      
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className={`activity-item ${activity.type}`}>
            <div className="activity-icon">
              {activity.icon}
            </div>
            <div className="activity-content">
              <p className="activity-title">{activity.title}</p>
              <span className="activity-time">{activity.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
