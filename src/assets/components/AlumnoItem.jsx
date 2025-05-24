import { Link } from 'react-router-dom'; 

export default function AlumnoItem({ alumno }) {
  const manejarEliminar = (e) => {
    e.preventDefault(); 
  };

  return (
    <tr>
      <td>{alumno.libreta}</td>
      <td>{alumno.nombre}</td>
      <td>{alumno.apellido}</td>
      <td>{alumno.email}</td>
      <td>{alumno.domicilio}</td>
      <td>{alumno.telefono}</td>
      <td>
        <button onClick={manejarEliminar}>Eliminar</button>
        <Link to={`/alumnos/${alumno.libreta}/editar`}>
          <button>Editar</button>
        </Link>
        <Link to={`/alumnos/${alumno.libreta}`}>
          <button>Ver Detalles</button>
        </Link>
      </td>
    </tr>
  );
}
