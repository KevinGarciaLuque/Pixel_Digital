// src/pages/content/portafolio/Portafolio.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSearchPlus, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const proyectos = [
  {
    key: "sitio-web",
    imagen: "/assets/trabajo3.jpg",
    titulo: "Sitio Web",
    categoria: "Desarrollo Web",
    descripcion: "Diseño y desarrollo de e-commerce responsive",
  },
  {
    key: "diseno-marca",
    imagen: "/assets/trabajo1.jpg",
    titulo: "Diseño de Marca",
    categoria: "Branding",
    descripcion: "Identidad visual completa para empresa de tecnología",
  },
  {
    key: "campana-digital",
    imagen: "/assets/trabajo2.jpg",
    titulo: "Campaña Digital",
    categoria: "Marketing",
    descripcion: "Estrategia de redes sociales para lanzamiento de producto",
  },
  {
    key: "fotografia-producto",
    imagen: "/assets/trabajo4.jpg",
    titulo: "Fotografía Producto",
    categoria: "Fotografía",
    descripcion: "Sesión profesional para catálogo de moda",
  },
  {
    key: "app-movil",
    imagen: "/assets/trabajo5.jpg",
    titulo: "App Móvil",
    categoria: "UI/UX",
    descripcion: "Diseño de interfaz para aplicación financiera",
  },
  {
    key: "packaging",
    imagen: "/assets/trabajo6.jpg",
    titulo: "Packaging",
    categoria: "Diseño",
    descripcion: "Diseño de empaque para línea orgánica",
  },
];

// Animaciones
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Portafolio() {
  return (
    <section id="portafolio" className="py-5 bg-light">
      <Container>
        {/* Título y subtítulo animados */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-5"
        >
          <motion.h2 className="display-5 fw-bold mb-3" variants={fadeIn}>
            Nuestro Portafolio
          </motion.h2>
          <motion.p className="lead text-muted mb-4" variants={fadeIn}>
            Descubre nuestros proyectos destacados
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mx-auto"
            style={{ width: "80px", height: "4px", background: "#6E45E2" }}
          />
        </motion.div>

        {/* Grid de proyectos */}
        <Row className="g-4">
          {proyectos.map((proyecto) => (
            <Col lg={4} md={6} key={proyecto.key}>
              {/* motion.div para animación de tarjeta */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="card border-0 shadow-sm h-100 overflow-hidden"
                style={{ borderRadius: "15px" }}
              >
                <div className="position-relative overflow-hidden" style={{ height: "250px" }}>
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="portfolio-overlay">
                    <div className="overlay-content d-flex flex-column justify-content-center align-items-center">
                      {/* Solo motion.a tiene animación, no <Link> */}
                      <motion.a
                        href={proyecto.imagen}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white mb-3"
                        whileHover={{ scale: 1.2 }}
                        style={{ display: "inline-block" }}
                      >
                        <FaSearchPlus size={24} />
                      </motion.a>
                      {/* Envolvemos el Link en motion.div para animar el botón */}
                      <motion.div whileHover={{ scale: 1.05 }}>
                        <Link
                          to={`/portafolio/-${proyecto.key}`}
                          className="btn btn-sm btn-primary rounded-pill px-3"
                          style={{ textDecoration: "none" }}
                        >
                          Ver Proyecto <FaExternalLinkAlt className="ms-1" />
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <span className="badge bg-purple-light text-purple mb-2">
                    {proyecto.categoria}
                  </span>
                  <h5 className="fw-bold mb-2">{proyecto.titulo}</h5>
                  <p className="text-muted small">{proyecto.descripcion}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        {/* Botón adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <button className="btn btn-outline-primary px-4 py-2">
            Ver Más Proyectos
          </button>
        </motion.div>
      </Container>

      {/* Estilos CSS inyectados (sin atributo jsx) */}
      <style>{`
        .portfolio-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(110, 69, 226, 0.8); opacity: 0; transition: all 0.3s ease; }
        .card:hover .portfolio-overlay { opacity: 1; }
        .overlay-content { height: 100%; transform: translateY(20px); transition: all 0.3s ease; }
        .card:hover .overlay-content { transform: translateY(0); }
        .bg-purple-light { background-color: rgba(110, 69, 226, 0.1); }
        .text-purple { color: #6e45e2; }
      `}</style>
    </section>
  );
}
