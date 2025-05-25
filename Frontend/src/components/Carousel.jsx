import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Detecta cambios en el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate carousel con pausa al hacer hover
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Aumentado a 5 segundos para mejor UX

    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const handleNext = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  }, [items.length]);

  const goToIndex = useCallback(
    (index) => {
      setDirection(index > currentIndex ? "right" : "left");
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Animation variants mejorados
  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    exitRight: {
      x: "-100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
    exitLeft: {
      x: "100%",
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const fadeVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <div
      className="pixel-carousel-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-wrapper">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
            animate="visible"
            exit={direction === "right" ? "exitLeft" : "exitRight"}
            variants={slideVariants}
            className="carousel-item"
          >
            <div className="carousel-content">
              {items[currentIndex].image && (
                <div className="carousel-image-container">
                  <motion.img
                    src={items[currentIndex].image}
                    alt={items[currentIndex].title}
                    className="carousel-image"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fadeVariants}
                    loading="lazy"
                  />
                  {/* Overlay para mejor legibilidad del texto */}
                  <div className="image-overlay"></div>
                </div>
              )}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-content"
              >
                <h2 className="carousel-title">{items[currentIndex].title}</h2>
                <p className="carousel-description">
                  {items[currentIndex].description}
                </p>
                {items[currentIndex].cta && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="carousel-cta"
                  >
                    {items[currentIndex].cta}
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controles de navegación */}
        {!isMobile && (
          <>
            <button
              onClick={handlePrev}
              className="carousel-control prev"
              aria-label="Previous slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="carousel-control next"
              aria-label="Next slide"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Indicadores */}
      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
