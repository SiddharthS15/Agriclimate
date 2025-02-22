import React from "react";
import TemperatureRainfallGraph from "./charts/TemperatureRainfallGraph";
import Temperature from "./charts/Temperature";
import Windspeed from "./charts/Windspeed";
// import AQI from "./charts/aqi";

// import CropGrowthGraph from "./charts/CropGrowthGraph";
// import WaterUsageGraph from "./charts/WaterUsageGraph";
// import ClimateImpactGraph from "./charts/ClimateImpactGraph";
// import YieldPredictionGraph from "./charts/YieldPredictionGraph";

import "../styles/dashboard.css";
import Humidity from "./charts/Humidity";
import AQI from "./charts/AQIgraph";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">AgriClime Dashboard</h1>
      <p className="dashboard-description">
        Empowering Agriculture with Climate Intelligence
      </p>

      <div className="charts-container">
        {/* Real-Time Temperature First */}
        <div className="chart-box">
          <h3>Real-Time Temperature</h3>
          <Temperature /> {/* This will plot the real-time temperature */}
        </div>

        {/* Other Chart Sections */}
        <div className="chart-box">
          <h3>Humidity</h3>
          <Humidity />
        </div>

        <div className="chart-box">
          <h3>Windspeed</h3>
          < Windspeed/>
        </div>

        <div className="chart-box">
          <h3>AQI</h3>
          <AQI />
        </div>

        <div className="chart-box">
          <h3>Climate Impact Risk Assessment</h3>
          {/* <ClimateImpactGraph /> */}
        </div>

        <div className="chart-box">
          <h3>Yield Prediction vs. Climate Variability</h3>
          {/* <YieldPredictionGraph /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
