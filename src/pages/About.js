import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
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

  const approaches = [
    {
      title: 'Data Science Excellence',
      description: 'We rely on data science, not just standard analytics, applying the latest thinking in advanced methodologies.',
      icon: '🔬'
    },
    {
      title: 'Innovation First',
      description: 'Every assignment is approached with fresh eyes. No off-the-shelf solutions - innovation makes our solutions more valuable.',
      icon: '💡'
    },
    {
      title: 'Experienced Leadership',
      description: 'Led by early adopters of data analysis in financial services, bringing broad experience solving difficult problems.',
      icon: '👥'
    },
    {
      title: 'Partnership Approach',
      description: 'We work with and learn from the best and brightest, creating solutions that benefit millions of people.',
      icon: '🤝'
    }
  ];

  const industries = [
    { name: 'Fintech & Digital Banking', icon: '🏦' },
    { name: 'Traditional Banking', icon: '🏛️' },
    { name: 'Insurance Companies', icon: '🛡️' },
    { name: 'Investment Firms', icon: '📈' },
    { name: 'Lending Platforms', icon: '💰' },
    { name: 'Payment Processors', icon: '💳' }
  ];

  return (
    <div className="about">
      {/* Header Section */}
      <section className="about-header section">
        <div className="container">
          <div
            id="about-intro"
            data-animate
            className={`about-intro ${isVisible['about-intro'] ? 'animate-fadeInUp' : ''}`}
          >
            <h1>About Predictive Data Sciences</h1>
            <p className="about-tagline">
              Creating the future of big data through innovative predictive analytics solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section bg-gray-100">
        <div className="container">
          <div className="mission-content">
            <div
              id="mission-image"
              data-animate
              className={`mission-image ${isVisible['mission-image'] ? 'slide-in-left' : ''}`}
            >
              <div className="placeholder-image">
                <div className="placeholder-content">
                  <div className="placeholder-icon">🎯</div>
                  <p>Mission & Vision<br/><small>Placeholder for your asset</small></p>
                </div>
              </div>
            </div>

            <div
              id="mission-text"
              data-animate
              className={`mission-text ${isVisible['mission-text'] ? 'slide-in-right' : ''}`}
            >
              <h2>The Need for Predictive Data Sciences</h2>
              <div className="mission-paragraphs">
                <p>
                  Millions of people and small businesses in the US and around the world are still underserved by
                  traditional sources of credit. Long after the 2008 financial crisis, bank loans are still out of reach
                  for many, creating a significant gap in the financial ecosystem.
                </p>
                <p>
                  Meeting the needs of these underserved customers demands new ways of assessing credit and fraud risk.
                  Until now, even big data methods have fallen short of providing comprehensive solutions that can
                  effectively serve this market segment.
                </p>
                <p>
                  <strong>Predictive Data Sciences</strong> offers innovative solutions through emerging methodologies combined with
                  deep experience and cutting-edge innovation. As our name implies, we rely on data science, not just standard
                  analytics. We apply only the latest thinking because the ever-growing challenges of risk analysis demand it.
                </p>
                <p>
                  We're led by some of the earliest adopters of data analysis in financial services, bringing broad experience
                  in solving difficult problems. Finally, we approach every assignment with fresh eyes—no off-the-shelf
                  solutions will do. Innovation makes our solutions more valuable to our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section section">
        <div className="container">
          <div
            id="approach-header"
            data-animate
            className={`section-header ${isVisible['approach-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Our Approach</h2>
            <p>
              We combine cutting-edge data science with deep industry expertise to deliver
              solutions that transform how businesses assess risk and make decisions.
            </p>
          </div>

          <div
            id="approach-grid"
            data-animate
            className={`approach-grid ${isVisible['approach-grid'] ? 'animate-fadeInUp' : ''}`}
          >
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="approach-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="approach-icon">{approach.icon}</div>
                <h3>{approach.title}</h3>
                <p>{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section section bg-gray-100">
        <div className="container">
          <div
            id="industries-header"
            data-animate
            className={`section-header ${isVisible['industries-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Industries We Serve</h2>
            <p>
              Our predictive analytics solutions are tailored for financial services companies
              across various sectors, helping them make better decisions and serve customers more effectively.
            </p>
          </div>

          <div
            id="industries-grid"
            data-animate
            className={`industries-grid ${isVisible['industries-grid'] ? 'animate-fadeInUp' : ''}`}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="industry-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="industry-icon">{industry.icon}</div>
                <h4>{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="values-content">
            <div
              id="values-text"
              data-animate
              className={`values-text ${isVisible['values-text'] ? 'slide-in-left' : ''}`}
            >
              <h2>Our Values</h2>
              <div className="values-list">
                <div className="value-item">
                  <div className="value-icon">🎯</div>
                  <div>
                    <h4>Excellence in Execution</h4>
                    <p>We deliver solutions that exceed expectations and drive real business results.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🤝</div>
                  <div>
                    <h4>Collaborative Partnership</h4>
                    <p>We work closely with our clients to understand their unique challenges and goals.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🔬</div>
                  <div>
                    <h4>Scientific Rigor</h4>
                    <p>Our solutions are built on solid scientific foundations and proven methodologies.</p>
                  </div>
                </div>
                <div className="value-item">
                  <div className="value-icon">🚀</div>
                  <div>
                    <h4>Continuous Innovation</h4>
                    <p>We stay at the forefront of technology to provide cutting-edge solutions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="values-stats"
              data-animate
              className={`values-stats ${isVisible['values-stats'] ? 'slide-in-right' : ''}`}
            >
              <div className="stats-container">
                <div className="stat-highlight">
                  <div className="stat-number">$300M+</div>
                  <div className="stat-label">Loans Originated</div>
                  <p>Through our advanced LOS systems and risk assessment models</p>
                </div>
                <div className="stat-highlight">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">Patents Filed</div>
                  <p>Innovation in fraud detection and predictive modeling</p>
                </div>
                <div className="stat-highlight">
                  <div className="stat-number">20+</div>
                  <div className="stat-label">Years Experience</div>
                  <p>Deep expertise in financial services and data science</p>
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
            id="about-cta"
            data-animate
            className={`cta-content ${isVisible['about-cta'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Ready to Get Started?</h2>
            <p>
              Let's discuss how our predictive analytics expertise can help your organization
              make better decisions, reduce risks, and unlock new opportunities.
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: 'white', color: 'var(--primary-blue)' }}>
                Contact Us Today
              </Link>
              <Link to="/leadership" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
