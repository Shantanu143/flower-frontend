import SideNav from "./SideNav.jsx";
import { Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth.js";
// const DashbordLyout = () => {
//   const { isAuthenticated, logout } = useAuth();
//   const handleLogout = () => {
//     logout();
//   };
//   return (
   
//   );
// };

// export default DashbordLyout;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import custom hook

const DashbordLyout = () => {
  const { isAuthenticated, logout } = useAuth(); // Initialize useAuth hook to handle authentication
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

  return (
    <>
     <div className="flex gap-4 flex-col md:flex-row">
      <SideNav />

      <Outlet />
    </div>

    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h2 className="text-4xl mb-4">Welcome to Dashboard</h2>
        {isAuthenticated ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300">
            Logout
          </button>
        ) : (
          <p className="text-lg">Please sign in to access the dashboard</p>
        )}
      </div>
    </div>
    </>
  );
};

export default DashbordLyout;
