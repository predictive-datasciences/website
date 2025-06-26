import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CONTENT } from '../config/content';
import { COMPANY_INFO } from '../config/constants';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="logo" onClick={closeMobileMenu}>
              <div className="logo-icon">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L30 9v14L16 30L2 23V9L16 2z" fill="url(#gradient)" stroke="#667eea" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea"/>
                      <stop offset="100%" stopColor="#764ba2"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="logo-text">
                <div className="logo-name">{CONTENT.company.name}</div>
                <div className="logo-tagline">AI • Fintech • Innovation</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-desktop">
              <ul className="nav-list">
                {navigation.map((item) => (
                  <li key={item.name} className="nav-item">
                    <Link
                      to={item.href}
                      className={`nav-link ${location.pathname === item.href ? 'active' : ''}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Header CTA */}
            <div className="header-cta">
              <a
                href={`mailto:?to=${COMPANY_INFO.email}&subject=Get Started - Fintech AI Solutions&body=Hi, I'm interested in learning more about your AI-powered fintech solutions. Please reach out to discuss how you can help transform my business.`}
                className="btn btn-primary"
              >
                Get Started
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <Link to="/" className="mobile-logo" onClick={closeMobileMenu}>
              <div className="logo-icon">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                  <path d="M16 2L30 9v14L16 30L2 23V9L16 2z" fill="url(#gradient-mobile)" stroke="#667eea" strokeWidth="2"/>
                  <defs>
                    <linearGradient id="gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#667eea"/>
                      <stop offset="100%" stopColor="#764ba2"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="mobile-logo-text">{CONTENT.company.name}</span>
            </Link>
            <button className="mobile-menu-close" onClick={closeMobileMenu} aria-label="Close mobile menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navigation.map((item, index) => (
                <li key={item.name} className="mobile-nav-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <Link
                    to={item.href}
                    className={`mobile-nav-link ${location.pathname === item.href ? 'active' : ''}`}
                    onClick={closeMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu-footer">
            <Link to="/contact" className="btn btn-primary btn-block" onClick={closeMobileMenu}>
              Get Started
            </Link>
            <p className="mobile-menu-tagline">
              Transforming Fintech with AI-Powered Solutions
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
