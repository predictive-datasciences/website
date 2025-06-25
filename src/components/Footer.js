import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-container">
            {/* Company Section */}
            <div className="footer-company">
              <Link to="/" className="footer-logo">
                <div className="footer-logo-icon">
                  P
                </div>
                <span className="footer-logo-text">Predictive Data Sciences</span>
              </Link>

              <p className="footer-description">
                Transforming businesses through cutting-edge data science, machine learning, and AI solutions. We help enterprises unlock the full potential of their data.
              </p>

              <div className="footer-social">
                <a
                  href="https://linkedin.com/company/predictive-data-sciences"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="mailto:contact@predictive-data-sciences.com"
                  className="footer-social-link"
                  aria-label="Email"
                >
                  ✉️
                </a>
                <a
                  href="https://github.com/predictive-data-sciences"
                  className="footer-social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  💻
                </a>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="footer-section">
              <h3 className="footer-section-title">Navigation</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">About</Link>
                </li>
                <li>
                  <Link to="/leadership" className="footer-link">Leadership</Link>
                </li>
                <li>
                  <Link to="/careers" className="footer-link">Careers</Link>
                </li>
                <li>
                  <Link to="/contact" className="footer-link">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Services Section */}
            <div className="footer-section">
              <h3 className="footer-section-title">Services</h3>
              <ul className="footer-links">
                <li>
                  <Link to="/about" className="footer-link">Predictive Analytics</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">Data Visualization</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">Machine Learning</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">AI Solutions</Link>
                </li>
                <li>
                  <Link to="/about" className="footer-link">Data Strategy</Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="footer-section">
              <h3 className="footer-section-title">Contact</h3>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">📍</div>
                  <div>
                    <div>Chennai, Tamil Nadu, India</div>
                    <div>San Diego, CA, USA</div>
                  </div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">📧</div>
                  <div>contact@predictive-data-sciences.com</div>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">📞</div>
                  <div>Available 24/7</div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="footer-newsletter">
                <h4 className="footer-newsletter-title">Stay Updated</h4>
                <form className="footer-newsletter-form">
                  <input
                    type="email"
                    className="footer-newsletter-input"
                    placeholder="Enter your email"
                    aria-label="Email address"
                  />
                  <button type="submit" className="footer-newsletter-button">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-container">
            <div className="footer-copyright">
              © {currentYear} Predictive Data Sciences. All rights reserved.
            </div>
            <ul className="footer-legal">
              <li>
                <a href="/privacy" className="footer-legal-link">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="footer-legal-link">Terms of Service</a>
              </li>
              <li>
                <a href="/cookies" className="footer-legal-link">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
