import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🎯',
      title: 'Risk Assessment',
      description: 'Advanced machine learning models to evaluate and predict business risks with unprecedented accuracy.',
      details: ['Credit Risk Modeling', 'Market Risk Analysis', 'Operational Risk Management']
    },
    {
      icon: '🛡️',
      title: 'Fraud Detection',
      description: 'Real-time fraud detection systems that protect your business from financial crimes and suspicious activities.',
      details: ['Transaction Monitoring', 'Identity Verification', 'Behavioral Analytics']
    },
    {
      icon: '🏦',
      title: 'Fintech Solutions',
      description: 'Comprehensive fintech consulting and custom solutions for modern financial services companies.',
      details: ['Digital Banking', 'Payment Processing', 'Regulatory Compliance']
    },
    {
      icon: '⚙️',
      title: 'LOS Systems',
      description: 'Loan Origination Systems designed to streamline lending processes and improve decision-making.',
      details: ['Automated Underwriting', 'Document Processing', 'Workflow Management']
    },
    {
      icon: '📊',
      title: 'Predictive Modeling',
      description: 'Custom predictive models that transform your data into actionable business intelligence.',
      details: ['Customer Segmentation', 'Churn Prediction', 'Revenue Forecasting']
    },
    {
      icon: '🔍',
      title: 'Data Analytics',
      description: 'Deep insights from your data to drive strategic business decisions and competitive advantage.',
      details: ['Business Intelligence', 'Performance Metrics', 'Trend Analysis']
    }
  ];

  const stats = [
    { number: '300M+', label: 'Loans Originated' },
    { number: '20+', label: 'Years Experience' },
    { number: '100+', label: 'Patents Filed' },
    { number: '382+', label: 'Patent References' }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title animate-fadeInUp">
            Who knows what the future of big data will bring?
          </h1>
          <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            We do, because we're creating that future.
          </p>
          <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Advanced predictive analytics, fraud detection, and risk assessment solutions
            for fintech companies and financial institutions worldwide.
          </p>
          <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <Link to="/about" className="btn btn-primary btn-lg">
              Learn More
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section section-sm">
        <div className="container">
          <div
            id="stats"
            data-animate
            className={`stats-grid ${isVisible.stats ? 'animate-fadeInUp' : ''}`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section section">
        <div className="container">
          <div
            id="features-header"
            data-animate
            className={`section-header ${isVisible['features-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Our Expertise</h2>
            <p>
              Transforming businesses through cutting-edge predictive analytics and
              innovative financial technology solutions.
            </p>
          </div>

          <div
            id="features-grid"
            data-animate
            className={`features-grid ${isVisible['features-grid'] ? 'animate-fadeInUp' : ''}`}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-section section bg-gray-100">
        <div className="container">
          <div className="value-content">
            <div
              id="value-text"
              data-animate
              className={`value-text ${isVisible['value-text'] ? 'slide-in-left' : ''}`}
            >
              <h2>Why Choose Predictive Data Sciences?</h2>
              <div className="value-points">
                <div className="value-point">
                  <div className="value-point-icon">✓</div>
                  <div>
                    <h4>Proven Track Record</h4>
                    <p>Over 20 years of experience in predictive analytics with $300M+ in loans originated through our systems.</p>
                  </div>
                </div>
                <div className="value-point">
                  <div className="value-point-icon">✓</div>
                  <div>
                    <h4>Innovation Leadership</h4>
                    <p>100+ patents filed with 382+ patent references, including groundbreaking fraud detection technologies.</p>
                  </div>
                </div>
                <div className="value-point">
                  <div className="value-point-icon">✓</div>
                  <div>
                    <h4>Custom Solutions</h4>
                    <p>No off-the-shelf solutions. Every project is approached with fresh eyes and innovative thinking.</p>
                  </div>
                </div>
                <div className="value-point">
                  <div className="value-point-icon">✓</div>
                  <div>
                    <h4>Industry Expertise</h4>
                    <p>Deep partnerships with major financial institutions like Wells Fargo, MasterCard, and Barclays.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="value-image"
              data-animate
              className={`value-image ${isVisible['value-image'] ? 'slide-in-right' : ''}`}
            >
              <div className="placeholder-image">
                <div className="placeholder-content">
                  <div className="placeholder-icon">📊</div>
                  <p>Data Visualization Dashboard<br/><small>Placeholder for your asset</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <div
            id="cta"
            data-animate
            className={`cta-content ${isVisible.cta ? 'animate-fadeInUp' : ''}`}
          >
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's discuss how our predictive analytics solutions can help you make better decisions,
              reduce risks, and unlock new opportunities for growth.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: 'white', color: 'var(--primary-blue)' }}>
                Start Your Project
              </Link>
              <Link to="/careers" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
