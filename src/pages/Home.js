import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CONTENT } from '../config/content';
import { ASSETS, STATS } from '../config/constants';
import './Home.css';

const Home = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visibleElements.has(id);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-particles">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 20}s`,
                  animationDuration: `${20 + Math.random() * 10}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-badge animate-fadeInUp">
                {CONTENT.hero.badge}
              </div>

              <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                {CONTENT.hero.title}
              </h1>

              <p className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                {CONTENT.hero.subtitle}
              </p>

              <div className="hero-actions animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <Link to="/contact" className="btn btn-primary btn-xl">
                  {CONTENT.hero.cta.primary}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
                <Link to="/about" className="btn btn-outline-white btn-xl">
                  {CONTENT.hero.cta.secondary}
                </Link>
              </div>

              <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                {CONTENT.hero.stats.map((stat, index) => (
                  <div key={index} className="hero-stat">
                    <div className="hero-stat-number">{stat.number}</div>
                    <div className="hero-stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual animate-fadeInRight" style={{ animationDelay: '0.4s' }}>
              <div className="hero-image-container">
                <img
                  src={ASSETS.company.heroImage}
                  alt="AI-Powered Fintech Solutions"
                  className="hero-image"
                />
                <div className="hero-image-overlay"></div>

                {/* Floating Cards */}
                <div className="floating-card floating-card-1">
                  <div className="floating-card-icon">🚀</div>
                  <div className="floating-card-text">
                    <div className="floating-card-title">AI Models</div>
                    <div className="floating-card-value">99.2% Accuracy</div>
                  </div>
                </div>

                <div className="floating-card floating-card-2">
                  <div className="floating-card-icon">📊</div>
                  <div className="floating-card-text">
                    <div className="floating-card-title">Transactions</div>
                    <div className="floating-card-value">50M+ Processed</div>
                  </div>
                </div>

                <div className="floating-card floating-card-3">
                  <div className="floating-card-icon">🏆</div>
                  <div className="floating-card-text">
                    <div className="floating-card-title">Clients</div>
                    <div className="floating-card-value">200+ Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-indicator-line"></div>
          <div className="scroll-indicator-text">Scroll to explore</div>
        </div>
      </section>

      {/* Rolling Stats Bar */}
      <section className="stats-bar">
        <div className="stats-container">
          <div className="stats-track">
            {[...STATS, ...STATS].map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section services-section">
        <div className="container">
          <div
            className={`section-header ${isVisible('services-header') ? 'animate-fadeInUp' : 'opacity-0'}`}
            id="services-header"
            data-animate
          >
            <h2>{CONTENT.services.title}</h2>
            <p>{CONTENT.services.subtitle}</p>
          </div>

          <div className="services-grid">
            {CONTENT.services.items.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className={`service-card ${isVisible(`service-${index}`) ? 'animate-fadeInUp' : 'opacity-0'}`}
                id={`service-${index}`}
                data-animate
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-card-header">
                  <div className="service-icon">
                    <img
                      src={ASSETS.services[Object.keys(ASSETS.services)[index]]}
                      alt={service.title}
                      className="service-image"
                    />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                </div>

                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="service-feature">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M13.5 4.5L6 12 2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="service-cta">
                  Learn More
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12l4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section testimonials-section">
        <div className="testimonials-background">
          <img src={ASSETS.backgrounds.testimonials} alt="" className="testimonials-bg-image" />
          <div className="testimonials-bg-overlay"></div>
        </div>

        <div className="container">
          <div
            className={`section-header ${isVisible('testimonials-header') ? 'animate-fadeInUp' : 'opacity-0'}`}
            id="testimonials-header"
            data-animate
          >
            <h2>Trusted by Industry Leaders</h2>
            <p>See what our clients say about our AI-powered fintech solutions</p>
          </div>

          <div className="testimonials-grid">
            {CONTENT.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`testimonial-card ${isVisible(`testimonial-${index}`) ? 'animate-fadeInUp' : 'opacity-0'}`}
                id={`testimonial-${index}`}
                data-animate
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="testimonial-content">
                  <div className="testimonial-quote">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M14 18c0 2-2 4-4 4s-4-2-4-4 2-4 4-4c.5 0 1 .1 1.5.3C11.5 9.8 9.1 6 6 6v4c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2H10c2.2 0 4 1.8 4 4zm12 0c0 2-2 4-4 4s-4-2-4-4 2-4 4-4c.5 0 1 .1 1.5.3C23.5 9.8 21.1 6 18 6v4c2.2 0 4 1.8 4 4 0 .7-.2 1.4-.5 2H22c2.2 0 4 1.8 4 4z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="testimonial-text">"{testimonial.quote}"</p>
                </div>

                <div className="testimonial-author">
                  <div className="testimonial-author-info">
                    <div className="testimonial-author-name">{testimonial.name}</div>
                    <div className="testimonial-author-title">{testimonial.position}</div>
                    <div className="testimonial-company-type">{testimonial.company}</div>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 1l2.4 4.8L16 6.9l-4 3.9.9 5.2L8 13.6 3.1 16l.9-5.2L0 6.9l5.6-1.1L8 1z" fill="currentColor"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="cta-background">
          <img src={ASSETS.backgrounds.cta} alt="" className="cta-bg-image" />
          <div className="cta-bg-overlay"></div>
        </div>

        <div className="container">
          <div
            className={`cta-content ${isVisible('cta-content') ? 'animate-fadeInUp' : 'opacity-0'}`}
            id="cta-content"
            data-animate
          >
            <h2 className="cta-title">{CONTENT.cta.title}</h2>
            <p className="cta-subtitle">{CONTENT.cta.subtitle}</p>

            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-xl">
                {CONTENT.cta.button}
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15l5-5-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <Link to="/about" className="btn btn-outline-white btn-xl">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
