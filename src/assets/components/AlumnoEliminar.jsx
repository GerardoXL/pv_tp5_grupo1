export default function AlumnoEliminar({libreta, onEliminar}){
    console.log("libreta: ",libreta);
    console.log("oneliminar (tipo): ",typeof onEliminar);
    console.log("oneliminar (valor): ",onEliminar);
    const manejarClick = () => {  
        onEliminar(libreta); //ejecuta la funcion eliminarAlumno definido en app.jsx

    }
    return (
        <button onClick={manejarClick}>Eliminar</button>
    )
}
