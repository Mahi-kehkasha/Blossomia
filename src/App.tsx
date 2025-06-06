import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

function App() {
  const SocialIcon: React.FC<{ icon: IconType; href: string }> = ({ icon: Icon, href }) => {
    const IconComponent = Icon as React.ComponentType<{ size: number }>;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
        <IconComponent size={24} />
      </a>
    );
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container about-content">
            <h2 className="about-title">About Us</h2>
            
            {/* Story Section with Image */}
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <div className="about-image">
                  <img src="/images/image 3.png" alt="Blue Butterfly" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-text mt-4 mt-md-0">
                  <h3>Our Story</h3>
                  <p>
                    Welcome to Blossomia, where we celebrate the delicate beauty and grace of butterflies. Our journey began with a passion for these magnificent creatures and their symbolic representation of transformation and hope. We've created a space where art, nature, and conservation come together.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Section with Image */}
            <div className="row align-items-center flex-md-row-reverse mb-5">
              <div className="col-md-6">
                <div className="about-image">
                  <img src="/images/image 4.png" alt="Butterfly Garden" className="img-fluid" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-text mt-4 mt-md-0">
                  <h3>Our Mission</h3>
                  <p>
                    Our mission is to inspire appreciation for nature's most delicate creatures while promoting butterfly conservation. Through our art, education, and conservation efforts, we aim to create awareness about the importance of preserving butterfly habitats and their role in our ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us - Features */}
            <div className="row justify-content-center mb-5">
               <div className="col-12 text-center mb-4">
                  <h3 className="section-subtitle">Why Choose Us?</h3>
               </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="feature-item">
                  <i className="fas fa-butterfly"></i>
                  <h4>Authentic Art</h4>
                  <p>Handcrafted butterfly art pieces created with precision and care.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="feature-item">
                  <i className="fas fa-leaf"></i>
                  <h4>Conservation</h4>
                  <p>Dedicated to preserving butterfly habitats and species.</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="feature-item">
                  <i className="fas fa-seedling"></i>
                  <h4>Education</h4>
                  <p>Learn about butterfly species and their importance in nature.</p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="row justify-content-center">
               <div className="col-12 text-center mb-4">
                  <h3 className="section-subtitle">Our Impact</h3>
               </div>
              <div className="col-md-3 col-sm-6 mb-4 text-center">
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Species Protected</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4 text-center">
                <div className="stat-item">
                  <div className="stat-number">500+</div>
                  <div className="stat-label">Art Pieces Created</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-4 text-center">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Conservation Projects</div>
                </div>
              </div>
               <div className="col-md-3 col-sm-6 mb-4 text-center">
                <div className="stat-item">
                  <div className="stat-number">1000+</div>
                  <div className="stat-label">Happy Visitors</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="products-section">
          <div className="container">
            <h2 className="section-title">Our Collections</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="product-card animate-fade-in">
                  <div className="product-image spring"></div>
                  <h3>Blue Morpho Collection</h3>
                  <p>Stunning blue butterfly art pieces</p>
                  <button className="btn btn-outline-primary">View Collection</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card animate-fade-in-delay">
                  <div className="product-image wedding"></div>
                  <h3>Butterfly Garden</h3>
                  <p>Create your own butterfly sanctuary</p>
                  <button className="btn btn-outline-primary">View Collection</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="product-card animate-fade-in-delay-2">
                  <div className="product-image custom"></div>
                  <h3>Custom Art</h3>
                  <p>Personalized butterfly designs</p>
                  <button className="btn btn-outline-primary">View Collection</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="service-card animate-fade-in">
                  <i className="fas fa-paint-brush"></i>
                  <h3>Art Workshops</h3>
                  <p>Learn to create beautiful butterfly art</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card animate-fade-in-delay">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>Educational Tours</h3>
                  <p>Discover the world of butterflies</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service-card animate-fade-in-delay-2">
                  <i className="fas fa-leaf"></i>
                  <h3>Garden Design</h3>
                  <p>Create butterfly-friendly gardens</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <div className="row">
              <div className="col-md-6">
                <form className="animate-fade-in">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Your Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Your Email" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows={5} placeholder="Your Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
              <div className="col-md-6">
                <div className="contact-info animate-fade-in-delay">
                  <h3>Visit Us</h3>
                  <p>123 Butterfly Lane</p>
                  <p>Garden City, GC 12345</p>
                  <p>Phone: (555) 123-4567</p>
                  <div className="social-links">
                    <SocialIcon icon={FaInstagram} href="https://instagram.com/bluewings" />
                    <SocialIcon icon={FaFacebook} href="https://facebook.com/bluewings" />
                    <SocialIcon icon={FaTwitter} href="https://twitter.com/bluewings" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <p className="animate-fade-in">&copy; 2024 Blue Wings. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

