
import {  useEffect, useState } from "react";
import { Form, Button, Alert } from 'react-bootstrap'; //imporoto para usar bootstrap

let lastLibreta = 999;
// se declaran las variables de estado
const AlumnoFormulario = ({onAgregar, alumnoEdit, boolEdit,onActualizar}) => { 
   const [nombre , setNombre] = useState("");
   const [apellido , setApellido] = useState("");
   const [email, setEmail] = useState("");
   const [domicilio , setDomicilio] = useState("");
   const [telefono , setTelefono] = useState ("");
   const [error,setError] =useState ({
      error:false,
      mensaje: ''
    }); //p/manejar errores
    const [exito, setExito] = useState(false);
    const [accion, setAccion] = useState(null); // p/ poder itinerar entre agregado o actualizado

// p/ desp validar el ingreso de tipo de datos
//en los campos del Formu
  const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;  //p/mayusculas, minusculas, acentos, letra ñ
  const soloNumeros = /^[0-9]+$/; //p/ num
  const emailValido = /\S+@\S+\.\S+/; // verifica que tenga el @, que tenga punto y que no hayan espacios


useEffect(() => {
    setNombre(alumnoEdit.nombre);
    setApellido(alumnoEdit.apellido);
    setEmail(alumnoEdit.email);
    setDomicilio(alumnoEdit.domicilio);
    setTelefono(alumnoEdit.telefono);
},[alumnoEdit,boolEdit]);

//para validar los datos del formu
//cambiar a validarFormu
const validarCampos = () => {
  let valid = true;


  if (!nombre || !soloLetras.test(nombre)) valid = false; //p/ validar que ingrese datos y que sean letras

  if (!apellido || !soloLetras.test(apellido)) valid = false;

  if (!email || !emailValido.test(email)) valid = false;

  if (!domicilio) valid = false;

  if (!telefono || !soloNumeros.test(telefono)) valid = false;

  setError({ error: !valid, mensaje: '' });

  return valid;
};



   //funcion para cargar los datos
const cargarDatos = (event) => {
   event.preventDefault();
   lastLibreta += 1 ;//esto es nuevo
   const nuevaLibreta = lastLibreta;

   const esValido = validarCampos();
    if (!esValido) return;


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
  {onAgregar(nuevoAlumno); // se llama a la funcion onAgregar para tomar el objeto y se limpian los campos
  setAccion('agregado');
  }
else
{
  onActualizar(nuevoAlumno);
  setAccion('actualizado');
}


  setNombre('');
  setApellido('');
  setEmail('');
  setDomicilio('');
  setTelefono('');
  // p/ limpiar errores
      setError({ error: false, mensaje: "" });
      setExito(true);
}
useEffect(() => {
    if (exito || error) {
      const timer = setTimeout(() => {
        setExito(false);
        setError(false);
      }, 3000); // 3000 ms = 3 segundos
   }
  }, [exito, error]);

   


//el formulario lo modifico para usar bootstrap
return (
  <>
   {exito &&  (
      <Alert variant="success">
        Alumno {accion} con éxito.
      </Alert>
    )}
{error.error && (
     <Alert variant="danger">
    Por favor, complete todos los campos correctamente.
  </Alert>
      )}

  <Form onSubmit={cargarDatos} noValidate>
    <Form.Group>
        <Form.Label>Nombres</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese nombres"
          id="nombre"
          value={nombre}
          isInvalid={error.error && (!nombre || !soloLetras.test(nombre))}//p/ que controlar los datos y que sean letras
          
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          {error.error && !nombre
            ? "El nombre es obligatorio."
            : "El nombre debe contener solo letras."}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Apellidos</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese apellidos"
          id="apellido"
          value={apellido}
          isInvalid={error.error && (!apellido || !soloLetras.test(apellido))} //p/ que controlar los datos y que sean letras
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          {error.error && !apellido
            ? "El apellido es obligatorio."
            : "El apellido debe contener solo letras."}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese email"
          id="email"
          value={email}
          isInvalid={error.error && (!email || !emailValido.test(email))}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          {error.error && (!email || !emailValido.test(email)) && "El email es inválido."}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Domicilio</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese domicilio"
          id="domicilio"
          value={domicilio}
          isInvalid={error.error && !domicilio}
          onChange={(e) => setDomicilio(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          {error.error && !domicilio && "El domicilio es obligatorio."}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Ingrese teléfono"
          id="telefono"
          value={telefono}
          isInvalid={error.error && (!telefono || !soloNumeros.test(telefono))} ////p/ que controlar los datos y que sean num
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
        <Form.Control.Feedback type="invalid">
          {error.error && !telefono
            ? "El teléfono es obligatorio."
            : "El teléfono debe contener solo números."}
        </Form.Control.Feedback>
      </Form.Group>

     

      <Button type="submit" variant="primary">
        {boolEdit === false ? "Agregar Alumno" : "Editar Alumno"}
      </Button>
    </Form>
    </>
  );
};

export default AlumnoFormulario;

  