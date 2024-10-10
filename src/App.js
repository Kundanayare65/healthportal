// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AdminDashboard from './pages/AdminDashboard';
import NotFound from './pages/NotFound';
import Appointment from './components/Appointment'; // Import the Appointment component
import HealthMetrics from './components/HealthMetrics'; // Import the HealthMetrics component
import VideoCall from './components/VideoCall'; // Import the VideoCall component
import './App.css'; // Import your CSS styles

const App = () => {
  return (
    <Router>
      <div className="app-container flex flex-col min-h-screen">
        <Navbar /> {/* Ensure Navbar is displayed on every page */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/appointments" element={<Appointment />} /> {/* Add this route */}
            <Route path="/metrics" element={<HealthMetrics />} /> {/* Add this route */}
            <Route path="/video-call" element={<VideoCall />} /> {/* Add this route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
