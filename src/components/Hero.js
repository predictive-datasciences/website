import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero bg-gradient">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title text-white">
              The Fastest, Most Explainable LOS for Indian MSME and LAP Lenders
            </h1>
            <p className="hero-subtitle text-white">
              Automate, customize, and scale your lending operations — without expensive bloat.
              Built for NBFCs, co-ops, and field-heavy lenders across India.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary btn-large">
                Schedule a Demo
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-large">
                Download Product Brochure
              </Link>
              <Link to="/contact" className="btn btn-success btn-large">
                Talk to an Expert
              </Link>
            </div>

            <div className="hero-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">✅</div>
                <span>30–45 day deployment</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🧠</div>
                <span>Built-in credit + fraud scoring</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">📱</div>
                <span>Vernacular mobile onboarding</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🔁</div>
                <span>White-label enabled</span>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">🛡️</div>
                <span>100% DPDP-compliant</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="loan-journey">
              <div className="journey-step">
                <div className="step-icon borrower">👨‍💼</div>
                <span>MSME Borrower</span>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-step">
                <div className="step-icon officer">📱</div>
                <span>Mobile Field Officer</span>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-step">
                <div className="step-icon ai">🤖</div>
                <span>AI-Driven Decision</span>
              </div>
              <div className="journey-arrow">→</div>
              <div className="journey-step">
                <div className="step-icon disbursement">💰</div>
                <span>Seamless Disbursement</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
    </section>
  );
};

export default Hero;
