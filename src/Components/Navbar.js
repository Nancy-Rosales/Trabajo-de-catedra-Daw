import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/Home">Inicio</Link>
        </li>
        <li>
          <Link to="/show">Tabla mostrar Productos</Link>
        </li>
        <li>
          <Link to="/Clock">Productos API</Link>
        </li>
        <li>
          <Link to="/contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;