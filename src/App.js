import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Clock from './Components/Clock';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar'; // Importa el componente de la barra de navegación
import Show from './Components/Show';

function App() {
  return (
    <Router>
      <Navbar /> {/* Agrega la barra de navegación */}
      <Routes>
      <Route path="/Home" element={<Home />} />
        <Route path="/Show" element={<Show />} />
        <Route path="/Clock" element={<Clock />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
