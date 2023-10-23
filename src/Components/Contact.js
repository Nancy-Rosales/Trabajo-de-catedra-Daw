import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import miImagen from './Images/IMG1.jpg';
import miImagen2 from './Images/IMG2.jpg';
import miImagen3 from './Images/IMG3.jpg';
import miImagen4 from './Images/foto.jpg';
import miImagen5 from './Images/IMG4.jpg';
import miImagen7 from './Images/IMG7.jpg'
import Card from 'react-bootstrap/Card';
import './Contact.css'
import License from './License';


function KitchenSinkExample() {

  const headerStyle = {
    backgroundImage: `url(${miImagen7})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', // Establece la altura deseada
    display: 'flex',
    
    justifyContent: 'center',
    alignItems: 'center',
  };


  return (
    <div >
    <div className='contenedor' style={headerStyle} >
     <div className='lado1'>
    <Card className="custom-card1">
      <Card.Img className="custom-card1" variant="top" src={miImagen} />
      <Card.Body>
        <Card.Title>Project Manager</Card.Title>
        <Card.Title>Francisco Ernesto Bayona Burgos</Card.Title>
        <Card.Text>
        Planificación, ejecución y seguimiento del proyecto.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Contacto</ListGroup.Item>
        <ListGroup.Item>7788-9988</ListGroup.Item>
        <ListGroup.Item>2255-8877</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.facebook.com/francisco.711">Facebook</Card.Link>
        <Card.Link href="https://twitter.com/franburgos912">X</Card.Link>
      </Card.Body>
    </Card>
    </div>

    <div className='lado2'>  
    <Card className="custom-card1">
      <Card.Img className="custom-card1" variant="top" src={miImagen3} />
      <Card.Body>
        <Card.Title>Technical Lead</Card.Title>
        <Card.Title>Nancy Mariela Cabrera Rosales</Card.Title>
        <Card.Text>
        Supervisión del equipo de desarrollo.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush1">
        <ListGroup.Item>Contacto</ListGroup.Item>
        <ListGroup.Item>7495-8614</ListGroup.Item>
        <ListGroup.Item>2547-8574</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.facebook.com/profile.php?id=100013972474476&mibextid=ZbWKwL">Facebook</Card.Link>
        <Card.Link href="https://x.com/Nancy99043996?t=GolJ-PVxFrY6QrA_5WkTYw&s=09">X</Card.Link>
      </Card.Body>
    </Card></div>
      
    <div className='lado3'>  
    <Card className="custom-card1">
      <Card.Img className="custom-card1" variant="top" src={miImagen4} />
      <Card.Body>
        <Card.Title>User Interface Designer</Card.Title>
        <Card.Title>Cristian Daniel Portillo Rivera</Card.Title>
        <Card.Text>
        Responsable del diseño de la interfaz de usuario y la experiencia del usuario.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush1">
        <ListGroup.Item>Contacto</ListGroup.Item>
        <ListGroup.Item>6548-5784</ListGroup.Item>
        <ListGroup.Item>2378-5962</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.facebook.com/cristian.portillo.923724?mibextid=ZbWKwL">Facebook</Card.Link>
        <Card.Link href="https://instagram.com/cris_portillo11?igshid=YTQwZjQ0NmI0OA==">Instagram</Card.Link>
      </Card.Body>
    </Card></div>

    <div className='lado4'>  
    <Card className="custom-card1">
      <Card.Img className="custom-card1" variant="top" src={miImagen2} />
      <Card.Body>
        <Card.Title>Product Owner</Card.Title>
        <Card.Title>Alisson Yasmin Vivas Castro</Card.Title>
        <Card.Text>
        Define las necesidades del cliente y la visión del producto 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush1">
        <ListGroup.Item>Contacto</ListGroup.Item>
        <ListGroup.Item>6258-7491</ListGroup.Item>
        <ListGroup.Item>2867-1094</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.facebook.com/jasmin.martinezz.77?mibextid=ZbWKwL">Facebook</Card.Link>
        <Card.Link href="https://instagram.com/cstro7k?igshid=YTQwZjQ0NmI0OA==">Instagram</Card.Link>
      </Card.Body>
    </Card></div>

    <div className='lado5'>  
    <Card className="custom-card1">
      <Card.Img className="custom-card1" variant="top" src={miImagen5} />
      <Card.Body>
        <Card.Title>Especialista en Marketing</Card.Title>
        <Card.Title>Evelyn Marisol Sandoval Guillén</Card.Title>
        <Card.Text>
        Encargado de la estrategia de marketing del proyecto. 
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush1">
        <ListGroup.Item>Contacto</ListGroup.Item>
        <ListGroup.Item>6315-8472</ListGroup.Item>
        <ListGroup.Item>2647-0231</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.facebook.com/evelyn.sandoval.3958?mibextid=ZbWKwL">Facebook</Card.Link>
        <Card.Link href="#">X</Card.Link>
      </Card.Body>
    </Card></div>

    <License/>
    </div>
    
    </div>
    
  );
}

export default KitchenSinkExample;
