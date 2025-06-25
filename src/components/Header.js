import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-container">
          {/* Logo Section */}
          <div className="logo-section">
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              <div className="logo-icon">
                P
              </div>
              <span className="logo-text">Predictive Data Sciences</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActiveLink('/') ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={`nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/leadership"
                  className={`nav-link ${isActiveLink('/leadership') ? 'active' : ''}`}
                >
                  Leadership
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/careers"
                  className={`nav-link ${isActiveLink('/careers') ? 'active' : ''}`}
                >
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={`nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta">
            <Link to="/contact" className="btn btn-outline">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link
                to="/"
                className={`mobile-nav-link ${isActiveLink('/') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/about"
                className={`mobile-nav-link ${isActiveLink('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/leadership"
                className={`mobile-nav-link ${isActiveLink('/leadership') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Leadership
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/careers"
                className={`mobile-nav-link ${isActiveLink('/careers') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Careers
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                to="/contact"
                className={`mobile-nav-link ${isActiveLink('/contact') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-cta">
            <Link to="/contact" className="btn btn-outline" onClick={closeMobileMenu}>
              Get Started
            </Link>
            <Link to="/about" className="btn btn-primary" onClick={closeMobileMenu}>
              Learn More
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
