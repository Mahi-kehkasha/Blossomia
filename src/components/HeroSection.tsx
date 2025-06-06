import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="animated-particles"></div>
      </div>
      
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                <span className="gradient-text">Blossomia</span>
                <br />
                <span className="subtitle">Where Nature Meets Art</span>
              </h1>
              <p className="hero-subtitle">
                Immerse yourself in the enchanting world of butterflies through our unique collection of art, conservation efforts, and educational experiences.
              </p>
              <div className="hero-buttons">
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Gallery
                </motion.button>
                <motion.button 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Our Mission
                </motion.button>
              </div>
              <div className="hero-features">
                <div className="feature">
                  <i className="fas fa-paint-brush"></i>
                  <span>Unique Art</span>
                </div>
                <div className="feature">
                  <i className="fas fa-leaf"></i>
                  <span>Conservation</span>
                </div>
                <div className="feature">
                  <i className="fas fa-book"></i>
                  <span>Education</span>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-6">
            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-image">
                <img src="/images/image 7.png" alt="Blue Morpho Butterfly" className="main-image" />
                <div className="floating-card card-1">
                  <img src="/images/image 3.png" alt="Butterfly Art" />
                </div>
                <div className="floating-card card-2">
                  <img src="/images/image 6.png" alt="Butterfly Garden" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 