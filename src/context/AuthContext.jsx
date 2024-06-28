// src/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const register = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === newUser.email);
    if (!existingUser) {
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      return true;
    }
    return false;
  };

  const login = (userData) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find((user) => user.email === userData.email && user.password === userData.password);
    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('user', JSON.stringify(existingUser));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
