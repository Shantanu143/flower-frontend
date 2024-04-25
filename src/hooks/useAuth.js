// useAuth.js
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const useAuth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = cookies.auth;
    if (token) {
      // If token exists in cookies, user is authenticated
      setIsAuthenticated(true);
    } else {
      // No token found, user is not authenticated
      setIsAuthenticated(false);
    }
  }, [cookies]);

  const login = (token) => {
    // Set token in cookies upon login
    setCookie('auth', token, { path: '/' });
    setIsAuthenticated(true);
  };

  const logout = () => {
    // Remove token from cookies upon logout
    removeCookie('auth', { path: '/' });
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};

export default useAuth;
