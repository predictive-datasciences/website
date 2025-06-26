import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
      }, 2000); // Show after 2 seconds
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`cookie-consent ${isAnimating ? 'animate-in' : 'animate-out'}`}>
      <div className="cookie-consent-content">
        <div className="cookie-icon">
          🍪
        </div>
        <div className="cookie-text">
          <h3 className="cookie-title">We value your privacy</h3>
          <p className="cookie-description">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
            By clicking "Accept All", you consent to our use of cookies.
          </p>
        </div>
        <div className="cookie-actions">
          <button
            onClick={handleDecline}
            className="cookie-btn cookie-btn-secondary"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="cookie-btn cookie-btn-primary"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
