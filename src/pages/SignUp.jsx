import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import axios from 'axios';

const SignUp = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await axios.post('/api/auth/signup', formData);
      console.log('Sign-up successful');
      // Navigate to the dashboard upon successful sign-up
      navigate('/dashbord'); // Use navigate function to navigate
    } catch (error) {
      console.error('Sign-up Error:', error.response.data.error); // Log the error for debugging
      setError(error.response.data.error || 'An error occurred during sign-up');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-70">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Sign Up</button>
        </form>
        <p className="mt-4">Already have an account? <Link to="/signin" className="text-blue-500 hover:underline">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp;
