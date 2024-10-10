// src/pages/HomePage.js
import React from 'react';
import './HomePage.css'; // Make sure to import the CSS file

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero">
        <h1>Welcome to the Health Portal</h1>
        <p>Your one-stop destination for health management</p>
        <button className="cta-button">Get Started</button>
      </header>
      <section className="features">
        <h2>Features</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Appointment Scheduling</h3>
            <p>Schedule your appointments with ease.</p>
          </div>
          <div className="feature-item">
            <h3>Telehealth Services</h3>
            <p>Connect with healthcare providers remotely.</p>
          </div>
          <div className="feature-item">
            <h3>Health Metrics Tracking</h3>
            <p>Track your health metrics and progress.</p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Health Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
