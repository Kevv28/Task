import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';

const About = () => {
  return (
    <div className="about-container">
      <h1>About the Developer</h1>
      <p>Hi, I'm Kevil Rana, the developer of this web app.</p>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default About;
