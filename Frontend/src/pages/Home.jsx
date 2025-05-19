import { Container, Row, Col, Button } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import Carousel from "../components/Carousel"; // Ajusta según tu estructura
import Baner1 from '../assets/images/baner1.png'; // Ajusta según tu estructura
import "../styles/Home.css";
import "../styles/Carousel.css";
import { image } from "framer-motion/client";
import { Link } from "react-router-dom";
import Servicios from "./Servicios";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsVisible(true);

    // Animación de fondo intermitente sutil
    const interval = setInterval(() => {
      controls.start({
        backgroundPosition: ["0% 0%", "100% 100%"],
        transition: {
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
      });
    }, 100);

    return () => clearInterval(interval);
  }, [controls]);




  // Animaciones
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const floatingVariants = {
    float: {
      y: [-10, 10],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.03, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  const rotateVariants = {
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      },
    },
  };
  const carouselItems = [
    {
      title: "Diseño Creativo",
      description:
        "Soluciones visuales impactantes para tu marca que capturan la esencia de tu negocio.",
      image: Baner1 // Usando la imagen importada
    },
    {
      title: "Marketing Digital",
      description:
        "Estrategias personalizadas para aumentar tu presencia en línea y llegar a más clientes.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Desarrollo Web",
      description:
        "Sitios web modernos y funcionales diseñados para convertir visitantes en clientes.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  ];


  return (
    <div className="home-page">
      {/* Carrusel Section */}
      <section className="py-5 pixel-carousel">
        <Container>
          <Carousel items={carouselItems} />
        </Container>
      </section>

      {/* Hero Section */}
      <motion.section className="hero-section pixel-hero" animate={controls}>
        <Container>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <Row className="align-items-center min-vh-100 py-5">
              <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
                <motion.div variants={itemVariants} whileHover="hover">
                  <motion.h1
                    className="pixel-logo mb-3"
                    animate="pulse"
                    variants={pulseVariants}
                  >
                    PIXEL DIGITAL
                  </motion.h1>
                </motion.div>

                <motion.h2
                  className="display-4 fw-bold mb-4 pixel-slogan"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  DISEÑAMOS EL FUTURO
                  <br />
                  DE TU MARCA PIXEL A PIXEL
                </motion.h2>

                <motion.div
                  variants={itemVariants}
                  className="pixel-contact-info"
                >
                  <motion.p className="lead mb-2" whileHover={{ x: 5 }}>
                    <i className="bi bi-telephone-fill me-2"></i>
                    +504 9387-7292
                  </motion.p>
                  <motion.p className="lead" whileHover={{ x: 5 }}>
                    <i className="bi bi-geo-alt-fill me-2"></i>
                    Tegucigalpa, Honduras
                  </motion.p>
                </motion.div>

                <motion.div variants={itemVariants} className="mt-4">
                  <motion.div
                    className="d-inline-block me-3"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="pixel-primary"
                      size="lg"
                      className="btn-pill"
                      as={Link}
                      to="/portafolio"
                    >
                      Conoce más
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="d-inline-block"
                  >
                    <Button
                      variant="outline-light"
                      size="lg"
                      className="btn-pill"
                      as={Link}
                      to="/contacto"
                    >
                      Contacto
                    </Button>
                  </motion.div>
                </motion.div>
              </Col>

              <Col lg={6}>
                <motion.div variants={floatingVariants} animate="float">
                  <motion.img
                    src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Diseño creativo"
                    className="img-fluid rounded-4 shadow-lg hero-image pixel-hero-image"
                    whileHover={{ scale: 1.02 }}
                  />
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        </Container>
      </motion.section>

      <Servicios />

      {/* CTA Section */}
      <section className="py-5 pixel-cta">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.h2
                  className="fw-bold mb-4 pixel-cta-title"
                  whileInView={{
                    scale: [1, 1.02, 1],
                    transition: { duration: 1 },
                  }}
                  viewport={{ once: true }}
                >
                  ¿LISTO PARA LLEVAR TU MARCA AL SIGUIENTE NIVEL?
                </motion.h2>
                <motion.p
                  className="lead mb-5 pixel-cta-text"
                  whileInView={{
                    opacity: [0.5, 1],
                    transition: { duration: 1.2 },
                  }}
                  viewport={{ once: true }}
                >
                  Contáctanos hoy y comienza tu viaje creativo con nosotros.
                </motion.p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="pixel-primary"
                    size="lg"
                    className="btn-pill px-4"
                  >
                    Comenzar Proyecto
                  </Button>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
