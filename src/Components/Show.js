import React, { useState, useEffect } from "react";
import License from './License';

function Show() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      setProductos(data);
    }
    fetchData();
  }, []);

  const test = (id) => {
    // Redirigir a la página del producto con el ID especificado
    // Por ejemplo: history.push(`/products/${id}`);
  }

  const deleteItem = (id) => {
    // Realizar la lógica de eliminación del producto con el ID especificado
  }

  const addItem = (id) => {
    // Realizar la lógica para agregar el producto con el ID especificado
  }

  return (
    <div>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Actions</th>
            <th style={thStyle}>Actions</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((item) => (
            <tr key={item.id} style={trStyle}>
              <td style={tdStyle}>{item.id}</td>
              <td style={tdStyle}>{item.title}</td>
              <td style={tdStyle}>{item.price}</td>
              <td style={tdStyle}>
                <button style={buttonStyle} onClick={() => test(item.id)}>Editar</button>
              </td>
              <td style={tdStyle}>
                <button style={buttonStyle} onClick={() => deleteItem(item.id)}>Eliminar</button>
              </td>
              <td style={tdStyle}>
                <button style={buttonStyle} onClick={() => addItem(item.id)}>Agregar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <License/>
    </div>
  );
}

const thStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
};

const trStyle = {
  borderBottom: '1px solid #ccc',
};

const tdStyle = {
  padding: '10px',
};


  

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '5px 10px',
  border: 'none',
  cursor: 'pointer',
};

export default Show;
