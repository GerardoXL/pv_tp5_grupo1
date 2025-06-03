import {useParams, Link} from "react-router-dom";
import { Button, Col } from 'react-bootstrap';

export default function AlumnoDetalle({alumnos}){
    const {libreta}=useParams();
     const alumno = alumnos.find(a => a.libreta === parseInt(libreta));
    if (!alumno){
        return <p>Alumno no encontrado</p>;
    }
    return (
        <div>
            <h2>Detalle del Alumno</h2>
            <p>Libreta: {alumno.libreta}</p>
            <p>Nombre: {alumno.nombre}</p>
            <p>Apellido: {alumno.apellido}</p>
            <p>Email: {alumno.email}</p>
            <p>Domicilio: {alumno.domicilio}</p>
            <p>Telefono: {alumno.telefono}</p>

            <Link to="/alumnos">
                <Button variant="warning">Volver a la lista</Button> 
            </Link>
        </div>
    )
}