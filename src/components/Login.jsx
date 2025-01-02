import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Ensure `users` exists in localStorage
  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify([]));
  }

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the users list from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find a matching user
    const user = storedUsers.find((u) => u.email === email);

    if (!user) {
      setError('Email not found. Please register first.');
      return;
    }

    if (user.password !== password) {
      setError('Invalid password.');
      return;
    }

    // Login successful
    localStorage.setItem('user', JSON.stringify({ fullName: 'kevil', email }));
    setError('');
    navigate('/dashboard'); // Redirect to dashboard
  };

  const handleRegister = () => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if user already exists
    if (storedUsers.find((u) => u.email === email)) {
      setError('Email already registered. Please login.');
      return;
    }

    // Add new user to the users list
    storedUsers.push({ email, password });
    localStorage.setItem('users', JSON.stringify(storedUsers));
    setError('Registration successful! Please login.');
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Welcome</h1>
      </div>
      <div className="auth-right">
        <h2>Login to your Account</h2>
        <form className="auth-form" onSubmit={handleLogin}>
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
          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Not Registered Yet?</p>
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default Login;

