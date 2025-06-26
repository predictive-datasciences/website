import React, { useEffect, useState } from 'react';
import { CONTENT } from '../config/content';
import './About.css';

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

const About = () => {
  const [isVisible, setIsVisible] = useState({});
  const [expandedService, setExpandedService] = useState(null);

  useEffect(() => {
    // Fix the content vanishing issue by ensuring proper initialization
    setIsVisible({
      'about-intro': true,
      'mission-section': true,
      'services-section': true,
      'approach-section': true,
      'why-choose-section': true,
      'industries-section': true
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

  const toggleServiceDetails = (index) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <div className="about page-sky-blue">
      {/* Header Section */}
      <section className="about-header section bg-gradient-hero">
        <div className="container">
          <div
            id="about-intro"
            data-animate
            className={`about-intro text-center ${isVisible['about-intro'] ? 'animate-fadeInUp' : ''}`}
          >
            <h1 className="page-title-white">{CONTENT.about.hero.title}</h1>
            <p className="page-subtitle-white text-large mb-6">
              {CONTENT.about.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section">
        <div className="container">
          <div
            id="mission-section"
            data-animate
            className={`mission-content ${isVisible['mission-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <div className="mission-text">
              <div className="section-header">
                <h2>{CONTENT.about.mission.title}</h2>
              </div>
              <div className="mission-paragraphs">
                {CONTENT.about.mission.content.map((paragraph, index) => (
                  <p key={index} className="text-large">{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div
            id="services-section"
            data-animate
            className={`section-header ${isVisible['services-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>{CONTENT.about.services.title}</h2>
            <p>{CONTENT.about.services.subtitle}</p>
          </div>

          <div className="services-grid grid grid-auto-fit-lg">
            {CONTENT.about.services.items.map((service, index) => (
              <div key={index} className="service-card card">
                <div className="service-header card-header">
                  <PlaceholderIcon type={service.title.toLowerCase().replace(/\s+/g, '-')} />
                  <h3 className="service-title card-title">{service.title}</h3>
                </div>

                <p className="service-description card-description">{service.description}</p>

                <div className={`service-details ${expandedService === index ? 'expanded' : ''}`}>
                  <div className="service-long-description">
                    <p className="text-small">{service.longDescription}</p>

                    <ul className="service-features">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-small">{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="card-footer">
                  <button
                    className="read-more-btn btn btn-ghost btn-sm"
                    onClick={() => toggleServiceDetails(index)}
                  >
                    {expandedService === index ? 'Read Less' : 'Read More'}
                    <span className={`arrow ${expandedService === index ? 'expanded' : ''}`}>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section section">
        <div className="container">
          <div
            id="why-choose-section"
            data-animate
            className={`section-header ${isVisible['why-choose-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>{CONTENT.about.whyChooseUs.title}</h2>
            <p>{CONTENT.about.whyChooseUs.subtitle}</p>
          </div>

          <div className="why-choose-grid grid grid-auto-fit-md">
            {CONTENT.about.whyChooseUs.items.map((item, index) => (
              <div key={index} className="why-choose-card card text-center">
                <div className="card-header justify-center">
                  <PlaceholderIcon type={item.title.toLowerCase().replace(/\s+/g, '-')} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="approach-section section">
        <div className="container">
          <div
            id="approach-section"
            data-animate
            className={`section-header ${isVisible['approach-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>{CONTENT.about.approach.title}</h2>
            <p>{CONTENT.about.approach.subtitle}</p>
          </div>

          <div className="approach-grid grid grid-3">
            {CONTENT.about.approach.items.map((item, index) => (
              <div key={index} className="approach-card card text-center">
                <div className="card-header justify-center">
                  <PlaceholderIcon type={item.title.toLowerCase().replace(/\s+/g, '-')} />
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section section">
        <div className="container">
          <div
            id="industries-section"
            data-animate
            className={`section-header ${isVisible['industries-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>{CONTENT.about.industries.title}</h2>
            <p>{CONTENT.about.industries.subtitle}</p>
          </div>

          <div className="industries-grid grid grid-4">
            {CONTENT.about.industries.items.map((industry, index) => (
              <div key={index} className="industry-item card card-compact text-center">
                <PlaceholderIcon type={industry.toLowerCase().replace(/\s+/g, '-')} size="32" />
                <span className="text-sm font-medium mt-3">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
