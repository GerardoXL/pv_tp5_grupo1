import { use, useEffect, useState } from "react";
import {Routes,Route } from "react-router-dom";
import AlumnoFormulario from "./assets/components/AlumnoAgregar";
import ListaAlumnos from "./assets/components/AlumnoLista";
import AlumnoDetalle from "./assets/components/AlumnoDetalle";
function App() {

//creacion del array
const [alumnos , setAlumnos] = useState([]);
const [editar, setEditar] = useState(false);
const [alumnoEditar,setAlumnoEditar] = useState('');

//funcion flecha para agregar el objeto alumno al array
const agregarAlumno = (alumno) => {
  const existe = alumnos.some(a => a.libreta === alumno.libreta);
  if (existe) {
    alert("Ya existe un alumno con esa libreta universitaria.");
  } else {
    setAlumnos([...alumnos, alumno]);
    console.log("Alumno agregado:", alumno);
  }
};
//se agrega la funcion para eliminar el objeto del array 
const eliminarAlumno = (libreta) =>{
    const nuevaLista = alumnos.filter((a) => a.libreta !== libreta);
    setAlumnos(nuevaLista);
  
}

const onEdit = (info) =>{
    setAlumnoEditar( alumnos.find((a) => a.libreta === info.lu));
    setEditar(info.estado);
}

const actulizarAlumno = (alumno) =>
{
  setAlumnos(alumnos.map((a)=>a.libreta===alumno.libreta ? alumno : a))
  setEditar(false);
  setAlumnoEditar({});
}

useEffect(() => {
    console.log("lista de alumnos" , alumnos)
}, [alumnos]);


return(
    <div className="container">
      <h1>Gestión de Alumnos</h1>
      {/*se agrega router para definir las rutas entre paginas cuando al hacer click
      en ver detalle se muestre el componente AlumnoDetalle en la ruta /alumnos/:libreta"*/}
      <Routes>  
        <Route path="/"
        element={
          <>
          <AlumnoFormulario onAgregar={agregarAlumno} alumnoEdit={alumnoEditar} boolEdit={editar} onActualizar={actulizarAlumno}/>

          <ListaAlumnos alumnos={alumnos} onEliminar={eliminarAlumno} onEdit={onEdit}/> {/*paso la funcion eliminarAlumno como prop hacia el componente AlumnoLista */}
          
          </>
        }
      />
      <Route path="/alumnos/:libreta"
      element={<AlumnoDetalle alumnos={alumnos} />}
      />
      </Routes>
    </div>
);
};
export default App;