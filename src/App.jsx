import { useEffect, useState } from "react";
import AlumnoFormulario from "./assets/components/AlumnoAgregar";
import ListaAlumnos from "./assets/components/AlumnoLista";
function App() {

//creacion del array
const [alumnos , setAlumnos] = useState([]);

//funcion flecha para agregar el objeto alumno al array
const agregarAlumno = (alumno) => {
 setAlumnos([...alumnos, alumno ]);
 console.log("Alumnos:", alumnos);
};

useEffect(() => {
    console.log("lista de alumnos" , alumnos)
}, [alumnos]);


return(
    <div className="container">
      <h1>Gestión de Alumnos</h1>
      <AlumnoFormulario onAgregar={agregarAlumno} />
      <ListaAlumnos alumnos={alumnos}  />
    </div>
);
};
export default App;
