import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isHovered, setIsHovered] = useState(false);

  // Auto-rotate carousel con pausa al hacer hover
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    
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

  const goToIndex = useCallback((index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  }, [currentIndex]);

  // Animation variants mejorados
  const slideVariants = {
    hiddenRight: { x: "100%", opacity: 0 },
    hiddenLeft: { x: "-100%", opacity: 0 },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exitRight: { x: "-100%", opacity: 0, transition: { duration: 0.5 } },
    exitLeft: { x: "100%", opacity: 0, transition: { duration: 0.5 } }
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { opacity: 0 }
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
                  />
                </div>
              )}
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-content"
              >
                <h2 className="carousel-title">
                  {items[currentIndex].title}
                </h2>
                <p className="carousel-description">
                  {items[currentIndex].description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrev}
          className="carousel-control prev"
          aria-label="Previous slide"
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <button
          onClick={handleNext}
          className="carousel-control next"
          aria-label="Next slide"
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>

      <div className="carousel-indicators">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;