import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Footer.module.css";

const MotionAnchor = motion.create("a");
const MotionListItem = motion.create("li");
const MotionNavLink = motion.create(Nav.Link);

function Footer() {
  const location = useLocation();
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
      icon: <FaWhatsapp size={24} />,
      url: "https://wa.me/50493877292",
      color: "#25D366",
      name: "WhatsApp",
    },
    {
      icon: <FaFacebookF size={24} />,
      url: "https://facebook.com",
      color: "#1877F2",
      name: "Facebook",
    },
    {
      icon: <FaInstagram size={24} />,
      url: "https://instagram.com",
      color: "#E4405F",
      name: "Instagram",
    },
    {
      icon: <FaTiktok size={24} />,
      url: "https://tiktok.com",
      color: "#000000",
      name: "TikTok",
    },
  ];

  const footerLinks = [
    { title: "Inicio", path: "/" },
    { title: "Servicios", path: "/#servicios" },
    { title: "Portafolio", path: "/portafolio" },
    { title: "Nosotros", path: "/#nosotros" },
    { title: "Blog", path: "/#blog" },
    { title: "Contacto", path: "/#contacto" },
  ];

  return (
    <>
      {/* Botón de WhatsApp fijo */}
      <motion.div
        className={styles.whatsappButton}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.2 }}
        variants={pulseAnimation}
      >
        <MotionAnchor
          href={socialLinks[0].url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar por WhatsApp"
          style={{ "--hover-color": socialLinks[0].color }}
        >
          {socialLinks[0].icon}
        </MotionAnchor>
      </motion.div>

      <motion.footer
        className={styles.footer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <Container>
          <Row className="g-4 g-lg-5">
            {/* Sección de marca */}
            <Col lg={4} className="text-lg-start">
              <motion.div variants={fadeIn} custom={0}>
                <h4 className={styles.brandName}>
                  Pixel<span>Digital</span>
                </h4>
                <p className={styles.brandDescription}>
                  Creamos experiencias digitales memorables.
                </p>

                {/* Redes Sociales */}
                <motion.div
                  className={styles.socialIcons}
                  variants={fadeIn}
                  custom={1}
                >
                  {socialLinks.map((social, index) => (
                    <MotionAnchor
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Síguenos en ${social.name}`}
                      className={styles.socialIcon}
                      style={{ "--hover-color": social.color }}
                      whileHover={{
                        y: -5,
                        scale: 1.2,
                        transition: { type: "spring", stiffness: 400 },
                      }}
                      whileTap={{ scale: 0.9 }}
                      custom={index + 1}
                      variants={fadeIn}
                    >
                      {social.icon}
                    </MotionAnchor>
                  ))}
                </motion.div>
              </motion.div>
            </Col>

            {/* Información de contacto */}
            <Col lg={4} className="text-center">
              <motion.div variants={fadeIn} custom={1}>
                <h5 className={styles.sectionTitle}>Horario</h5>
                <div className={styles.contactInfo}>
                  <motion.p variants={fadeIn} custom={1.5}>
                    <span>Lunes - Viernes: 8:00 AM - 5:00 PM</span>
                  </motion.p>
                  <motion.p variants={fadeIn} custom={2}>
                    <span>Sábado: 9:00 AM - 12:00 PM</span>
                  </motion.p>
                  <motion.p variants={fadeIn} custom={2.5}>
                    <span>Domingo: Cerrado</span>
                  </motion.p>
                </div>
              </motion.div>
            </Col>

            {/* Información de contacto */}
            <Col lg={4} className="text-center text-lg-end">
              <motion.div variants={fadeIn} custom={2}>
                <h5 className={styles.sectionTitle}>Contáctanos</h5>
                <address className={styles.contactInfo}>
                  <motion.p variants={fadeIn} custom={2.5}>
                    <FaMapMarkerAlt className={styles.contactIcon} />
                    <span>Tegucigalpa, Honduras</span>
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

          <motion.hr
            className={styles.divider}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <Row>
            <Col className="text-center">
              <motion.div variants={fadeIn} custom={4}>
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
