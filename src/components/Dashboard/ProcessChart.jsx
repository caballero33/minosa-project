import React from 'react';
import './ProcessChart.css';

const ProcessChart = ({ processes }) => {
  return (
    <div className="process-chart">
      <div className="process-list">
        {processes.map((process, index) => (
          <div key={index} className="process-item">
            <div className="process-header">
              <h4>{process.name}</h4>
              <span className={`status ${process.status.toLowerCase()}`}>
                {process.status}
              </span>
            </div>
            
            <div className="progress-container">
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ width: `${process.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{process.progress}%</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="process-legend">
        <div className="legend-item">
          <span className="legend-color active"></span>
          <span>Activo</span>
        </div>
        <div className="legend-item">
          <span className="legend-color maintenance"></span>
          <span>Mantenimiento</span>
        </div>
        <div className="legend-item">
          <span className="legend-color stopped"></span>
          <span>Detenido</span>
        </div>
      </div>
    </div>
  );
};

export default ProcessChart;
