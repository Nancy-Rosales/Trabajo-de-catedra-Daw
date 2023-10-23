import React from 'react';
import License from './License';
import miImagen6 from './Images/IMG6.jpg';


function Home() {
  const headerStyle = {
    backgroundImage: `url(${miImagen6})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Establece la altura deseada
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };



  return (
    <div style={headerStyle}>
      <header className="bg-transparent text-white text-center py-5">
        <h1>Bienvenido </h1>
      </header>
      <main className="container my-4 text-center text-white">
  <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "50vh" }}>
    <p style={{ fontSize: '20px' }}>Recuerda manejar los datos que se encuentran en la base con cuidado.</p>
  </div>
</main>
      <footer className="bg-transparent text-white text-center py-2 mt-auto">
        <p style={{ fontSize: '20px' }}>Derechos de autor &copy; {new Date().getFullYear()}</p>
      </footer>
      <License />
    </div>
  );
}

export default Home;
