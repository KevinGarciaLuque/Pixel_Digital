import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import "../../../styles/Portafolio.css";

const proyectos = [
  {
    key: 'sitio-web',
    imagen: '/assets/trabajo3.jpg',
    titulo: 'Sitio Web',
    categoria: 'Desarrollo Web',
    descripcion: 'Diseño y desarrollo de e-commerce responsive',
    content: (
      <>
        <h3>Proyecto: Sitio Web</h3>
        <p>
          Este sitio web consiste en un e-commerce responsive desarrollado con React, React-Bootstrap y Node.js.
        </p>
        <ul>
          <li>Funcionalidades: catálogo dinámico, carrito de compras, autenticación de usuarios.</li>
          <li>Tecnologías: React, React-Bootstrap, Node.js, Express, MySQL.</li>
          <li>
            Enlace: <a href="https://example.com" target="_blank" rel="noreferrer">Visitar sitio</a>
          </li>
        </ul>
      </>
    ),
  },
  {
    key: 'diseno-marca',
    imagen: '/assets/trabajo1.jpg',
    titulo: 'Diseño de Marca',
    categoria: 'Branding',
    descripcion: 'Identidad visual completa para empresa de tecnología',
    content: (
      <>
        <h3>Proyecto: Diseño de Marca</h3>
        <p>
          Creación de logotipo, paleta de colores y manual de marca para una startup tecnológica.
        </p>
        <ul>
          <li>Entrega: archivos vectoriales y formatos web.</li>
          <li>Aplicaciones: redes sociales, papelería corporativa.</li>
        </ul>
      </>
    ),
  },
  {
    key: 'campana-digital',
    imagen: '/assets/trabajo2.jpg',
    titulo: 'Campaña Digital',
    categoria: 'Marketing',
    descripcion: 'Estrategia de redes sociales para lanzamiento de producto',
    content: (
      <>
        <h3>Proyecto: Campaña Digital</h3>
        <p>
          Planificación y ejecución de anuncios en Facebook e Instagram para aumentar visibilidad de producto.
        </p>
        <ul>
          <li>Resultados: +20% de engagement en 2 semanas.</li>
          <li>Formatos: carrusel, historias y video ads.</li>
        </ul>
      </>
    ),
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContentPortafolio() {
  const [selected, setSelected] = useState(null);
  const proyectoSel = proyectos.find((p) => p.key === selected);

  return (
    <section id="content-portafolio" className="py-5">
      <Container>
        {!selected ? (
          <Row className="g-4">
            {proyectos.map((proyecto) => (
              <Col md={4} key={proyecto.key}>
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  whileHover={{ scale: 1.03 }}
                  className="card h-100 border-0 shadow-sm"
                  style={{ borderRadius: '15px' }}
                >
                  <img
                    src={proyecto.imagen}
                    className="card-img-top"
                    alt={proyecto.titulo}
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                  <div className="card-body d-flex flex-column">
                    <span className="badge bg-purple-light text-purple mb-2">
                      {proyecto.categoria}
                    </span>
                    <h5 className="card-title flex-grow-1">{proyecto.titulo}</h5>
                    <p className="card-text text-muted small">{proyecto.descripcion}</p>
                    <Button variant="primary" onClick={() => setSelected(proyecto.key)}>
                      Ver Detalle
                    </Button>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="project-detail"
          >
            <Button variant="link" onClick={() => setSelected(null)} className="mb-4">
              <FaArrowLeft /> Volver al Portafolio
            </Button>
            {proyectoSel && proyectoSel.content}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
