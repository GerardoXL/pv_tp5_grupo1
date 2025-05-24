import { useEffect, useState } from "react";
import AlumnoFormulario from "./assets/components/AlumnoAgregar";

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
    <AlumnoFormulario onAgregar={agregarAlumno} />
);
};
export default App;
