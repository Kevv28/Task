import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ fullName, email }));
    setError('');
    navigate('/login'); // Navigate to login after successful registration
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <h1>Welcome to Our Community</h1>
        <p>Sign up to explore the best tools and resources to bring your ideas to life.</p>
      </div>
      <div className="auth-right">
        <h2>Create Your Account</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="link-button"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;

