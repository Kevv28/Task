import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Web App!</h1>
      <p>Build, manage, and explore your ideas with ease.</p>
      <Link to="/about" className="explore-button">About Us</Link>
      <Link to="/dashboard" className="explore-button">Go to Dashboard</Link>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;


