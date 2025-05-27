import AlumnoItem from './AlumnoItem';
import { Row} from 'react-bootstrap';

export default function ListaAlumnos({ alumnos, onEliminar, onEdit }) {  //recibe la lista de alumnos y la funcion onEliminar definida en app.jsx como elminarAlumno
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <Row>
          {alumnos.map((alumno) => (
            <AlumnoItem key={alumno.libreta} alumno={alumno} onEliminar={onEliminar} onEdit={onEdit}/> // pasa la funcion onEliminar recibida desde app a AlumnoItem
          ))}
       </Row>
    </div>
  );
}