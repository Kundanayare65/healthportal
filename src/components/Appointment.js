import React, { useState } from "react";
import './Appointment.css'; // Assuming you will create this CSS file

const Appointment = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleAppointment = (e) => {
    e.preventDefault();
    alert(`Appointment scheduled for ${date} at ${time}`);
    // Save appointment to your backend or state
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="max-w-md w-full item-center p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-extrabold text-center item-center text-gray-800 mb-8">Schedule an Appointment</h2>
        <form onSubmit={handleAppointment} className="space-y-6">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date (dd/mm/yyyy)</label>
            <input 
              type="date" 
              id="date" 
              onChange={(e) => setDate(e.target.value)} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">Select Time</label>
            <input 
              type="time" 
              id="time" 
              onChange={(e) => setTime(e.target.value)} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Schedule
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
