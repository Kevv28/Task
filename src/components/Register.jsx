import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    if (storedUsers.find((u) => u.email === email)) {
      setError('Email already registered. Please login.');
      setSuccess('');
      return;
    }

    // Add new user to the users list
    storedUsers.push({ email, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));

    setError('');
    setSuccess('Registration successful! Redirecting to login...');
    setTimeout(() => navigate('/login'), 2000); // Redirect after success
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Welcome</h1>
      </div>
      <div className="auth-right">
        <h2>Create an Account</h2>
        <form className="auth-form" onSubmit={handleRegister}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit">Register</button>
        </form>
        <p>
          Already Registered?{' '}
          <a href="/login">Login Here</a>
        </p>
      </div>
    </div>
  );
};

export default Register;

};

export default Register;

