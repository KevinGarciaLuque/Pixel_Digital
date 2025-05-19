import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Baner1 from "../assets/images/baner1.png";
// Importa las demás imágenes necesarias
import Fotografia from "../assets/images/fotografia.png";
import Diseno from "../assets/images/diseno.png";
import Marketing from "../assets/images/marketing.png";

const rotateVariants = {
  rotate: {
    rotate: [0, 10, -10, 0],
    transition: { duration: 1, repeat: Infinity, repeatType: "reverse" },
  },
};

function Servicios() {
  const servicios = [
    {
      titulo: "Manejo de redes",
      descripcion: "Publicaciones semanales, estrategia de contenido.",
      color: "#E1306C",
      imagen: Baner1,
    },
    {
      titulo: "Sesiones fotográficas",
      descripcion: "Fotos profesionales para productos y servicios.",
      color: "#FFA500",
      imagen: Fotografia,
    },
    {
      titulo: "Diseño gráfico",
      descripcion: "Posters, logos, anuncios, branding.",
      color: "#6E45E2",
      imagen: Diseno,
    },
    {
      titulo: "Marketing Digital",
      descripcion: "Estrategias para aumentar tu presencia online",
      color: "#1DA1F2",
      imagen: Marketing,
    },
  ];

  return (
    <section className="py-5 pixel-services">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <motion.h2
            className="fw-bold mb-3 pixel-section-title"
            whileInView={{
              scale: [2, 2.05, 1],
              transition: { duration: 0.5 },
            }}
            viewport={{ once: true }}
          >
            NUESTROS SERVICIOS
          </motion.h2>
          <motion.p
            className="pixel-section-subtitle"
            whileInView={{
              opacity: [0.5, 1],
              transition: { duration: 0.8 },
            }}
            viewport={{ once: true }}
          >
            Transformamos tus ideas en realidad visual
          </motion.p>
        </motion.div>

        <Row className="g-4">
          {servicios.map((servicio, index) => (
            <Col md={6} lg={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 15px 30px -5px ${servicio.color}40`,
                }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="card h-100 border-0 pixel-service-card"
              >
                <div className="card-body text-center p-4">
                  <motion.div
                    className="pixel-service-icon mb-4"
                    whileHover={{ scale: 1.1 }}
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      margin: "0 auto",
                      border: `3px solid ${servicio.color}`,
                      boxShadow: `0 4px 15px ${servicio.color}40`,
                    }}
                  >
                    <motion.img
                      src={servicio.imagen}
                      alt={servicio.titulo}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      whileHover={{ scale: 1.05 }}
                      animate="rotate"
                      variants={rotateVariants}
                    />
                  </motion.div>
                  <h5 className="fw-bold mb-3">{servicio.titulo}</h5>
                  <p className="text-muted">{servicio.descripcion}</p>
                  <motion.div
                    whileHover={{ width: "50%" }}
                    style={{
                      height: "3px",
                      width: "20%",
                      background: servicio.color,
                      margin: "0 auto",
                      borderRadius: "3px",
                    }}
                  />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Servicios;
