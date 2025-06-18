import React, { useEffect, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Simulate form submission
    try {
      // In a real implementation, you would send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));

      setSubmitMessage('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Us',
      description: 'Send us an email and we\'ll respond within 24 hours',
      contact: 'info@predictivedatasciences.com',
      action: 'mailto:info@predictivedatasciences.com'
    },
    {
      icon: '💼',
      title: 'Careers',
      description: 'Interested in joining our team? Send your CV',
      contact: 'careers@predictivedatasciences.com',
      action: 'mailto:careers@predictivedatasciences.com'
    },
    {
      icon: '🤝',
      title: 'Partnerships',
      description: 'Explore partnership opportunities with us',
      contact: 'partnerships@predictivedatasciences.com',
      action: 'mailto:partnerships@predictivedatasciences.com'
    },
    {
      icon: '🌐',
      title: 'Global Reach',
      description: 'We work with clients worldwide',
      contact: 'Remote-first company with global presence',
      action: null
    }
  ];

  const officeLocations = [
    {
      city: 'San Francisco',
      country: 'United States',
      description: 'Data Science Hub',
      icon: '🇺🇸'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      description: 'European Operations',
      icon: '🇬🇧'
    },
    {
      city: 'Toronto',
      country: 'Canada',
      description: 'Innovation Center',
      icon: '🇨🇦'
    }
  ];

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
            <h1>Contact Us</h1>
            <p className="contact-tagline">
              Ready to transform your business with predictive analytics?
            </p>
            <p className="contact-description">
              Please use the form below to send us an email, and we'll get back to you
              as soon as possible to discuss your specific needs and challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="main-contact section bg-gray-100">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <div
              id="contact-form-section"
              data-animate
              className={`contact-form-section ${isVisible['contact-form-section'] ? 'slide-in-left' : ''}`}
            >
              <div className="contact-form-wrapper">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and our team will reach out to you shortly.</p>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Your full name"
                      required
                      minLength={2}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">
                      Phone <span className="optional">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">
                      Subject <span className="required">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="risk-assessment">Risk Assessment Solutions</option>
                      <option value="fraud-detection">Fraud Detection</option>
                      <option value="fintech-consulting">Fintech Consulting</option>
                      <option value="los-systems">LOS Systems</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="careers">Career Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-input form-textarea"
                      placeholder="Tell us about your project, challenges, or questions..."
                      required
                      minLength={10}
                      rows={6}
                    />
                  </div>

                  <div className="form-actions">
                    <button
                      type="submit"
                      className={`btn btn-primary btn-lg submit-btn ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="loading-spinner"></div>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>

                  {submitMessage && (
                    <div className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>

            {/* Contact Methods */}
            <div
              id="contact-methods"
              data-animate
              className={`contact-methods ${isVisible['contact-methods'] ? 'slide-in-right' : ''}`}
            >
              <h3>Get in Touch</h3>
              <p>Prefer a different way to reach us? Use any of the methods below.</p>

              <div className="contact-methods-grid">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="contact-method-card"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="method-icon">{method.icon}</div>
                    <h4>{method.title}</h4>
                    <p>{method.description}</p>
                    {method.action ? (
                      <a href={method.action} className="method-contact">
                        {method.contact}
                      </a>
                    ) : (
                      <span className="method-contact static">
                        {method.contact}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="locations-section section">
        <div className="container">
          <div
            id="locations-header"
            data-animate
            className={`section-header ${isVisible['locations-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Our Global Presence</h2>
            <p>
              We work with clients around the world, with team members and partners
              in key financial centers across North America and Europe.
            </p>
          </div>

          <div
            id="locations-grid"
            data-animate
            className={`locations-grid ${isVisible['locations-grid'] ? 'animate-fadeInUp' : ''}`}
          >
            {officeLocations.map((location, index) => (
              <div
                key={index}
                className="location-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="location-icon">{location.icon}</div>
                <h4>{location.city}</h4>
                <p className="location-country">{location.country}</p>
                <p className="location-description">{location.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section bg-gray-100">
        <div className="container">
          <div
            id="faq-content"
            data-animate
            className={`faq-content ${isVisible['faq-content'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Frequently Asked Questions</h2>
            <div className="faq-grid">
              <div className="faq-item">
                <h4>How quickly can you start on a new project?</h4>
                <p>We typically can begin new projects within 1-2 weeks, depending on scope and requirements. Contact us to discuss your timeline.</p>
              </div>
              <div className="faq-item">
                <h4>Do you work with companies of all sizes?</h4>
                <p>Yes, we work with startups, scale-ups, and large enterprises. Our solutions are tailored to meet the specific needs of each organization.</p>
              </div>
              <div className="faq-item">
                <h4>What industries do you specialize in?</h4>
                <p>We specialize in financial services, including fintech, traditional banking, insurance, lending, and payment processing companies.</p>
              </div>
              <div className="faq-item">
                <h4>Do you offer ongoing support?</h4>
                <p>Yes, we provide comprehensive support and maintenance services for all our solutions, ensuring they continue to perform optimally.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
