import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import useHistory hook for navigation
import useAuth from '../hooks/useAuth'; // Import custom hook

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { login } = useAuth(); // Initialize useAuth hook to handle authentication
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/signin', formData);
      if (response && response.data && response.data.token) {
        login(response.data.token); // Call login function from useAuth hook
        navigate('/dashbord');
      } else {
        setError('Invalid response from server');
      }
    } catch (error) {
      console.error('Sign-in Error:', error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg">
        <h2 className="text-2xl mb-4">Sign In</h2>
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
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Sign In</button>
        </form>
        <p className="mt-4">Don't have an account? <Link to="/signup" className="text-blue-500">Sign Up</Link></p>
      </div>
    </div>
  );
};

export default SignIn;
