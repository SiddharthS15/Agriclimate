import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChartBar, faCalculator, faBell } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Website Name on the Left */}
      <div className="website-name">
        <span>AgriClimate Analytics</span>
      </div>

      <div className="navbar-items">
        <Link to="/" className="nav-item" data-tooltip="Home - Overview of climate insights">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
        <Link to="/dashboard" className="nav-item" data-tooltip="Dashboard - Graphs for temperature & rainfall">
          <FontAwesomeIcon icon={faChartBar} />
          <span>Dashboard</span>
        </Link>
        <Link to="/prediction" className="nav-item" data-tooltip="Prediction - Crop growth model analysis">
          <FontAwesomeIcon icon={faCalculator} />
          <span>Prediction</span>
        </Link>
        <Link to="/alerts" className="nav-item" data-tooltip="Alerts - Extreme weather warnings">
          <FontAwesomeIcon icon={faBell} />
          <span>Alerts</span>
        </Link>
        <Link to="/chatbot" className="nav-item" data-tooltip="Chat with AI" >
          <FontAwesomeIcon icon={faBell} />
          <span>Chat</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
