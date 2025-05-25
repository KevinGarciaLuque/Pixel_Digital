// Portafolio.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSearchPlus, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const MotionLink = motion.create(Link);

import sitioWeb from "../assets/images/imgPortafolio/1.png";
import marca from "../assets/images/imgPortafolio/2.png";
import campana from "../assets/images/imgPortafolio/3.png";
import fotoproducto from "../assets/images/imgPortafolio/4.png";
import app from "../assets/images/imgPortafolio/5.png";
import paquetes from "../assets/images/imgPortafolio/6.png";


// Proyectos
const proyectos = [
  {
    key: "sitio-web",
    imagen: sitioWeb,
    titulo: "Sitio Web",
    categoria: "Desarrollo Web",
    descripcion: "Diseño y desarrollo de e-commerce responsive",
  },
  {
    key: "diseno-marca",
    imagen: marca,
    titulo: "Diseño de Marca",
    categoria: "Branding",
    descripcion: "Identidad visual completa para empresa de tecnología",
  },
  {
    key: "campana-digital",
    imagen: campana,
    titulo: "Campaña Digital",
    categoria: "Marketing",
    descripcion: "Estrategia de redes sociales para lanzamiento de producto",
  },
  {
    key: "fotografia-producto",
    imagen: fotoproducto,
    titulo: "Fotografía Producto",
    categoria: "Fotografía",
    descripcion: "Sesión profesional para catálogo de moda",
  },
  {
    key: "app-movil",
    imagen: app,
    titulo: "App Móvil",
    categoria: "UI/UX",
    descripcion: "Diseño de interfaz para aplicación financiera",
  },
  {
    key: "packaging",
    imagen: paquetes,
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
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = document.getElementById("inicio-portafolio");
    if (scrollToSection) {
      scrollToSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <section id="inicio-portafolio" className="portafolio2 py-5 bg-light">
      <Container>
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

        {/* Tarjetas */}
        <Row className="g-4">
          {proyectos.map((proyecto) => (
            <Col lg={4} md={6} key={proyecto.key}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="card border-0 shadow-sm h-100 overflow-hidden"
                style={{ borderRadius: "15px" }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "350px" }}
                >
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-100 h-100 object-fit-cover"
                  />
                  <div className="portfolio-overlay">
                    <div className="overlay-content d-flex flex-column justify-content-center align-items-center">
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
                      <MotionLink
                        to={`/${proyecto.key}`}
                        whileHover={{ scale: 1.05 }}
                        className="btn btn-sm btn-primary rounded-pill px-3"
                        style={{ textDecoration: "none" }}
                      >
                        Ver Proyecto <FaExternalLinkAlt className="ms-1" />
                      </MotionLink>
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
      </Container>
    </section>
  );
}
