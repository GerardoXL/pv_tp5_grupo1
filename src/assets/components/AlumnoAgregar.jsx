import {  useState } from "react";

// se declaran las variables de estado
const AlumnoFormulario = ({onAgregar}) => {
   const [libreta , setLibreta] = useState("");
   const [nombre , setNombre] = useState("");
   const [apellido , setApellido] = useState("");
   const [email, setEmail] = useState("");
   const [domicilio , setDomicilio] = useState("");
   const [telefono , setTelefono] = useState ("");

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
 // se llama a la funcion onAgregar para tomar el objeto y se limpian los campos
 onAgregar(nuevoAlumno);
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

    <button type="submit">Agregar Alumno</button>
     </form>
     </div>

    );
};

export default AlumnoFormulario;
