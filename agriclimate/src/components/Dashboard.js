import React from "react";
import TemperatureRainfallGraph from "./charts/TemperatureRainfallGraph";
// import CropGrowthGraph from "./charts/CropGrowthGraph";
// import WaterUsageGraph from "./charts/WaterUsageGraph";
// import ClimateImpactGraph from "./charts/ClimateImpactGraph";
// import YieldPredictionGraph from "./charts/YieldPredictionGraph";
import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">AgriClime Dashboard</h1>
      <p className="dashboard-description">
        Empowering Agriculture with Climate Intelligence
      </p>

      <div className="charts-container">
        <div className="chart-box">
          <h3>Temperature & Rainfall Trends</h3>
          <TemperatureRainfallGraph />
        </div>

        <div className="chart-box">
          <h3>Crop Growth vs. Climate Conditions</h3>
          {/* <CropGrowthGraph /> */}
        </div>

        <div className="chart-box">
          <h3>Water Usage vs. Crop Type</h3>
          {/* <WaterUsageGraph /> */}
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
