import React from 'react'
import SideNav from './components/SideNav';
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <SideNav />

      <div className="content">
        <h1>Content</h1>
      </div>
    </div>
  )
}

export default Dashboard