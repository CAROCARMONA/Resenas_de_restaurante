import './App.css';
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Login from './login/Login';
import Registro from './registro/Registro';
import MisResenas from './seccionMisR/MisResenas';
import CrearResena from './resenasA_C/CrearResena';
import ActualizarResena from './resenasA_C/ActulizarResena';

const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/misResenas" element={<MisResenas/>} />
              <Route path="/crearResenas" element={<CrearResena />} />
              <Route path="/actulizarResenas/:id" element={<ActualizarResena />} />
          </Routes>
      </Router>
  );
};

export default App;
