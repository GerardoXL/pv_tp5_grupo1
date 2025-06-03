
import {  useEffect, useState } from "react";
import { Form, Button } from 'react-bootstrap'; //imporoto para usar bootstrap

let lastLibreta = 999;
// se declaran las variables de estado
const AlumnoFormulario = ({onAgregar, alumnoEdit, boolEdit,onActualizar}) => { 
   const [nombre , setNombre] = useState("");
   const [apellido , setApellido] = useState("");
   const [email, setEmail] = useState("");
   const [domicilio , setDomicilio] = useState("");
   const [telefono , setTelefono] = useState ("");

useEffect(() => {
    setNombre(alumnoEdit.nombre);
    setApellido(alumnoEdit.apellido);
    setEmail(alumnoEdit.email);
    setDomicilio(alumnoEdit.domicilio);
    setTelefono(alumnoEdit.telefono);
},[alumnoEdit,boolEdit]);



   //funcion para cargar los datos
const cargarDatos = (event) => {
   event.preventDefault();
   lastLibreta += 1 ;
   const nuevaLibreta = lastLibreta;

   //se crea el objeto que posteriormente sera ingresado al array

const nuevoAlumno = {
  libreta : nuevaLibreta,
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


  setNombre('');
  setApellido('');
  setEmail('');
  setDomicilio('');
  setTelefono('');
   
};

//el formulario lo modifico para usar bootstrap
return (
  
  <Form onSubmit={cargarDatos}>
    <Form.Group>
      <Form.Label>Nombres</Form.Label>
       <Form.Control
        type="text"
        placeholder="ingrese nombres" 
        id="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
     />
     </Form.Group>

     <Form.Group>
      <Form.Label>Apellidos</Form.Label>
       <Form.Control 
          type="text"
          placeholder="ingrese apellidos" 
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
   </Form.Group>

    <Form.Group>
      <Form.Label>Email</Form.Label>
       <Form.Control 
          type="email"
          placeholder="ingrese email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
    </Form.Group>

    <Form.Group>
      <Form.Label>Domicilio</Form.Label>
       <Form.Control 
          type="text"
          placeholder="ingrese domicilio" 
          id="domicilio"
          value={domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
          required
        />
    </Form.Group>

    <Form.Group>
      <Form.Label>Teléfono</Form.Label>
       <Form.Control
          type="tel"
          placeholder="ingrese telefono" 
          id="telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
    </Form.Group>

    <Button type="submit" variant="primary">{ boolEdit===false ? 'Agregar Alumno' : 'Editar Alumno'}</Button>
 </Form>

    );
};

export default AlumnoFormulario;  