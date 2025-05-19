import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import "../styles/Contacto.css"; // Asegúrate de tener este archivo CSS

function Contacto() {
  // Animaciones
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

        <Row className="g-5 align-items-center">
          {/* Columna del formulario */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card border-0 shadow-sm p-4 p-lg-5"
              style={{ borderRadius: "15px" }}
            >
              <Form>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="formNombre">
                      <Form.Label className="fw-semibold">
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
                    <Form.Group controlId="formTelefono">
                      <Form.Label className="fw-semibold">Teléfono</Form.Label>
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
                      <Form.Label className="fw-semibold">
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
                      <Form.Label className="fw-semibold">Mensaje</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        placeholder="Cuéntanos sobre tu proyecto..."
                        className="py-3"
                        required
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

          {/* Columna de información de contacto */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div
                className="card border-0 shadow-sm h-100"
                style={{ borderRadius: "15px" }}
              >
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.223774796073!2d-87.1871579241646!3d14.09479129039431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f6fa2d70cc1d01d%3A0x6de7420b1fc0d540!2sTegucigalpa%2C%20Francisco%20Moraz%C3%A1n!5e0!3m2!1sen!2shn!4v1718704023972!5m2!1sen!2shn"
                    width="100%"
                    height="450"
                    style={{ border: 0, borderRadius: "15px 15px 0 0" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación en Google Maps - Tegucigalpa"
                  ></iframe>
                </div>

                <div className="card-body p-4 p-lg-5">
                  <h3 className="fw-bold mb-4">Información de Contacto</h3>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3 mt-1 text-primary">
                      <FaMapMarkerAlt size={20} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">Dirección</h5>
                      <p className="text-muted mb-0">
                        Colonia Palmira, Tegucigalpa, Honduras
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3 mt-1 text-primary">
                      <FaPhone size={18} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">Teléfono</h5>
                      <p className="text-muted mb-0">+504 2234-5678</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start mb-4">
                    <div className="me-3 mt-1 text-primary">
                      <FaEnvelope size={18} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">Email</h5>
                      <p className="text-muted mb-0">
                        contacto@pixeldigital.hn
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="me-3 mt-1 text-primary">
                      <FaClock size={18} />
                    </div>
                    <div>
                      <h5 className="fw-semibold mb-1">Horario</h5>
                      <p className="text-muted mb-0">
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
