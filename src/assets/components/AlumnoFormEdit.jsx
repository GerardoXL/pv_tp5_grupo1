import { useState, useEffect } from "react";
import { Form, Button } from 'react-bootstrap'; //imporoto para usar bootstrap
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function FormularioEdit({arrayAlumnos,onActualizar}) {
    const [nombre , setNombre] = useState("");
    const [apellido , setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [domicilio , setDomicilio] = useState("");
    const [telefono , setTelefono] = useState ("");

    const { id } = useParams();

    const alumnoEdit = arrayAlumnos.find((a) => a.libreta === parseInt(id))



   useEffect(() => {
        if (alumnoEdit) {
            setNombre(alumnoEdit.nombre);
            setApellido(alumnoEdit.apellido);
            setEmail(alumnoEdit.email);
            setDomicilio(alumnoEdit.domicilio);
            setTelefono(alumnoEdit.telefono);
        }
    }, [alumnoEdit]);

  const cargarDatos = (event) => {
   event.preventDefault();

const nuevoAlumno = {
  libreta : parseInt(id),
  nombre,
  apellido,
  email,
  domicilio,
  telefono,
  estado: true
}

onActualizar(parseInt(id),nuevoAlumno);
}

return (
  <div>
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

    <Button type="submit" variant="primary" className="m-2">{'Editar Alumno'}</Button>
 </Form>
 <Link to="/alumnos">
        <Button variant="warning" className="m-2">Volver</Button>
    </Link>
 </div>
  )
}

export default FormularioEdit