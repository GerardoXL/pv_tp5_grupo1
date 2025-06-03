import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from 'react-router-dom'; 
import '../css/Navbar.css'

const Menu = () => {
    return (
    <Navbar bg="primary" variant="dark" expand="lg" className="mb-4 py-2">
        <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to='/' >Home</Nav.Link>
            <Nav.Link as={NavLink} to='/alumnos'>Lista de Alumnos</Nav.Link>
            <Nav.Link as={NavLink} to='/nuevo-alumno'>Nuevo Alumno</Nav.Link>
            <Nav.Link as={NavLink} to='/acerca-de'>Acerca de</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>


    ) 
};
export default Menu;