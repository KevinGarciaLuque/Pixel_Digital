import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles/SobreNosotros.css"; // Asegúrate de tener este archivo CSS
import SobreNosotros1 from "./../assets/images/sobreNosotros1.png";


const SobreNosotros = () => {
  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="sobre-nosotros" className="py-5 pixel-sobre-nosotros">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-5 text-center"
        >
          <motion.h2 className="display-4 fw-bold mb-3" variants={fadeIn}>
            Sobre Nosotros
          </motion.h2>
          <motion.p className="lead text-muted" variants={fadeIn}>
            Conoce nuestra historia y lo que nos hace diferentes
          </motion.p>
          <motion.div
            className="mx-auto"
            style={{ width: "80px", height: "4px", background: "#6E45E2" }}
            variants={fadeIn}
          />
        </motion.div>

        <Row className="align-items-center g-5">
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-primary rounded-4 shadow-lg d-flex align-items-center justify-content-center"
              style={{
                height: "390px",
                background: "linear-gradient(135deg, #6E45E2 0%, #88D3CE 100%)",
                animation: "fadeIn 2s ease-in-out",
              }}
            >
              <img
                src={SobreNosotros1}
                alt="Sobre Nosotros - Pixel Digital"
                style={{
                  maxHeight: "340px",
                  maxWidth: "92%",
                 
                  
                  width: "100%",
                  borderRadius: "1rem",
                  boxShadow: "0 12px 40px rgba(110, 69, 226, 0.12)",
                }}
                className="img-fluid"
              />
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={staggerContainer}
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} className="mb-4">
                <h3 className="fw-bold mb-3">Nuestra Historia</h3>
                <p className="text-muted">
                  Fundada en 2020, nuestra agencia nació de la pasión por crear
                  soluciones digitales impactantes. Lo que comenzó como un
                  pequeño equipo de diseñadores y desarrolladores, hoy es un
                  referente en la industria del marketing digital y diseño
                  creativo.
                </p>
              </motion.div>

              <Row className="g-4">
                <Col md={6}>
                  <motion.div
                    variants={fadeIn}
                    className="p-4 rounded-4 h-100"
                    style={{ background: "rgba(110, 69, 226, 0.05)" }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 20px rgba(110, 69, 226, 0.1)",
                    }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <i
                        className="bi bi-bullseye me-3"
                        style={{ fontSize: "2rem", color: "#6E45E2" }}
                      ></i>
                      <h4 className="fw-bold mb-0">Misión</h4>
                    </div>
                    <p className="text-muted mb-0">
                      Transformar ideas en experiencias digitales memorables que
                      impulsen el crecimiento de nuestros clientes.
                    </p>
                  </motion.div>
                </Col>

                <Col md={6}>
                  <motion.div
                    variants={fadeIn}
                    className="p-4 rounded-4 h-100"
                    style={{ background: "rgba(30, 144, 255, 0.05)" }}
                    whileHover={{
                      y: -5,
                      boxShadow: "0 10px 20px rgba(30, 144, 255, 0.1)",
                    }}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <i
                        className="bi bi-eye-fill me-3"
                        style={{ fontSize: "2rem", color: "#1E90FF" }}
                      ></i>
                      <h4 className="fw-bold mb-0">Visión</h4>
                    </div>
                    <p className="text-muted mb-0">
                      Ser reconocidos como la agencia líder en innovación
                      digital para emprendedores y empresas en Latinoamérica.
                    </p>
                  </motion.div>
                </Col>
              </Row>

              <motion.div variants={fadeIn} className="mt-4">
                <h4 className="fw-bold mb-3">Nuestros Valores</h4>
                <div className="d-flex flex-wrap gap-2">
                  {[
                    "Innovación",
                    "Transparencia",
                    "Pasión",
                    "Excelencia",
                    "Trabajo en equipo",
                  ].map((valor, i) => (
                    <motion.span
                      key={i}
                      className="badge rounded-pill px-3 py-2"
                      style={{
                        background: "rgba(110, 69, 226, 0.1)",
                        color: "#6E45E2",
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {valor}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SobreNosotros;
