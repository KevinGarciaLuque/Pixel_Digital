import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { BsArrowLeft, BsCameraFill, BsCheckCircleFill } from "react-icons/bs";
import { FaRegClock, FaUsers } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../../styles/SesionesFoto.module.css";

// Importar imágenes (reemplaza con tus imágenes reales)
import paqueteBasico from "../../../assets/images/sesiones/1.png";
import paquetePremium from "../../../assets/images/sesiones/2.png";
import paqueteDeluxe from "../../../assets/images/sesiones/3.png";

const SesionesFoto = () => {
  const navigate = useNavigate();

  const paquetes = [
    {
      nombre: "Paquete Básico",
      precio: "$199",
      imagen: paqueteBasico,
      caracteristicas: [
        "1 hora de sesión",
        "20 fotos editadas",
        "2 cambios de look",
        "Entrega en 5 días",
      ],
      destacado: false,
    },
    {
      nombre: "Paquete Premium",
      precio: "$349",
      imagen: paquetePremium,
      caracteristicas: [
        "2 horas de sesión",
        "40 fotos editadas",
        "4 cambios de look",
        "Fotos en alta resolución",
        "Entrega en 3 días",
        "1 foto retocada profesionalmente",
      ],
      destacado: true,
    },
    {
      nombre: "Paquete Deluxe",
      precio: "$499",
      imagen: paqueteDeluxe,
      caracteristicas: [
        "4 horas de sesión",
        "80+ fotos editadas",
        "Ilocación a elegir",
        "6 cambios de look",
        "Fotos en alta y media resolución",
        "Entrega en 24 horas",
        "5 fotos retocadas profesionalmente",
        "Video behind the scenes",
      ],
      destacado: false,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="sesiones-page"
    >
      <Container  style={{ marginTop: "160px" }}>
        {/* Encabezado */}
        <Row className="mb-5">
          <Col xs={2}>
            <motion.div
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              style={{ cursor: "pointer" }}
            >
              <BsArrowLeft size={28} />
            </motion.div>
          </Col>
          <Col xs={10} className="text-center">
            <motion.h1
              className="display-4 fw-bold mb-3"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Sesiones Fotográficas
            </motion.h1>
            <p className="lead text-muted">
              Capturamos momentos inolvidables con estilo profesional
            </p>
          </Col>
        </Row>

        {/* Paquetes */}
        <section className="mb-5">
          <h2 className="text-center mb-5 fw-bold">Nuestros Paquetes</h2>
          <Row className="g-4 justify-content-center">
            {paquetes.map((paquete, index) => (
              <Col lg={4} md={6} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card
                    className={`h-100 border-0 shadow-sm overflow-hidden ${
                      paquete.destacado ? "paquete-destacado" : ""
                    }`}
                  >
                    {paquete.destacado && (
                      <div className="badge-destacado">¡Más Popular!</div>
                    )}
                    <div className="imagen-container">
                      <Card.Img
                        variant="top"
                        src={paquete.imagen}
                        alt={paquete.nombre}
                        className="imagen-paquete"
                      />
                      <div className="precio-overlay">
                        <span>{paquete.precio}</span>
                      </div>
                    </div>
                    <Card.Body className="text-center p-4">
                      <h3 className="h3 mb-3">{paquete.nombre}</h3>
                      <ul className="lista-caracteristicas">
                        {paquete.caracteristicas.map((item, i) => (
                          <motion.li
                            key={i}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <BsCheckCircleFill className="me-2 text-primary" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </Card.Body>
                    <Card.Footer className="border-0 bg-white text-center pb-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary px-4 py-2"
                      >
                        Reservar Ahora
                      </motion.button>
                    </Card.Footer>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Proceso de Trabajo */}
        <section className="mb-5 py-5 proceso-section">
          <Container>
            <h2 className="text-center mb-5 fw-bold">Nuestro Proceso</h2>
            <Row className="g-4">
              <Col md={4}>
                <motion.div
                  className="paso-card text-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="paso-icono mb-3">
                    <BsCameraFill size={40} />
                  </div>
                  <h3 className="h4">1. Consulta</h3>
                  <p>Analizamos tus necesidades y estilo deseado</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  className="paso-card text-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="paso-icono mb-3">
                    <FaRegClock size={40} />
                  </div>
                  <h3 className="h4">2. Sesión</h3>
                  <p>Realizamos la sesión en locación o estudio</p>
                </motion.div>
              </Col>
              <Col md={4}>
                <motion.div
                  className="paso-card text-center p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="paso-icono mb-3">
                    <FaUsers size={40} />
                  </div>
                  <h3 className="h4">3. Entrega</h3>
                  <p>Recibes tus fotos editadas en el tiempo acordado</p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* CTA */}
        <section className="text-center py-5 cta-section rounded-3 mb-5">
          <h2 className="fw-bold mb-4">¿Listo para tu sesión fotográfica?</h2>
          <p className="lead mb-4">Contáctanos para personalizar tu paquete</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-light btn-lg px-5 py-3"
          >
            Agendar Consulta
          </motion.button>
        </section>
      </Container>
    </motion.div>
  );
};

export default SesionesFoto;
