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
    { email: 'test@example.com', password: 'password123' },
    { email: 'user@example.com', password: 'userpass' },
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Logging the inputs for debugging
    console.log('Entered Email:', email);
    console.log('Entered Password:', password);

    // Find user by email
    const user = users.find((u) => u.email.trim().toLowerCase() === email.trim().toLowerCase());

    if (!user) {
      setError('Invalid email.');
      console.log('User not found.');
      return;
    }

    // Check if the password matches
    if (user.password !== password) {
      setError('Invalid password.');
      console.log('Password does not match.');
      return;
    }

    // Successful login
    localStorage.setItem('user', JSON.stringify({ email: user.email }));
    setError('');
    console.log('Login successful. Redirecting to dashboard...');
    navigate('/dashboard');
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
          <a href="/register">Create an account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

