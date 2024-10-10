import React, { useState } from "react";
import './HealthMetrics.css';

const HealthMetrics = () => {
  const [weight, setWeight] = useState("");
  const [bp, setBP] = useState("");
  const [heartRate, setHeartRate] = useState("");
  const [cholesterol, setCholesterol] = useState("");
  const [temperature, setTemperature] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!weight || !bp || !heartRate || !cholesterol || !temperature) {
      alert("Please fill out all fields.");
      return;
    }
    alert(`Weight: ${weight} kg, Blood Pressure: ${bp} mmHg, Heart Rate: ${heartRate} bpm, Cholesterol: ${cholesterol} mg/dL, Temperature: ${temperature} °C`);
    resetForm();
  };

  const resetForm = () => {
    setWeight("");
    setBP("");
    setHeartRate("");
    setCholesterol("");
    setTemperature("");
  };

  return (
    <div className="health-metrics">
      <h2>Health Metrics</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="number" 
          placeholder="Weight (kg)" 
          value={weight}
          onChange={(e) => setWeight(e.target.value)} 
          required 
          aria-label="Weight in kg"
        />
        <input 
          type="text" 
          placeholder="Blood Pressure (mmHg)" 
          value={bp}
          onChange={(e) => setBP(e.target.value)} 
          required 
          aria-label="Blood pressure in mmHg"
        />
        <input 
          type="number" 
          placeholder="Heart Rate (bpm)" 
          value={heartRate}
          onChange={(e) => setHeartRate(e.target.value)} 
          required 
          aria-label="Heart rate in bpm"
        />
        <input 
          type="number" 
          placeholder="Cholesterol (mg/dL)" 
          value={cholesterol}
          onChange={(e) => setCholesterol(e.target.value)} 
          required 
          aria-label="Cholesterol level in mg/dL"
        />
        <input 
          type="number" 
          placeholder="Temperature (°C)" 
          value={temperature}
          onChange={(e) => setTemperature(e.target.value)} 
          required 
          aria-label="Temperature in Celsius"
        />
        <button type="submit">Submit Metrics</button>
      </form>
    </div>
  );
};

export default HealthMetrics;
