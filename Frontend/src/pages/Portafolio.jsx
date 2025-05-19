import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaSearchPlus, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Portafolio.css"; // Asegúrate de tener este archivo CSS

function Portafolio() {
  const proyectos = [
    {
      imagen: "/assets/trabajo1.jpg",
      titulo: "Diseño de Marca",
      categoria: "Branding",
      url: "#",
      descripcion: "Identidad visual completa para empresa de tecnología",
    },
    {
      imagen: "/assets/trabajo2.jpg",
      titulo: "Campaña Digital",
      categoria: "Marketing",
      url: "#",
      descripcion: "Estrategia de redes sociales para lanzamiento de producto",
    },
    {
      imagen: "/assets/trabajo3.jpg",
      titulo: "Sitio Web",
      categoria: "Desarrollo Web",
      url: "#",
      descripcion: "Diseño y desarrollo de e-commerce responsive",
    },
    {
      imagen: "/assets/trabajo4.jpg",
      titulo: "Fotografía Producto",
      categoria: "Fotografía",
      url: "#",
      descripcion: "Sesión profesional para catálogo de moda",
    },
    {
      imagen: "/assets/trabajo5.jpg",
      titulo: "App Móvil",
      categoria: "UI/UX",
      url: "#",
      descripcion: "Diseño de interfaz para aplicación financiera",
    },
    {
      imagen: "/assets/trabajo6.jpg",
      titulo: "Packaging",
      categoria: "Diseño",
      url: "#",
      descripcion: "Diseño de empaque para línea orgánica",
    },
  ];

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="portafolio" className="py-5 bg-light">
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

        <Row className="g-4">
          {proyectos.map((proyecto, index) => (
            <Col lg={4} md={6} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ y: -10 }}
                className="card border-0 shadow-sm h-100 overflow-hidden"
                style={{ borderRadius: "15px" }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
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
                      >
                        <FaSearchPlus size={24} />
                      </motion.a>
                      <motion.a
                        href={proyecto.url}
                        className="btn btn-sm btn-primary rounded-pill px-3"
                        whileHover={{ scale: 1.05 }}
                      >
                        Ver Proyecto <FaExternalLinkAlt className="ms-1" />
                      </motion.a>
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

      <style jsx>{`
        .portfolio-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(110, 69, 226, 0.8);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .card:hover .portfolio-overlay {
          opacity: 1;
        }

        .overlay-content {
          height: 100%;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .card:hover .overlay-content {
          transform: translateY(0);
        }

        .bg-purple-light {
          background-color: rgba(110, 69, 226, 0.1);
        }

        .text-purple {
          color: #6e45e2;
        }
      `}</style>
    </section>
  );
}

export default Portafolio;
