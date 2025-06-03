import AlumnoFormulario from "./AlumnoAgregar";
import { Button, Col } from 'react-bootstrap'; //estilo para el boton
import { Link } from "react-router-dom";
const AlumnoEditar = ({luEditar}) => {


    return(
        <>
        <div>
            <Col md={4 }>
            <Link to={`/alumnos/editar/${luEditar}`}>
                <Button variant="success" className="m-1">Editar</Button>
            </Link>
            </Col>
        </div>
        </>
    )
}

export default AlumnoEditar;