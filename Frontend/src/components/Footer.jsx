import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Animaciones
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: <FaInstagram size={20} />,
      url: "https://instagram.com/pixeldigital",
    },
    {
      icon: <FaFacebook size={20} />,
      url: "https://facebook.com/pixeldigital",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://linkedin.com/company/pixeldigital",
    },
    { icon: <FaEnvelope size={20} />, url: "mailto:contacto@pixeldigital.com" },
  ];

  const footerLinks = [
    { title: "Inicio", url: "#inicio" },
    { title: "Servicios", url: "#servicios" },
    { title: "Portafolio", url: "#portafolio" },
    { title: "Sobre Nosotros", url: "#nosotros" },
    { title: "Contacto", url: "#contacto" },
  ];

  return (
    <>
      {/* Botón de WhatsApp flotante */}
      <motion.div
        initial="initial"
        animate="animate"
        variants={pulseAnimation}
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          zIndex: 1000,
        }}
        whileHover={{ scale: 1.4 }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://wa.me/50493877292"
          target="_blank"
          rel="noopener noreferrer"
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            background: "#25D366",
            color: "white",
            fontSize: "30px",
            boxShadow: "0 4px 20px rgba(37, 211, 102, 0.5)",
            textDecoration: "none",
          }}
        >
          <FaWhatsapp />
        </a>
      </motion.div>

      {/* Footer principal */}
      <motion.footer
        className="bg-dark text-light py-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <Container>
          <Row className="g-4">
            <Col lg={4} className="text-lg-start">
              <h4 className="fw-bold mb-4">Pixel Digital</h4>
              <p className="text-muted">
                Transformamos tus ideas en realidad digital con soluciones
                creativas y efectivas.
              </p>
              <div className="d-flex gap-3 mt-4 justify-content-lg-start justify-content-center">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light"
                    whileHover={{
                      y: -3,
                      color: "#6E45E2",
                      transition: { duration: 0.2 },
                    }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </Col>

            <Col lg={4} className="text-center ">
              <h5 className="fw-bold mb-4">Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                {footerLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.url}
                      className="text-muted text-decoration-none d-block py-2"
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </Col>

            <Col lg={4} className="text-lg-end">
              <h5 className="fw-bold mb-4">Contacto</h5>
              <address className="text-muted">
                <p className="mb-2">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  Av. Digital 123, Ciudad Pixel
                </p>
                <p className="mb-2">
                  <i className="bi bi-telephone-fill me-2"></i>
                  +1 234 567 890
                </p>
                <p>
                  <i className="bi bi-envelope-fill me-2"></i>
                  contacto@pixeldigital.com
                </p>
              </address>
            </Col>
          </Row>

          <hr className="my-4 bg-secondary" />

          <Row>
            <Col className="text-center text-muted">
              <p className="mb-0">
                &copy; {currentYear} Pixel Digital. Todos los derechos
                reservados.
              </p>
              <p className="small mt-2">
                Diseñado y desarrollado con ❤️ por el equipo Pixel
              </p>
            </Col>
          </Row>
        </Container>
      </motion.footer>
    </>
  );
}

export default Footer;
