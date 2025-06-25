import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTENT } from '../config/content';
import './Leadership.css';

// Professional Icon Component
const PlaceholderIcon = ({ type, size = "40" }) => (
  <div className="placeholder-icon">
    <div className="icon-placeholder" data-type={type}>
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="currentColor" opacity="0.1"/>
        <circle cx="20" cy="20" r="8" fill="currentColor" opacity="0.3"/>
      </svg>
    </div>
  </div>
);

const Leadership = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Fix the content vanishing issue by ensuring proper initialization
    setIsVisible({
      'leadership-intro': true,
      'founder-section': true,
      'company-info': true
    });

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

  return (
    <div className="leadership">
      {/* Header Section */}
      <section className="leadership-header section bg-gradient-hero">
        <div className="container">
          <div
            id="leadership-intro"
            data-animate
            className={`leadership-intro text-center ${isVisible['leadership-intro'] ? 'animate-fadeInUp' : ''}`}
          >
            <h1>{CONTENT.leadership.hero.title}</h1>
            <p className="leadership-tagline text-large mb-6">
              {CONTENT.leadership.hero.subtitle}
            </p>
            <p className="leadership-description text-large">
              {CONTENT.leadership.header.description}
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section section bg-primary-light">
        <div className="container">
          <div
            id="founder-section"
            data-animate
            className={`founder-content ${isVisible['founder-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <div className="founder-card card card-spacious">
              <div className="founder-layout grid grid-auto-fit-md gap-8">
                <div className="founder-image">
                  <div className="placeholder-image">
                    <div className="placeholder-content text-center">
                      <PlaceholderIcon type="founder" size="80" />
                      <p className="text-sm mt-4">{CONTENT.leadership.founder.name}<br/><small>Placeholder for photo</small></p>
                    </div>
                  </div>
                </div>

                <div className="founder-info">
                  <h2>{CONTENT.leadership.founder.name}</h2>
                  <p className="founder-title text-xl text-primary font-semibold mb-6">{CONTENT.leadership.founder.title}</p>

                  <div className="founder-bio">
                    <p className="text-large mb-6">{CONTENT.leadership.founder.bio}</p>

                    <h3 className="mb-4">Background & Achievements</h3>
                    <ul className="mb-6">
                      {CONTENT.leadership.founder.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>

                    <h3 className="mb-4">Professional Profile</h3>
                    <div className="professional-links">
                      <a href={CONTENT.leadership.founder.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link btn btn-outline btn-base">
                        <PlaceholderIcon type="linkedin" size="24" />
                        View LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="company-info section bg-white">
        <div className="container">
          <div
            id="company-info"
            data-animate
            className={`section-header ${isVisible['company-info'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>{CONTENT.leadership.company.title}</h2>
            <p>{CONTENT.leadership.company.description}</p>
          </div>

          <div className="company-stats grid grid-4">
            {CONTENT.leadership.company.stats.map((stat, index) => (
              <div key={index} className="stat-card card text-center">
                <PlaceholderIcon type={stat.label.toLowerCase().replace(/\s+/g, '-')} size="48" />
                <h3 className="text-lg font-semibold mt-4 mb-2">{stat.label}</h3>
                <p className="text-primary font-bold text-xl">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section bg-gradient-primary">
        <div className="container">
          <div className="cta-content text-center">
            <h2>{CONTENT.leadership.cta.title}</h2>
            <p className="text-large mb-8">{CONTENT.leadership.cta.description}</p>
            <div className="cta-actions flex gap-4 justify-center">
              <Link to="/contact" className="btn btn-secondary btn-xl">
                {CONTENT.leadership.cta.primaryButton}
              </Link>
              <Link to="/about" className="btn btn-outline-white btn-xl">
                {CONTENT.leadership.cta.secondaryButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
