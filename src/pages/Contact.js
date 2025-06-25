import React, { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../config/constants';
import { CONTENT } from '../config/content';
import './Contact.css';

// Placeholder Icon Component
const PlaceholderIcon = ({ type, size = "2rem" }) => (
  <div className="placeholder-icon" style={{ fontSize: size }}>
    <div className="icon-placeholder" data-type={type}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="6" fill="currentColor" opacity="0.1"/>
        <circle cx="16" cy="16" r="6" fill="currentColor" opacity="0.3"/>
      </svg>
    </div>
  </div>
);

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    // Fix the content vanishing issue by ensuring proper initialization
    setIsVisible({
      'contact-intro': true,
      'contact-form': true,
      'contact-info': true
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just create a mailto link
    const subject = `Contact from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact-header section">
        <div className="container">
          <div
            id="contact-intro"
            data-animate
            className={`contact-intro ${isVisible['contact-intro'] ? 'animate-fadeInUp' : ''}`}
          >
            <h1>{CONTENT.contact.hero.title}</h1>
            <p className="contact-tagline">
              {CONTENT.contact.hero.subtitle}
            </p>
            <p className="contact-description">
              {CONTENT.contact.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info Section */}
      <section className="contact-main section bg-blue-light">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div
              id="contact-form"
              data-animate
              className={`contact-form-container ${isVisible['contact-form'] ? 'animate-fadeInUp' : ''}`}
            >
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div
              id="contact-info"
              data-animate
              className={`contact-info-container ${isVisible['contact-info'] ? 'animate-fadeInUp' : ''}`}
            >
              <div className="contact-info">
                <h2>{CONTENT.contact.info.title}</h2>
                <p>{CONTENT.contact.info.description}</p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <PlaceholderIcon type="email" />
                    <div>
                      <h4>Email</h4>
                      <a href={`mailto:${COMPANY_INFO.email}`}>{COMPANY_INFO.email}</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <PlaceholderIcon type="phone" />
                    <div>
                      <h4>Phone</h4>
                      <a href={`tel:${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                    </div>
                  </div>
                </div>

                <div className="office-locations">
                  <h3>Our Offices</h3>
                  {CONTENT.contact.info.offices.map((office, index) => (
                    <div key={index} className="office-item">
                      <PlaceholderIcon type="location" />
                      <div>
                        <h4>{office.title}</h4>
                        <p>{office.address}</p>
                        {office.isHeadquarters && <span className="hq-badge">Headquarters</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta section bg-navy">
        <div className="container">
          <div className="cta-content">
            <h2>{CONTENT.contact.cta.title}</h2>
            <p>{CONTENT.contact.cta.description}</p>
            <div className="cta-actions">
              <a href={`mailto:${COMPANY_INFO.email}`} className="btn btn-primary btn-lg">
                {CONTENT.contact.cta.primaryButton}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
