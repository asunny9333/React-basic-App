import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/auth.css'; 
import { Link,useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      navigate('/signin');
    } catch (error) {
      setError('Error signing up. Please try again.');
      console.error('Error signing up:', error);
    }
  };


  return (
    <div className="auth-page">
      <h2>ShopEase</h2>
      <p>Discover, shop, and elevate your lifestyle with us.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
        {error && <p className="error-message">{error}</p>} 
      </form>
      <div className="signin-redirect">
        <p>Already have an account?<Link to="/signin"> Sign in here</Link></p>
      </div>
    </div>
  );
};

export default SignUpPage;
