import { Link } from 'react-router-dom';
import AlumnoEliminar from './AlumnoEliminar';
import AlumnoEditar from './AlumnoEditar'; // Asegúrate de importar AlumnoEditar
import { Card, Button, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function AlumnoItem({ alumno, onEliminar, onEdit }) { // Añadido onEdit como prop
  return (
    <Col md={4}> 
      <Card>
        <Card.Body>
          <Card.Img variant="top" src="https://png.pngtree.com/png-vector/20240529/ourmid/pngtree-avatar-icon-user-on-white-square-background-vector-png-image_6960227.png" />
          <Card.Title>{alumno.libreta}</Card.Title>
          <Card.Text>
            <strong>Apellido:</strong> {alumno.apellido}<br />
            <strong>Nombre:</strong> {alumno.nombre}<br />
          </Card.Text>
          <div>
            <AlumnoEliminar libreta={alumno.libreta} onEliminar={onEliminar} />
            <AlumnoEditar luEditar={alumno.libreta} onEdit={onEdit} /> {/* Asegúrate de que este componente muestre el formulario */ }
            <Link to={`/alumnos/${alumno.libreta}`}>
              <Button variant="dark">Ver Detalles</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}