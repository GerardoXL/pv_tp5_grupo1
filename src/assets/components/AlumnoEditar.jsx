import AlumnoFormulario from "./AlumnoAgregar";

const AlumnoEditar = ({luEditar,onEdit}) => {

    const handleEditar = () =>{
        const prodEdit = {
            lu: luEditar,
            estado: true
        }
        
        onEdit(prodEdit);
    }

    return(
        <>
        <div>
            <button onClick={handleEditar}>Editar</button>
        </div>
        </>
    )
}

export default AlumnoEditar;