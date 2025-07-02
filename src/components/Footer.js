import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logoHorizontal from '../assets/Logo_Horizontal.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Why PDS', path: '/why-pds' },
      { name: 'Platform Overview', path: '/platform' },
      { name: 'Scoring Engine', path: '/scoring' },
      { name: 'Security & Compliance', path: '/security' },
      { name: 'Pricing', path: '/pricing' }
    ],
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Case Studies', path: '/case-study' },
      { name: 'Contact', path: '/contact' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' }
    ],
    resources: [
      { name: 'Documentation', path: '/docs' },
      { name: 'API Reference', path: '/api' },
      { name: 'Integration Guide', path: '/integration' },
      { name: 'Support Center', path: '/support' },
      { name: 'Training', path: '/training' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Data Processing', path: '/data-processing' },
      { name: 'Security Policy', path: '/security-policy' },
      { name: 'Compliance', path: '/compliance-docs' }
    ]
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoHorizontal} alt="PDS Logo" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              India's fastest, most explainable Loan Origination System
              for MSME and LAP lenders. Built for speed, compliance,
              and real-world Indian lending scenarios.
            </p>
            <div className="footer-social">
              <a href="https://linkedin.com/company/pds" className="social-link">
                <span className="social-icon">💼</span>
              </a>
              <a href="https://twitter.com/pds_india" className="social-link">
                <span className="social-icon">🐦</span>
              </a>
              <a href="mailto:hello@pds.co.in" className="social-link">
                <span className="social-icon">📧</span>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="footer-section">
            <h4 className="footer-title">Product</h4>
            <ul className="footer-links">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="footer-section">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="footer-section">
            <h4 className="footer-title">Resources</h4>
            <ul className="footer-links">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="footer-section">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Get in Touch</h4>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                Bangalore, India
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                +91-80-XXXX-XXXX
              </p>
              <p className="contact-item">
                <span className="contact-icon">✉️</span>
                hello@pds.co.in
              </p>
            </div>

            <div className="footer-cta">
              <Link to="/contact" className="btn btn-primary btn-sm">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} PDS (Predictive Data Sciences). All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/privacy" className="footer-bottom-link">Privacy</Link>
              <Link to="/terms" className="footer-bottom-link">Terms</Link>
              <Link to="/security-policy" className="footer-bottom-link">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
