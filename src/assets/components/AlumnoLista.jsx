import AlumnoItem from './AlumnoItem';

export default function ListaAlumnos({ alumnos, onEliminar, onEdit }) {  //recibe la lista de alumnos y la funcion onEliminar definida en app.jsx como elminarAlumno
  return (
    <div>
      <h2>Lista de Alumnos</h2>
      <table border="1">
        <thead>
          <tr>
            <th>LU</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Domicilio</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map((alumno) => (
            <AlumnoItem key={alumno.libreta} alumno={alumno} onEliminar={onEliminar} onEdit={onEdit}/> // pasa la funcion onEliminar recibida desde app a AlumnoItem
          ))}
        </tbody>
      </table>
    </div>
  );
}