import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Dummy user database
  const users = [
    {
      email: 'test@example.com',
      password: 'password123',
    },
    {
      email: 'user@example.com',
      password: 'userpass',
    },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Find user in the dummy database
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // If user exists and credentials match
      localStorage.setItem('user', JSON.stringify({ email }));
      setError(''); // Clear any previous error
      navigate('/dashboard'); // Navigate to the dashboard
    } else {
      // If credentials are invalid
      setError('Invalid email or password.');
    }
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
          {error && <p className="error-message">{error}</p>} {/* Display error */}
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
          <a href="/register">
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
