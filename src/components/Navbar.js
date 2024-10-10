// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Health Portal</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/metrics">Health Metrics</Link></li>
        <li><Link to="/video-call">Video Call</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
