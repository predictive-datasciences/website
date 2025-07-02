import React from 'react';
import './ScoringEngine.css';

const ScoringEngine = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="scoring" className="section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-2">
            Already have a LOS? Deploy our scoring engine independently.
          </h2>
          <p className="subheading">
            Drop-in credit and fraud scoring via API. Model trained on property-backed MSME credit + cash flow signals.
          </p>
        </div>

        <div className="scoring-content">
          <div className="scoring-overview">
            <div className="overview-grid grid grid-2">
              <div className="overview-card">
                <div className="card-icon">🚀</div>
                <h3 className="heading-4">Standalone API</h3>
                <p className="body">
                  Integrate our scoring engine with your existing LOS through simple REST APIs.
                  No need to overhaul your current system.
                </p>
              </div>
              <div className="overview-card">
                <div className="card-icon">🌍</div>
                <h3 className="heading-4">Global Ready</h3>
                <p className="body">
                  Exportable for use in Latam, Southeast Asia, Africa, or other thin-file markets
                  with similar lending profiles.
                </p>
              </div>
            </div>
          </div>

          <div className="use-cases-section">
            <h3 className="heading-3 text-center">Use Cases & Benefits</h3>
            <div className="use-cases-grid grid grid-3">
              <div className="use-case-card card">
                <div className="use-case-icon">📊</div>
                <h4 className="heading-4">Credit & Fraud Scoring</h4>
                <ul className="benefit-list">
                  <li>Real-time risk assessment</li>
                  <li>Property-backed MSME specialization</li>
                  <li>Cash flow signal analysis</li>
                  <li>Fraud pattern detection</li>
                </ul>
              </div>

              <div className="use-case-card card">
                <div className="use-case-icon">🔍</div>
                <h4 className="heading-4">Explainable AI</h4>
                <ul className="benefit-list">
                  <li>SHAP-based explanations</li>
                  <li>Customizable risk cutoffs</li>
                  <li>Audit trail compliance</li>
                  <li>Regulatory transparency</li>
                </ul>
              </div>

              <div className="use-case-card card">
                <div className="use-case-icon">🔧</div>
                <h4 className="heading-4">Flexible Integration</h4>
                <ul className="benefit-list">
                  <li>Use our models or bring your own</li>
                  <li>Data stays in your country</li>
                  <li>Custom model training</li>
                  <li>Real-time or batch processing</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="model-architecture">
            <h3 className="heading-3 text-center">Advanced Model Architecture</h3>
            <div className="architecture-container">
              <div className="model-flow">
                <div className="model-step">
                  <div className="step-number">1</div>
                  <h4>Data Ingestion</h4>
                  <p>Property docs, bank statements, cash flow data</p>
                </div>
                <div className="flow-connector">→</div>
                <div className="model-step">
                  <div className="step-number">2</div>
                  <h4>Feature Engineering</h4>
                  <p>MSME-specific feature extraction</p>
                </div>
                <div className="flow-connector">→</div>
                <div className="model-step">
                  <div className="step-number">3</div>
                  <h4>Ensemble Scoring</h4>
                  <p>XGBoost + Custom Rulebook</p>
                </div>
                <div className="flow-connector">→</div>
                <div className="model-step">
                  <div className="step-number">4</div>
                  <h4>Explainable Output</h4>
                  <p>Score + SHAP explanations</p>
                </div>
              </div>
            </div>
          </div>

          <div className="fraud-mesh-section">
            <div className="fraud-mesh-card">
              <div className="mesh-icon">🛡️</div>
              <div className="mesh-content">
                <h3 className="heading-3">Pre-built Fraud Signal Mesh</h3>
                <p className="body-large">
                  Specialized for India borrower segments with advanced fraud detection patterns
                  developed from thousands of loan applications.
                </p>
                <div className="fraud-features">
                  <div className="fraud-feature">
                    <span className="feature-icon">🎯</span>
                    <span>Identity verification patterns</span>
                  </div>
                  <div className="fraud-feature">
                    <span className="feature-icon">📍</span>
                    <span>Location-based risk signals</span>
                  </div>
                  <div className="fraud-feature">
                    <span className="feature-icon">💰</span>
                    <span>Cash flow anomaly detection</span>
                  </div>
                  <div className="fraud-feature">
                    <span className="feature-icon">📱</span>
                    <span>Device fingerprinting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="technical-specs">
            <h3 className="heading-3 text-center">Technical Specifications</h3>
            <div className="specs-grid grid grid-2">
              <div className="spec-category">
                <h4>Performance</h4>
                <ul className="spec-list">
                  <li><strong>Response Time:</strong> &lt;200ms average</li>
                  <li><strong>Availability:</strong> 99.9% uptime SLA</li>
                  <li><strong>Throughput:</strong> 10,000+ requests/minute</li>
                  <li><strong>Accuracy:</strong> 85%+ prediction accuracy</li>
                </ul>
              </div>
              <div className="spec-category">
                <h4>Security & Compliance</h4>
                <ul className="spec-list">
                  <li><strong>Data Residency:</strong> Your country only</li>
                  <li><strong>Encryption:</strong> End-to-end encrypted</li>
                  <li><strong>Compliance:</strong> GDPR, DPDP ready</li>
                  <li><strong>Audit:</strong> Complete API logging</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="api-cta">
            <div className="cta-content">
              <h3 className="heading-3">Ready to Integrate?</h3>
              <p className="body-large">
                Start with our API documentation or schedule a technical demo to see the scoring engine in action.
              </p>
              <div className="cta-buttons">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-primary btn-large"
                >
                  Talk to us about API pricing
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="btn btn-secondary btn-large"
                >
                  View API Documentation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoringEngine;
