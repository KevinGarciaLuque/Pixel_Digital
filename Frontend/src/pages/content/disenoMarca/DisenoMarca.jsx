// src/pages/DisenoMarca.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Marca from "../assets/images/imgPortafolio/marca.png";



const DisenoMarca = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          <img
            src={Marca}
            alt="Diseño de Marca"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">Diseño de Marca</h2>
          <p className="lead text-muted">
            Identidad visual completa para empresa de tecnología. Este proyecto
            incluye el desarrollo de logotipo, paleta de colores, tipografía,
            diseño de papelería corporativa y guías de uso de marca.
          </p>
          <ul>
            <li>🎨 Logo personalizado</li>
            <li>🖼️ Manual de identidad visual</li>
            <li>📄 Diseño de tarjetas y papelería</li>
            <li>📱 Adaptación para redes sociales</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default DisenoMarca;
