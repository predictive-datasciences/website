import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logoHorizontal from '../assets/Logo_Horizontal.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsProductsDropdownOpen(false);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  const handleProductClick = () => {
    setIsProductsDropdownOpen(false);
  };

  const navItems = [
    { path: '/home', label: 'Home' },
    {
      path: null,
      label: 'Products',
      isDropdown: true,
      dropdownItems: [
        { path: '/platform', label: 'LOS Platform' },
        { path: '/scoring', label: 'Scoring Engine' },
        { path: '/security', label: 'Security & Compliance' }
      ]
    },
    { path: '/about', label: 'About' },
    { path: '/why-us', label: 'Why Us' }
  ];

  const isProductsActive = ['/platform', '/scoring', '/security'].includes(location.pathname);

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logoHorizontal} alt="PDS Logo" className="logo-img" />
            </Link>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index} className={item.isDropdown ? 'nav-dropdown' : ''}>
                  {item.isDropdown ? (
                    <div className="dropdown-container">
                      <button
                        className={`nav-link dropdown-toggle ${isProductsActive ? 'active' : ''}`}
                        onClick={toggleProductsDropdown}
                        aria-expanded={isProductsDropdownOpen}
                      >
                        {item.label}
                        <span className={`dropdown-arrow ${isProductsDropdownOpen ? 'open' : ''}`}>▼</span>
                      </button>
                      <div className={`dropdown-menu ${isProductsDropdownOpen ? 'show' : ''}`}>
                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                          <Link
                            key={dropdownIndex}
                            to={dropdownItem.path}
                            className={`dropdown-item ${location.pathname === dropdownItem.path ? 'active' : ''}`}
                            onClick={() => {
                              handleProductClick();
                              closeMobileMenu();
                            }}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="btn btn-primary" onClick={closeMobileMenu}>
              Schedule Demo
            </Link>
          </div>

          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
