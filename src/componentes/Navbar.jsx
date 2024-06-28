// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Mi App</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-link">Hola, {user.email}</span>
              </li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={logout}>Cerrar sesión</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Iniciar sesión</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
