import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Web App!</h1>
      <p>Build, manage, and explore your ideas with ease.</p>
      <p>This is the home page of our app. Feel free to explore and learn more about what we offer.</p>
      <button className="explore-button" onClick={handleExplore}>
        Explore Now
      </button>
    </div>
  );
};

export default Home;
