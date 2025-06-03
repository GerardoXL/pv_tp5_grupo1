import {  useEffect, useState } from "react";
import { BrowserRouter  , Routes, Route } from "react-router-dom";
import AlumnoFormulario from "./assets/components/AlumnoAgregar";
import ListaAlumnos from "./assets/components/AlumnoLista";
import AlumnoDetalle from "./assets/components/AlumnoDetalle";
import Menu from "./assets/components/Navbar";
import Home from "./assets/components/Home";
import AcercaDe from "./assets/components/Acercade";
import FormularioEdit from "./assets/components/AlumnoFormEdit";

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

const actulizarAlumno = (id, datosActualizados) =>
{
  setAlumnos(alumnos.map((a)=>a.libreta=== id ? {...a,...datosActualizados} : a))
}

useEffect(() => {
    console.log("lista de alumnos" , alumnos)
}, [alumnos]);


return(
    <BrowserRouter> 
 <Menu />
   <Routes>  
     <Route path="/" element={ <div className="container mt-4">
      <Home cantidadAlumnos={alumnos.length}/>
       </div>} />
      <Route path="/alumnos" element={<div className="container mt-4">
          <ListaAlumnos
          alumnos={alumnos}
          onEliminar={eliminarAlumno}
           alumnoEdit={alumnoEditar}
            boolEdit={editar}
            onActualizar={actulizarAlumno}
          />
           </div> } />
           <Route path="/alumnos/:libreta" element={
             <div className="container mt-4">
               <AlumnoDetalle alumnos={alumnos} />
              </div>
               } /> 
     <Route path="/nuevo-alumno" element={<div className="container mt-4">
           <h1 className="nuevo">Registrar Nuevo Alumno</h1>
           <AlumnoFormulario
            onAgregar={agregarAlumno}
            alumnoEdit={alumnoEditar}
            boolEdit={editar}
            onActualizar={actulizarAlumno}
             />
             </div> } />
      <Route path="/acerca-de" element={<AcercaDe />} />

      <Route path="/alumnos/editar/:id" element={<FormularioEdit
            arrayAlumnos={alumnos}
            onActualizar={actulizarAlumno}
            />}
      />

      <Route path="*" element={<div><h1>404-pagina no encontrada</h1></div>}/>
 </Routes>
 </BrowserRouter>
);
};
export default App;