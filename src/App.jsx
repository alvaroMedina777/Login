// src/App.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Home from './componentes/Home';
import Login from './componentes/Login';
import SignUp from './componentes/SignUp';
import { AuthProvider, useAuth } from './context/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
};

export default App;
