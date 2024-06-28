// src/components/SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './SignUp.css';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden');
      return;
    }
    if (email && password) {
      const success = register({ email, password });
      if (success) {
        setMessage('Registro exitoso. Ahora puede iniciar sesión.');
        setTimeout(() => navigate('/login'), 2000);
      } else {
        setMessage('El usuario ya existe.');
      }
    }
  };

  return (
    <div className="signup-container">
      <h2>Regístrate</h2>
      {message && <p className="message">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            className="form-control" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input 
            type="password" 
            className="form-control" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input 
            type="password" 
            className="form-control" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrarse</button>
      </form>
      <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión</Link></p>
    </div>
  );
};

export default SignUp;
