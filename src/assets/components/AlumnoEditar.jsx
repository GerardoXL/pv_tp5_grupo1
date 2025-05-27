import AlumnoFormulario from "./AlumnoAgregar";
import { Button, Col } from 'react-bootstrap'; //estilo para el boton

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
            <Col md={4 }>
            <Button variant="success" onClick={handleEditar}>Editar</Button>
            </Col>
        </div>
        </>
    )
}

export default AlumnoEditar;