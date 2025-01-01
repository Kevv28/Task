import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  
  const recentActivities = [
    { activity: "Logged in", time: "2 hours ago" },
    { activity: "Updated profile", time: "1 day ago" },
    { activity: "Created new project", time: "3 days ago" },
  ];

  const notifications = [
    { message: "New comment on your project", time: "5 mins ago" },
    { message: "Your password will expire in 2 days", time: "1 hour ago" },
    { message: "You have 3 pending tasks", time: "3 hours ago" },
  ];

  useEffect(() => {
 
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      
      navigate('/login');
    } else {
      
      setUserData(JSON.parse(loggedInUser)); 
    }
  }, [navigate]);

  const handleLogout = () => {
    
    localStorage.removeItem('user');
    navigate('/login'); 
  };

  if (!userData) {
    return null; 
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {userData.name}</h1>
        <p>{userData.role} | {userData.email}</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h2>Recent Activities</h2>
          <ul>
            {recentActivities.map((activity, index) => (
              <li key={index}>
                <strong>{activity.activity}</strong> - <span>{activity.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-section">
          <h2>Notifications</h2>
          <ul>
            {notifications.map((notification, index) => (
              <li key={index}>
                <span>{notification.message}</span> - <span>{notification.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
