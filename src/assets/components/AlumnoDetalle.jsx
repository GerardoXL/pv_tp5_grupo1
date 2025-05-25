import {useParams, Link} from "react-router-dom";

export default function AlumnoDetalle({alumnos}){
    const {libreta}=useParams();
    const alumno = alumnos.find(a=> a.libreta === libreta);
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

            <Link to="/">
                <button>Volver a la lista</button> 
            </Link>
        </div>
    )
}