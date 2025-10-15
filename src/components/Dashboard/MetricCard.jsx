import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './MetricCard.css';

const MetricCard = ({ title, value, unit, change, trend, icon, color }) => {
  return (
    <div className="metric-card">
      <div className="metric-header">
        <div className="metric-icon" style={{ backgroundColor: color }}>
          {icon}
        </div>
        <div className="metric-info">
          <h3>{title}</h3>
          <div className="metric-value">
            <span className="value">{value}</span>
            {unit && <span className="unit">{unit}</span>}
          </div>
        </div>
      </div>
      
      <div className="metric-footer">
        <span className={`change ${trend}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />} {change}
        </span>
        <span className="period">vs mes anterior</span>
      </div>
    </div>
  );
};

export default MetricCard;
