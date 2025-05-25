import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { useState, useEffect } from "react";
import "../styles/Menu.css";
import Logo from "../assets/images/logo.png"; // ✅ Importa el logo

function Menu() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 50);
  });

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  const navVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const linkVariants = {
    hover: {
      scale: 1.20,
      color: "#6a11cb",
    },
    tap: { scale: .95 },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        variants={navVariants}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className={`pixel-navbar ${scrolled ? "scrolled" : ""}`}
      >
        <Container>
          <Navbar expand="lg" expanded={expanded} onToggle={setExpanded}>
            <Navbar.Brand as={Link} to="/" className="navbar-brand">
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.95 }}
                className="d-flex align-items-center gap-2"
              >
                <img
                  src={Logo}
                  alt="Pixel Digital Logo"
                  className="pixel-navbar-logo"
                  style={{
                    maxHeight: "80px",
                    width: "auto",
                    filter: "drop-shadow(0 0 4px #001C32)",
                
                  }}
                />
                <span className="pixel-logo">PIXEL</span>
                <span className="digital-logo">DIGITAL</span>
              </motion.div>
            </Navbar.Brand>

            <Navbar.Toggle
              aria-controls="navbarScroll"
              className={`navbar-toggler ${expanded ? "active" : ""}`}
            >
              <motion.div
                animate={expanded ? "open" : "closed"}
                className="hamburger"
              >
                <span></span>
                <span></span>
                <span></span>
              </motion.div>
            </Navbar.Toggle>

            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto align-items-lg-center">
                {[
                  { path: "/", name: "Inicio" },
                  { path: "/portafolio", name: "Portafolio" },
                  { path: "/sobreNosotros", name: "Sobre Nosotros" },
                  { path: "/contacto", name: "Contacto" },
                ].map((item, index) => (
                  <motion.div
                    key={item.path}
                    custom={index}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="nav-item-wrapper"
                  >
                    <Nav.Link
                      as={Link}
                      to={item.path}
                      className={`nav-link ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                    >
                      <motion.span
                        whileHover="hover"
                        whileTap="tap"
                        variants={linkVariants}
                        className="nav-link-text"
                      >
                        {item.name}
                      </motion.span>
                      {location.pathname === item.path && (
                        <motion.div
                          layoutId="nav-underline"
                          className="nav-underline"
                          transition={{ type: "spring", bounce: 0.25 }}
                        />
                      )}
                    </Nav.Link>
                  </motion.div>
                ))}

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    as={Link}
                    to="/contacto"
                    variant="pixel-primary"
                    className="btn-pill"
                  >
                    Cotizar Ahora
                  </Button>
                </motion.div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
}

export default Menu;
