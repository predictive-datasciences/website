import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "🔮",
      title: "Predictive Analytics",
      description: "Harness the power of machine learning and AI to predict future trends, customer behavior, and business outcomes with unprecedented accuracy.",
      link: "/about"
    },
    {
      icon: "📊",
      title: "Data Visualization",
      description: "Transform complex data into intuitive, interactive dashboards and reports that drive informed decision-making across your organization.",
      link: "/about"
    },
    {
      icon: "🤖",
      title: "AI-Powered Insights",
      description: "Leverage cutting-edge artificial intelligence to uncover hidden patterns, optimize processes, and accelerate business growth.",
      link: "/about"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "15+", label: "Years Experience" }
  ];

  const heroStats = [
    { number: "10M+", label: "Data Points Processed" },
    { number: "99.9%", label: "Accuracy Rate" },
    { number: "50+", label: "Enterprise Clients" }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-badge">
                <span>🚀</span>
                <span>Transforming Business with Data Science</span>
              </div>

              <h1 className="hero-title">
                Unlock the Power of
                <br />
                Predictive Analytics
              </h1>

              <p className="hero-subtitle">
                We help enterprises harness the full potential of their data through cutting-edge predictive analytics, machine learning, and AI-driven insights.
              </p>

              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary btn-xl">
                  Get Started Today
                </Link>
                <Link to="/about" className="btn btn-outline-white btn-xl">
                  Learn More
                </Link>
              </div>

              <div className="hero-stats">
                {heroStats.map((stat, index) => (
                  <div key={index} className="hero-stat">
                    <span className="hero-stat-number">{stat.number}</span>
                    <span className="hero-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-content">
                <div className="hero-visual-grid">
                  <div className="hero-visual-item">📈</div>
                  <div className="hero-visual-item">🎯</div>
                  <div className="hero-visual-item">⚡</div>
                  <div className="hero-visual-item">🔍</div>
                  <div className="hero-visual-item">💡</div>
                  <div className="hero-visual-item">🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-header">
            <div className="features-badge">
              <span>⭐</span>
              <span>Our Core Services</span>
            </div>
            <h2 className="features-title">
              Enterprise-Grade Data Solutions
            </h2>
            <p className="features-subtitle">
              From predictive modeling to real-time analytics, we deliver comprehensive data science solutions that drive measurable business impact.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <Link to={feature.link} className="feature-link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container stats-container">
          <div className="stats-header">
            <h2 className="stats-title">Trusted by Industry Leaders</h2>
            <p className="stats-subtitle">
              Our track record speaks for itself. Here's what we've achieved together with our clients.
            </p>
          </div>

          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-container">
            <h2 className="cta-title">
              Ready to Transform Your Business?
            </h2>
            <p className="cta-subtitle">
              Join hundreds of forward-thinking companies that have already revolutionized their operations with our data science expertise.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Start Your Journey
              </Link>
              <Link to="/about" className="btn btn-outline-white">
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
