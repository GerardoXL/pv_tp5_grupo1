import { Button, Col } from 'react-bootstrap';

export default function AlumnoEliminar({ libreta, onEliminar }) {
    console.log("libreta: ", libreta);
    console.log("onEliminar (tipo): ", typeof onEliminar);
    console.log("onEliminar (valor): ", onEliminar);

    const manejarClick = () => {  
        onEliminar(libreta); // ejecuta la función eliminarAlumno definida en app.jsx
    }

    return (
        <Col md={4} >
        <Button variant="danger" onClick={manejarClick}>
            Eliminar
        </Button>
        </Col>
    );
}