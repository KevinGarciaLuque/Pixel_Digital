import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import styles from "../styles/Footer.module.css";

// ✅ Crear motion.a usando motion.create para evitar deprecation warning
const MotionAnchor = motion.create("a");
const MotionListItem = motion.create("li");

function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: <FaInstagram size={44} />,
      url: "https://instagram.com/pixeldigital",
      color: "#E1306C",
    },
    {
      icon: <FaFacebook size={44} />,
      url: "https://facebook.com/pixeldigital",
      color: "#3B5998",
    },
    {
      icon: <FaLinkedin size={44} />,
      url: "https://linkedin.com/company/pixeldigital",
      color: "#0077B5",
    },
    {
      icon: <FaEnvelope size={44} />,
      url: "mailto:contacto@pixeldigital.com",
      color: "#D44638",
    },
  ];

  const footerLinks = [
    { title: "Inicio", url: "#inicio" },
    { title: "Servicios", url: "#servicios" },
    { title: "Portafolio", url: "#portafolio" },
    { title: "Nosotros", url: "#nosotros" },
    { title: "Blog", url: "#blog" },
    { title: "Contacto", url: "#contacto" },
  ];

  return (
    <>
      {/* Botón de WhatsApp flotante */}
      <motion.div
        className={styles.whatsappButton}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.2, rotate: 10 }}
        variants={pulseAnimation}
      >
        <a
          href="https://wa.me/50493877292"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
        >
          <FaWhatsapp />
          <motion.span
            className={styles.tooltip}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            ¡Hablemos!
          </motion.span>
        </a>
      </motion.div>

      {/* Footer principal */}
      <motion.footer
        className={styles.footer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Container>
          <Row className="g-4 g-lg-5">
            {/* Columna 1: Marca y redes */}
            <Col lg={4} className="text-lg-start">
              <motion.div
                className={styles.brandSection}
                variants={fadeIn}
                custom={0}
              >
                <h4 className={styles.brandName}>
                  Pixel<span>Digital</span>
                </h4>
                <p className={styles.brandDescription}>
                  Creamos experiencias digitales memorables que conectan marcas
                  con su audiencia.
                </p>
                <div className={styles.socialLinks}>
                  {socialLinks.map((link, index) => (
                    <MotionAnchor
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialIcon}
                      style={{ "--hover-color": link.color }}
                      variants={fadeIn}
                      custom={index + 1}
                      whileHover={{
                        y: -5,
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      {link.icon}
                    </MotionAnchor>
                  ))}
                </div>
              </motion.div>
            </Col>

            {/* Columna 2: Enlaces rápidos */}
            <Col lg={4} className="text-center text-lg-start">
              <motion.div variants={fadeIn} custom={1}>
                <h5 className={styles.sectionTitle}>Explorar</h5>
                <ul className={styles.quickLinks}>
                  {footerLinks.map((link, index) => (
                    <MotionListItem
                      key={index}
                      variants={fadeIn}
                      custom={index + 2}
                      whileHover={{
                        x: 5,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                    >
                      <a href={link.url} className={styles.navLink}>
                        {link.title}
                      </a>
                    </MotionListItem>
                  ))}
                </ul>
              </motion.div>
            </Col>

            {/* Columna 3: Contacto */}
            <Col lg={4} className="text-center text-lg-end">
              <motion.div variants={fadeIn} custom={2}>
                <h5 className={styles.sectionTitle}>Contáctanos</h5>
                <address className={styles.contactInfo}>
                  <motion.p variants={fadeIn} custom={2.5}>
                    <FaMapMarkerAlt className={styles.contactIcon} />
                    <span>Av. Innovación 456, San Pedro Sula</span>
                  </motion.p>
                  <motion.p variants={fadeIn} custom={3}>
                    <FaPhone className={styles.contactIcon} />
                    <span>+504 9876-5432</span>
                  </motion.p>
                  <motion.p variants={fadeIn} custom={3.5}>
                    <FaEnvelope className={styles.contactIcon} />
                    <a href="mailto:hola@pixeldigital.hn">
                      hola@pixeldigital.hn
                    </a>
                  </motion.p>
                </address>
              </motion.div>
            </Col>
          </Row>

          {/* Línea divisoria */}
          <motion.hr
            className={styles.divider}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          {/* Derechos reservados */}
          <Row>
            <Col className="text-center">
              <motion.div
                className={styles.copyright}
                variants={fadeIn}
                custom={4}
              >
                <p>
                  &copy; {currentYear} <strong>Pixel Digital</strong>. Todos los
                  derechos reservados.
                </p>
                <p className={styles.credits}>
                  Hecho con <span className={styles.heart}>❤️</span> en Honduras
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </motion.footer>
    </>
  );
}

export default Footer;
