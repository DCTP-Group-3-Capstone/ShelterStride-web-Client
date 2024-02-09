// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.scss';

const Sidebar = () => {
  return (
     <div className="sidebar">
    <ul>
      <li><Link to="/dashboard/Profile">Profile</Link></li>
      <li><Link to="/dashboard/Rental">Rental History</Link></li>
      <li><Link to="/dashboard/EmploymentDetails">Employment Details</Link></li>
      <li><Link to="/dashboard/Guarantor">Guarantor</Link></li>
      <li><Link to="/dashboard/page2">Documents</Link></li>

    </ul>
  </div>
  );
};

export default Sidebar;
