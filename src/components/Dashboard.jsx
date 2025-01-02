import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import About from './About';
import Home from './Home';

const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (!loggedInUser) {
      navigate('/login');
    } else {
      setUserData(JSON.parse(loggedInUser));
    }
  }, [navigate]);

  if (!userData) {
    return null;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, {userData.name}</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Dashboard;

