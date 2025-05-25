import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaChartLine,
  FaUsers,
  FaHashtag,
} from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../../styles/RedesSociales.module.css";

// Importar imágenes con nombres descriptivos únicos
// Rutas corregidas (ejemplo)
import estrategiaFacebook from "../../../assets/images/redesSociales/1.png";
import contenidoInstagram from "../../../assets/images/redesSociales/2.png";
import viralTikTok from "../../../assets/images/redesSociales/3.png";
import videoDemoRedes from "../../../assets/videos/Video.mp4";

const RedesSociales = () => {
  const navigate = useNavigate();

  const plataformasSociales = [
    {
      nombre: "Facebook",
      icono: <FaFacebook size={40} color="#1877F2" />,
      imagen: estrategiaFacebook,
      estadisticas: "2.9 mil millones de usuarios mensuales",
      descripcion: "Estrategias de engagement y publicidad segmentada",
    },
    {
      nombre: "Instagram",
      icono: <FaInstagram size={40} color="#E1306C" />,
      imagen: contenidoInstagram,
      estadisticas: "1.4 mil millones de usuarios activos",
      descripcion: "Creación de contenido visual impactante",
    },
    {
      nombre: "TikTok",
      icono: <FaTiktok size={40} color="#000000" />,
      imagen: viralTikTok,
      estadisticas: "1 mil millón de usuarios mensuales",
      descripcion: "Viralización de contenido con tendencias",
    },
  ];

  const servicios = [
    {
      icono: <FaChartLine size={30} />,
      titulo: "Análisis de Competencia",
      descripcion: "Identificamos oportunidades en tu nicho de mercado",
    },
    {
      icono: <FaUsers size={30} />,
      titulo: "Gestión de Comunidad",
      descripcion: "Interacción constante con tu audiencia",
    },
    {
      icono: <FaHashtag size={30} />,
      titulo: "Campañas Hashtag",
      descripcion: "Estrategias virales con tendencias",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="redes-sociales-page"
    >
      <Container style={{ marginTop: "160px" }} id="fotografia1">
        {/* Encabezado con botón de regreso */}
        <Row className="mb-4 align-items-center">
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
            <h1 className="display-5 fw-bold">Manejo de Redes Sociales</h1>
            <p className="lead text-muted">Potenciamos tu presencia digital</p>
          </Col>
        </Row>

        {/* Sección de Plataformas Sociales */}
        <section className="mb-5">
          <h2 className="text-center mb-4 fw-bold">
            Nuestro Enfoque en Cada Plataforma
          </h2>
          <Row className="g-4">
            {plataformasSociales.map((plataforma, index) => (
              <Col lg={4} key={index}>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="h-100 border-0 shadow-sm tarjeta-plataforma">
                    <div className="contenedor-icono">{plataforma.icono}</div>
                    <Card.Img
                      variant="top"
                      src={plataforma.imagen}
                      alt={plataforma.nombre}
                      className="imagen-plataforma"
                    />
                    <Card.Body className="text-center">
                      <h3 className="h4">{plataforma.nombre}</h3>
                      <p className="text-muted">{plataforma.estadisticas}</p>
                      <p>{plataforma.descripcion}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Sección de Video Demostrativo */}
        <section className="mb-5 py-4">
          <Row className="align-items-center">
            <Col lg={6} className="mb-4 mb-lg-0">
              <div className="contenedor-video rounded-3 overflow-hidden shadow-lg">
                <video autoPlay loop muted playsInline className="w-100">
                  <source src={videoDemoRedes} type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </Col>
            <Col lg={6}>
              <h2 className="fw-bold mb-4">Nuestro Proceso Creativo</h2>
              <p className="lead mb-4">
                Creamos contenido estratégico que conecta con tu audiencia y
                refleja la esencia de tu marca.
              </p>
              <ul className="lista-proceso">
                <motion.li whileHover={{ x: 5 }}>
                  Análisis de mercado y competencia
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  Desarrollo de calendario editorial
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  Creación de contenido visual
                </motion.li>
                <motion.li whileHover={{ x: 5 }}>
                  Monitoreo y optimización continua
                </motion.li>
              </ul>
            </Col>
          </Row>
        </section>

        {/* Sección de Servicios */}
        <section className="mb-5">
          <h2 className="text-center mb-4 fw-bold">Nuestros Servicios</h2>
          <Row className="g-4">
            {servicios.map((servicio, index) => (
              <Col md={4} key={index}>
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                  className="tarjeta-servicio p-4 text-center h-100 rounded-3"
                >
                  <div className="icono-servicio mb-3">{servicio.icono}</div>
                  <h3 className="h5 mb-3">{servicio.titulo}</h3>
                  <p className="text-muted mb-0">{servicio.descripcion}</p>
                </motion.div>
              </Col>
            ))}
          </Row>
        </section>

        {/* Sección CTA */}
        <section className="text-center py-5 seccion-cta rounded-3">
          <h2 className="fw-bold mb-4">
            ¿Listo para transformar tus redes sociales?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary btn-lg px-5 py-3"
          >
            Contáctanos Ahora
          </motion.button>
        </section>
      </Container>
    </motion.div>
  );
};

export default RedesSociales;
