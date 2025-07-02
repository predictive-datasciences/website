import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    lenderType: '',
    monthlyVolume: '',
    message: '',
    interest: 'demo'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-2">
            Ready to deploy a modern LOS? Let's talk.
          </h2>
          <p className="subheading">
            Get started with a personalized demo or download our product brochure.
            Our team is ready to help transform your lending operations.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-options">
            <div className="option-cards grid grid-3">
              <div className="option-card">
                <div className="option-icon">📅</div>
                <h3 className="heading-4">Schedule a 30-minute demo</h3>
                <p className="body">
                  See PDS in action with a personalized demo tailored to your use case.
                </p>
                <ul className="option-features">
                  <li>Live platform walkthrough</li>
                  <li>Q&A with product experts</li>
                  <li>Custom use case discussion</li>
                </ul>
              </div>

              <div className="option-card">
                <div className="option-icon">💰</div>
                <h3 className="heading-4">Request custom pricing</h3>
                <p className="body">
                  Get a pricing quote tailored to your volume and requirements.
                </p>
                <ul className="option-features">
                  <li>Volume-based pricing</li>
                  <li>Implementation cost estimate</li>
                  <li>ROI calculation</li>
                </ul>
              </div>

              <div className="option-card">
                <div className="option-icon">🚀</div>
                <h3 className="heading-4">Book a pilot project</h3>
                <p className="body">
                  Start with a small pilot to prove value before full deployment.
                </p>
                <ul className="option-features">
                  <li>30-day pilot program</li>
                  <li>Limited scope implementation</li>
                  <li>Success metrics tracking</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <div className="form-container">
              <div className="form-header">
                <h3 className="heading-3">Get Started Today</h3>
                <p className="body">
                  Fill out the form below and we'll be in touch within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name *</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="lenderType" className="form-label">Lender Type *</label>
                    <select
                      id="lenderType"
                      name="lenderType"
                      value={formData.lenderType}
                      onChange={handleChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select your lender type</option>
                      <option value="nbfc">NBFC</option>
                      <option value="mfi">MFI</option>
                      <option value="lap">LAP Lender</option>
                      <option value="coop">Co-operative Bank</option>
                      <option value="regional">Regional Bank</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="monthlyVolume" className="form-label">Monthly Loan Volume</label>
                    <select
                      id="monthlyVolume"
                      name="monthlyVolume"
                      value={formData.monthlyVolume}
                      onChange={handleChange}
                      className="form-input"
                    >
                      <option value="">Select volume range</option>
                      <option value="0-50">0-50 applications</option>
                      <option value="51-200">51-200 applications</option>
                      <option value="201-500">201-500 applications</option>
                      <option value="500+">500+ applications</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="interest" className="form-label">I'm interested in *</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="demo">Scheduling a demo</option>
                    <option value="pricing">Custom pricing quote</option>
                    <option value="pilot">Pilot project</option>
                    <option value="scoring">Scoring engine only</option>
                    <option value="brochure">Product brochure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Additional Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    rows="4"
                    placeholder="Tell us about your specific requirements, challenges, or questions..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large form-submit">
                  Send Message
                </button>
              </form>
            </div>

            <div className="contact-info">
              <div className="info-card">
                <h4>Direct Contact</h4>
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>hello@pds.ai</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <span>+91 98765 43210</span>
                </div>
              </div>

              <div className="info-card">
                <h4>Response Time</h4>
                <div className="contact-item">
                  <span className="contact-icon">⚡</span>
                  <span>24 hours for initial response</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📅</span>
                  <span>48 hours to schedule demo</span>
                </div>
              </div>

              <div className="info-card">
                <h4>Support Coverage</h4>
                <div className="support-types">
                  <div className="support-item">
                    <span className="support-icon">🏦</span>
                    <span>NBFCs</span>
                  </div>
                  <div className="support-item">
                    <span className="support-icon">🏛️</span>
                    <span>MFIs</span>
                  </div>
                  <div className="support-item">
                    <span className="support-icon">🏠</span>
                    <span>LAP Lenders</span>
                  </div>
                  <div className="support-item">
                    <span className="support-icon">🤝</span>
                    <span>Co-ops & Regional Banks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
