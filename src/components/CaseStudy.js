import React from 'react';
import './CaseStudy.css';

const CaseStudy = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="case-study" className="section bg-white">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-2">
            How One Lender Cut Loan Turnaround Time by 50% in Just 60 Days
          </h2>
          <p className="subheading">
            MSME LAP lender serving rural Tamil Nadu transformed their operations
            with PDS, moving from 25-day to 10-day average processing time.
          </p>
        </div>

        <div className="case-study-content">
          <div className="case-overview">
            <div className="overview-stats">
              <div className="stat-card">
                <div className="stat-icon">📍</div>
                <h3 className="stat-title">Location</h3>
                <p className="stat-value">Rural Tamil Nadu</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">🏦</div>
                <h3 className="stat-title">Lender Type</h3>
                <p className="stat-value">MSME LAP Specialist</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">💰</div>
                <h3 className="stat-title">Loan Volume</h3>
                <p className="stat-value">₹50 Cr+ Annual</p>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👥</div>
                <h3 className="stat-title">Field Team</h3>
                <p className="stat-value">25+ Agents</p>
              </div>
            </div>
          </div>

          <div className="transformation-timeline">
            <h3 className="heading-3 text-center">Transformation Journey</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker before">
                  <span className="marker-icon">📄</span>
                </div>
                <div className="timeline-content">
                  <h4>Before PDS</h4>
                  <ul>
                    <li>Paper-based application process</li>
                    <li>Manual document verification</li>
                    <li>25-day average processing time</li>
                    <li>Limited field agent efficiency</li>
                    <li>Inconsistent credit decisions</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker implementation">
                  <span className="marker-icon">⚙️</span>
                </div>
                <div className="timeline-content">
                  <h4>60-Day Implementation</h4>
                  <ul>
                    <li>Staff training on digital processes</li>
                    <li>Mobile app deployment to field agents</li>
                    <li>Integration with existing banking systems</li>
                    <li>Custom credit scoring model setup</li>
                    <li>Workflow automation configuration</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker after">
                  <span className="marker-icon">🚀</span>
                </div>
                <div className="timeline-content">
                  <h4>After PDS</h4>
                  <ul>
                    <li>Fully digital application process</li>
                    <li>AI-powered document verification</li>
                    <li>10-day average processing time</li>
                    <li>3x improvement in agent productivity</li>
                    <li>Consistent, explainable credit decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="key-results">
            <h3 className="heading-3 text-center">Key Results Achieved</h3>
            <div className="results-grid grid grid-3">
              <div className="result-card">
                <div className="result-icon">⚡</div>
                <div className="result-metric">50%</div>
                <div className="result-label">Faster Processing</div>
                <p className="result-description">
                  Reduced loan processing time from 25 days to 10 days average
                </p>
              </div>

              <div className="result-card">
                <div className="result-icon">📈</div>
                <div className="result-metric">3x</div>
                <div className="result-label">Agent Productivity</div>
                <p className="result-description">
                  Field agents can now handle 3x more applications per day
                </p>
              </div>

              <div className="result-card">
                <div className="result-icon">💼</div>
                <div className="result-metric">40%</div>
                <div className="result-label">Volume Increase</div>
                <p className="result-description">
                  Monthly loan application volume increased by 40%
                </p>
              </div>

              <div className="result-card">
                <div className="result-icon">🎯</div>
                <div className="result-metric">85%</div>
                <div className="result-label">Decision Accuracy</div>
                <p className="result-description">
                  AI scoring improved credit decision accuracy to 85%
                </p>
              </div>

              <div className="result-card">
                <div className="result-icon">📱</div>
                <div className="result-metric">100%</div>
                <div className="result-label">Mobile Adoption</div>
                <p className="result-description">
                  All field agents successfully adopted mobile workflows
                </p>
              </div>

              <div className="result-card">
                <div className="result-icon">😊</div>
                <div className="result-metric">95%</div>
                <div className="result-label">Customer Satisfaction</div>
                <p className="result-description">
                  Customer satisfaction improved due to faster processing
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-section">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <blockquote className="testimonial-quote">
                PDS helped us move from paper files to a modern LOS without losing
                the personal touch our customers value. The field agent app works
                perfectly even in areas with poor connectivity, and our credit
                decisions are now backed by explainable AI.
              </blockquote>
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>Regional Manager</h4>
                  <p>Leading MSME LAP Lender, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          <div className="implementation-details">
            <h3 className="heading-3 text-center">Implementation Highlights</h3>
            <div className="details-grid grid grid-2">
              <div className="detail-section">
                <h4>Technical Integration</h4>
                <ul className="detail-list">
                  <li>Seamless integration with existing core banking system</li>
                  <li>Real-time sync between field apps and central database</li>
                  <li>Custom credit scoring model trained on local data</li>
                  <li>Multi-role dashboard for different team functions</li>
                </ul>
              </div>

              <div className="detail-section">
                <h4>Process Transformation</h4>
                <ul className="detail-list">
                  <li>Digitized end-to-end loan origination workflow</li>
                  <li>Automated document verification and data extraction</li>
                  <li>Real-time application status tracking</li>
                  <li>Integrated compliance and audit trail management</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="case-study-cta">
            <div className="cta-content">
              <h3 className="heading-3">Ready for Your Transformation?</h3>
              <p className="body-large">
                See how PDS can transform your lending operations with a similar success story.
              </p>
              <div className="cta-buttons">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-primary btn-large"
                >
                  Download Full Case Study PDF
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-secondary btn-large"
                >
                  Schedule Your Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
