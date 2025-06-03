import React, { useState } from 'react';
import '../css/Home.css';
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';

const Home = ({ cantidadAlumnos }) => {
  return (
    <>
    <div className="home-container">
      <Container className="mt-4 main-content">
        <h2 className="text-center mb-4">Bienvenido al Sistema de Gestión de Alumnos</h2>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.unir.net/wp-content/uploads/2021/04/la-universidad-que-necesitamos_c-2-1.webp"
              alt="Slide 1"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Gestión Centralizada</h3>
              <p>Controlá todos los datos de los alumnos desde un solo lugar.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.licdn.com/dms/image/v2/C4E1BAQFAX0CpC7mnew/company-background_10000/company-background_10000/0/1584319529701/facultad_de_ingenieria_unju_cover?e=2147483647&v=beta&t=B30SB46xfrLw2PNDe3R8_7kKy8Fl0rsWoAo5bah7gy4"
              alt="Slide 2"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Fácil de Usar</h3>
              <p>Interfaz intuitiva para una gestión eficiente.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://brokenchalk.org/wp-content/uploads/2024/05/study-group_4460x4460-scaled-e1717069171410.jpg"
              alt="Slide 3"
              style={{ height: '300px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Información Clara</h3>
              <p>Visualizá, editá o eliminá alumnos fácilmente.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row className="mt-5 text-center">
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>{cantidadAlumnos}</Card.Title>
                <Card.Text>Alumnos Registrados</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-5">
          <h3 className="text-center mb-3">¿Por qué es importante la gestión de alumnos?</h3>
          <p className="text-justify">
            La gestión de alumnos es fundamental para el éxito de cualquier institución educativa. Permite organizar eficientemente la información de los estudiantes, como datos personales, libreta universitaria, etc, facilitando la toma de decisiones y el cumplimiento de normativas. Además, ayuda a personalizar el aprendizaje, identificando necesidades específicas para mejorar el rendimiento académico. Fomenta un entorno seguro y equitativo, promoviendo el bienestar academico. También mejora y optimiza el uso de recursos y asegura el cumplimiento de requisitos legales.
          </p>
        </div>

        <div className="mt-5">
          <h3 className="text-center mb-3">¿Qué funcionalidades ofrece este sistema?</h3>
          <p className="text-justify">
            El Sistema de Gestión de Alumnos fue desarrollado para facilitar el manejo eficiente y centralizado de la información estudiantil. Las principales funcionalidades del sistema son:
          </p>
          <ul>
            <li><strong>Agregar Alumnos:</strong> Permite registrar nuevos estudiantes completando un formulario con todos sus datos relevantes.</li>
            <li><strong>Editar Alumnos:</strong> Podés modificar la información de cualquier alumno ya registrado de forma rápida y segura.</li>
            <li><strong>Eliminar Alumnos:</strong> Si un alumno ya no forma parte del sistema, se lo puede eliminar con confirmación previa.</li>
            <li><strong>Visualizar Detalles:</strong> Cada alumno cuenta con una vista detallada donde se pueden ver todos sus datos.</li>
            <li><strong>Navegación Dinámica:</strong> Gracias a React Router, la navegación entre vistas es fluida e intuitiva.</li>
            <li><strong>Feedback Interactivo:</strong> El sistema utiliza notificaciones visuales (toasts) para informar al usuario sobre acciones realizadas.</li>
          </ul>
          <p className="text-justify">
            Todo esto se desarrolla bajo una interfaz simple e intuitiva, creada con React y Bootstrap, que asegura una experiencia de usuario clara y accesible.
          </p>
        </div>

       
      </Container>
      </div>
    </>
  );
};

export default Home;
