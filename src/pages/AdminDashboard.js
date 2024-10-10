import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  // State variables to hold the statistics
  const [totalUsers, setTotalUsers] = useState(150);
  const [activeUsers, setActiveUsers] = useState(80);
  const [newRegistrations, setNewRegistrations] = useState(20);
  
  // State for patient entries
  const [patients, setPatients] = useState([]);
  const [patientName, setPatientName] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [patientCondition, setPatientCondition] = useState('');

  // Example function to update stats (for demonstration purposes)
  const updateStats = () => {
    setTotalUsers(totalUsers + 1);
    setActiveUsers(activeUsers + 1);
    setNewRegistrations(newRegistrations + 1);
  };

  // Function to handle patient entry submission
  const handlePatientSubmit = (e) => {
    e.preventDefault();
    if (patientName && patientAge && patientCondition) {
      const newPatient = {
        name: patientName,
        age: patientAge,
        condition: patientCondition,
      };
      setPatients([...patients, newPatient]);
      setPatientName('');
      setPatientAge('');
      setPatientCondition('');
    }
  };

  return (
    <section className="dashboard">
      <h1 className="dashboard-title">Admin Dashboard</h1>
      <div className="stats-section">
        <div className="stat-card">
          <h2>Total Users:</h2>
          <p className="stat-value">{totalUsers}</p>
        </div>
        <div className="stat-card">
          <h2>Active Users:</h2>
          <p className="stat-value">{activeUsers}</p>
        </div>
        <div className="stat-card">
          <h2>New Registrations:</h2>
          <p className="stat-value">{newRegistrations}</p>
        </div>
      </div>
      
      <form onSubmit={handlePatientSubmit} className="patient-entry-form">
        <h2>Add Patient Entry</h2>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Patient Age"
          value={patientAge}
          onChange={(e) => setPatientAge(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Condition"
          value={patientCondition}
          onChange={(e) => setPatientCondition(e.target.value)}
          required
        />
        <button type="submit">Add Patient</button>
      </form>

      <div className="patient-list">
        <h2>Patient List</h2>
        <ul>
          {patients.map((patient, index) => (
            <li key={index}>
              {patient.name}, Age: {patient.age}, Condition: {patient.condition}
            </li>
          ))}
        </ul>
      </div>

      <button onClick={updateStats} className="update-button">Update Stats</button>
    </section>
  );
};

export default AdminDashboard;
