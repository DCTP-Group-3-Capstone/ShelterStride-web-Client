// Dashboard.jsx
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Sidebar from './Menubar';
import Profile from './Profile';
import Rental from './Rental';
import EmploymentDetails from './EmploymentDetails';
import Guarantor from './Guarantor';
// Import other page components

const Dashboard = () => {
  return (
 
      <div className="dashboard">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Rental" element={<Rental />} />
            <Route path="/EmploymentDetails" element={<EmploymentDetails />} />
            <Route path="/Guarantor" element={<Guarantor />} />
            {/* Add routes for other pages */}
          </Routes>
        </div>
      </div>
 
  );
};

export default Dashboard;
