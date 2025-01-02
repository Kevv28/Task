import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const users = [
    { email: 'test@example.com', password: 'password123' },
    { email: 'user@example.com', password: 'userpass' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    const sanitizedEmail = email.trim();
    const sanitizedPassword = password.trim();

    const user = users.find(
      (u) => u.email.toLowerCase() === sanitizedEmail.toLowerCase() &&
             u.password === sanitizedPassword
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify({ email: sanitizedEmail }));
      setError('');
      navigate('/dashboard');
    } else {
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
