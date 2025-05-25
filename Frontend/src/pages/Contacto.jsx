import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "../styles/Contacto.css";

function Contacto() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contacto" className="py-5 contacto-section">
      <Container>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggerContainer}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-5"
        >
          <motion.h2 className="display-5 fw-bold mb-3" variants={fadeIn}>
            Contáctanos
          </motion.h2>
          <motion.p className="lead text-muted mb-4" variants={fadeIn}>
            Estamos listos para hacer realidad tu proyecto
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="mx-auto"
            style={{ width: "80px", height: "4px", background: "#6E45E2" }}
          />
        </motion.div>

        <Row className="g-4 align-items-stretch">
          {/* Form Column - Now with equal height to map */}
          <Col lg={6} className="d-flex">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="card border-0 shadow-sm p-4 p-lg-5 flex-grow-1"
              style={{
                borderRadius: "15px",
                background: "white",
              }}
            >
              <h3 className="fw-bold mb-4">Envíanos un mensaje</h3>
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formNombre" className="mb-3">
                      <Form.Label className="fw-semibold small">
                        Nombre completo
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Ej: Juan Pérez"
                        className="py-3"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formTelefono" className="mb-3">
                      <Form.Label className="fw-semibold small">
                        Teléfono
                      </Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="Ej: +504 1234-5678"
                        className="py-3"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formEmail" className="mb-3">
                      <Form.Label className="fw-semibold small">
                        Correo electrónico
                      </Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Ej: contacto@empresa.com"
                        className="py-3"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <Form.Group controlId="formMensaje" className="mb-4">
                      <Form.Label className="fw-semibold small">
                        Mensaje
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        className="py-3"
                        required
                        style={{ minHeight: "120px" }}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={12}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="primary"
                        size="lg"
                        className="w-100 py-3 fw-bold"
                        type="submit"
                      >
                        <FaPaperPlane className="me-2" /> Enviar Mensaje
                      </Button>
                    </motion.div>
                  </Col>
                </Row>
              </Form>
            </motion.div>
          </Col>

          {/* Map and Contact Info Column */}
          <Col lg={6} className="d-flex">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="card border-0 shadow-sm h-100 flex-grow-1"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <div className="h-50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.223774796073!2d-87.1871579241646!3d14.09479129039431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2d70cc1d01d%3A0x6de7420b1fc0d540!2sTegucigalpa%2C%20Francisco%20Moraz%C3%A1n!5e0!3m2!1sen!2shn!4v1718704023972!5m2!1sen!2shn"
                  width="100%"
                  height="100%"
                  style={{ border: "none" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación en Google Maps - Tegucigalpa"
                ></iframe>
              </div>

              <div className="card-body p-4 p-lg-5 h-50 d-flex flex-column">
                <h3 className="fw-bold mb-4">Información de contacto</h3>

                <div className="contact-info-grid">
                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3 mt-1 text-primary">
                      <FaMapMarkerAlt size={18} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1 small">Dirección</h5>
                      <p className="text-muted mb-0 small">
                        Tegucigalpa, Honduras
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3 mt-1 text-primary">
                      <FaPhone size={18} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1 small">Teléfono</h5>
                      <p className="text-muted mb-0 small">+504 9387-7292</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3 mt-1 text-primary">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1 small">Email</h5>
                      <p className="text-muted mb-0 small">
                        contacto@pixeldigital.hn
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1 text-primary">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1 small">Horario</h5>
                      <p className="text-muted mb-0 small">
                        Lunes a Viernes: 8:00 am - 5:00 pm
                        <br />
                        Sábados: 9:00 am - 12:00 pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacto;
