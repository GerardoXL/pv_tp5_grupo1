import { use } from "react";
import {  useEffect, useState } from "react";

// se declaran las variables de estado
const AlumnoFormulario = ({onAgregar, alumnoEdit, boolEdit,onActualizar}) => {
   const [libreta , setLibreta] = useState("");
   const [nombre , setNombre] = useState("");
   const [apellido , setApellido] = useState("");
   const [email, setEmail] = useState("");
   const [domicilio , setDomicilio] = useState("");
   const [telefono , setTelefono] = useState ("");

useEffect(() => {
  setLibreta(alumnoEdit.libreta)
    setNombre(alumnoEdit.nombre);
    setApellido(alumnoEdit.apellido);
    setEmail(alumnoEdit.email);
    setDomicilio(alumnoEdit.domicilio);
    setTelefono(alumnoEdit.telefono);
},[alumnoEdit,boolEdit]);



   //funcion para cargar los datos
const cargarDatos = (event) => {
   event.preventDefault();

   //se crea el objeto que posteriormente sera ingresado al array

const nuevoAlumno = {
  libreta,
  nombre,
  apellido,
  email,
  domicilio,
  telefono,
  estado: true
}

if(boolEdit !== true)
  onAgregar(nuevoAlumno); // se llama a la funcion onAgregar para tomar el objeto y se limpian los campos
else
{
  onActualizar(nuevoAlumno);
}


  setLibreta('')
  setNombre('');
  setApellido('');
  setEmail('');
  setDomicilio('');
  setTelefono('');
   
};



    return (
     <div className="container">
     <form onSubmit={cargarDatos}>
     <input type="text"
     placeholder="ingrese libreta" 
     id="libreta"
     value={libreta}
     onChange={(e) => setLibreta(e.target.value)}
     required
    />
    <input type="text"
     placeholder="ingrese nombre" 
     id="nombre"
     value={nombre}
     onChange={(e) => setNombre(e.target.value)}
     required
     />

     <input type="text"
     placeholder="ingrese apellido" 
     id="apellido"
     value={apellido}
     onChange={(e) => setApellido(e.target.value)}
     required
     />

    <input type="email"
     placeholder="ingrese email" 
     id="email"
     value={email}
     onChange={(e) => setEmail(e.target.value)}
     required
    />

    <input type="text"
     placeholder="ingrese domicilio" 
     id="domicilio"
     value={domicilio}
     onChange={(e) => setDomicilio(e.target.value)}
     required
    />
    <input type="tel"
     placeholder="ingrese telefono" 
     id="telefono"
     value={telefono}
     onChange={(e) => setTelefono(e.target.value)}
     required
    />

    <button type="submit">{boolEdit === false ? 'Agregar Alumno' : 'Editar Alumno' }</button>
     </form>
     </div>

    );
};

export default AlumnoFormulario;
