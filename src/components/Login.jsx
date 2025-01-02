import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Find user by email
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
        <p>
          Not Registered Yet?{' '}
          <a href="/register">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


