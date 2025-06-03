import '../css/acercade.css';
import{Container,Card,Row,Col} from 'react-bootstrap';
export default function AcercaDe(){
    return (
        <div className='acerca-container'>
            <h2 className='acerca-titulo'>Sobre esta aplicacion</h2>
            <p className='acerca-parrafo'>esta aplicacion fue desarrolada por el GRUPO 1 como parte del trabajo
                practico N°5 
            </p>
            <p className='acerca-parrafo'>Esta aplicación permite gestionar alumnos: agregar, editar, eliminar y ver detalles de cada uno</p>
            <h3 className='acerca-subtitulo'>Integrantes</h3>
            <Row xs={1} sm={2} md={3} className="g-4">
            {[
                {   nombre: 'Abregu Miguel', 
                    img: 'https://avatars.githubusercontent.com/u/122323946?v=4',
                    link: 'https://github.com/MAAMiguelAngelAbregu'
                },
                {   nombre: 'Aramayo Gerardo', 
                    img: 'https://avatars.githubusercontent.com/u/166179617?v=4',
                    link: 'https://github.com/GerardoXL'
                },
                {   nombre: 'Pol Facundo', 
                    img: 'https://avatars.githubusercontent.com/u/97904095?v=4',
                    link: 'https://github.com/FacundoPol'
                },
                {   nombre: 'Rios Sofia', 
                    img: 'https://avatars.githubusercontent.com/u/205240577?v=4',
                    link: 'https://github.com/SM-RIOS'
                },
                {   nombre: 'Villalba Ezequiel',
                    img: 'https://avatars.githubusercontent.com/u/116243645?v=4',
                    link: 'https://github.com/EzequielVillalba10'
                    }
            ].map((integrante, idx) => (
                <Col key={idx}>
                <Card className="text-center cartas-custom">
                    <a href={integrante.link} target="_blank" rel="noopener noreferrer">
                        <Card.Img
                            variant="top"
                            src={integrante.img}
                            alt={integrante.nombre}
                            className="img-hover"
                        />
                    </a>
                    <Card.Body>
                    <Card.Title className='nombre-integrantes'>{integrante.nombre}</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </div>
    )
}