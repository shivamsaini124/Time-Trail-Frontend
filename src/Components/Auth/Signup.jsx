import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './authStyles.css';

const Signup = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });

  const handleSignup = (e) => {
    e.preventDefault();
    
    // Mock signup - replace with real API call
    if (formData.email && formData.password) {
      navigate('/');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSignup}>
        <input className='auth-input'
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input className='auth-input'
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input className='auth-input'
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input className='auth-input'
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <button type="submit">Sign Up</button>
      </form>
      <div className="auth-link">
        Already have an account? <a href="/login">Sign in</a>
      </div>
    </div>
  );
};

export default Signup;