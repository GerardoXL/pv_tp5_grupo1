import { Link } from 'react-router-dom'; 
import AlumnoEliminar from './AlumnoEliminar';

export default function AlumnoItem({ alumno, onEliminar }) { //recibe el objeto alumno y la funcion onEliminar pasada desde listaAlumnos que viene de app.jsx
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
        <AlumnoEliminar libreta={alumno.libreta} onEliminar={onEliminar}/> {/* pasa la libreta y la funcion onEliminar al componente AlumnoEliminar*/}
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
