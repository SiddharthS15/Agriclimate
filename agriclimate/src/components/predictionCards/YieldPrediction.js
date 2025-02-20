import React from 'react';

const YieldPrediction = ({ onBack }) => {
  return (
    <div className="prediction-form-container">
      <button className="back-button" onClick={onBack}>← Back</button>
      <h2>Yield Prediction</h2>
      <div className="placeholder-content">
        <p>Yield prediction form coming soon...</p>
      </div>
    </div>
  );
};

export default YieldPrediction;