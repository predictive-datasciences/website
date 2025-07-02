import React from 'react';
import './LOSPlatform.css';

const LOSPlatform = () => {
  const modules = [
    {
      icon: '📱',
      title: 'Borrower Onboarding',
      features: [
        'Vernacular mobile app',
        'Aadhaar/PAN/GSTN checks (via Karza/Digio)',
        'Offline data collection with sync',
        'Photo and location capture'
      ]
    },
    {
      icon: '📄',
      title: 'Document Intelligence',
      features: [
        'OCR + auto-tagging for income docs',
        'Property valuation documents',
        'Bank statement analysis',
        'Automated data extraction'
      ]
    },
    {
      icon: '🧠',
      title: 'Underwriting Engine',
      features: [
        'Custom rulebooks + AI scoring',
        'Explainability via SHAP',
        'Complete audit trail',
        'Risk assessment automation'
      ]
    },
    {
      icon: '⚙️',
      title: 'Workflow Orchestration',
      features: [
        'Multi-role dashboard (Sales, Ops, Legal, Credit)',
        'Trigger-based automation',
        'Status tracking and notifications',
        'Approval workflow management'
      ]
    },
    {
      icon: '💰',
      title: 'Disbursement-Ready',
      features: [
        'Direct API hooks to LMS',
        'Banking gateway integration',
        'Automated fund transfer',
        'Transaction monitoring'
      ]
    },
    {
      icon: '🚀',
      title: 'Field Agent Support',
      features: [
        'Offline mode with sync',
        'Photo, location, and timestamp capture',
        'Real-time status updates',
        'Mobile-optimized interface'
      ]
    }
  ];

  return (
    <section id="platform" className="section bg-white">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-2">
            The End-to-End Loan Origination System for MSME and LAP Lending
          </h2>
          <p className="subheading">
            From borrower onboarding to disbursement — every step digitized, scored, and compliant.
          </p>
        </div>

        <div className="platform-modules">
          <div className="modules-grid grid grid-3">
            {modules.map((module, index) => (
              <div key={index} className="module-card card">
                <div className="module-icon">{module.icon}</div>
                <h3 className="heading-4">{module.title}</h3>
                <ul className="module-features">
                  {module.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="feature-bullet">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="platform-flow">
          <h3 className="heading-3 text-center">Complete Loan Processing Flow</h3>
          <div className="flow-diagram">
            <div className="flow-step">
              <div className="flow-icon">🎯</div>
              <div className="flow-content">
                <h4>Lead Capture</h4>
                <p>Vernacular mobile onboarding with offline capability</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">📊</div>
              <div className="flow-content">
                <h4>Document Analysis</h4>
                <p>AI-powered OCR and automated data extraction</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">⚡</div>
              <div className="flow-content">
                <h4>Credit Scoring</h4>
                <p>Explainable AI with custom risk models</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">✅</div>
              <div className="flow-content">
                <h4>Approval Workflow</h4>
                <p>Multi-role dashboard with automated triggers</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="flow-icon">💸</div>
              <div className="flow-content">
                <h4>Disbursement</h4>
                <p>Direct integration with banking systems</p>
              </div>
            </div>
          </div>
        </div>

        <div className="callout-box">
          <div className="callout-icon">💡</div>
          <div className="callout-content">
            <h4>Success Story</h4>
            <p>
              Already signed up a rural MSME LAP lender. Ask us about the 10-day turnaround transformation.
            </p>
          </div>
        </div>

        <div className="integration-section">
          <h3 className="heading-3 text-center">Seamless Integrations</h3>
          <div className="integration-grid">
            <div className="integration-category">
              <h4>Identity Verification</h4>
              <div className="integration-tags">
                <span className="tag">Karza</span>
                <span className="tag">Digio</span>
                <span className="tag">Aadhaar API</span>
                <span className="tag">PAN Verification</span>
              </div>
            </div>
            <div className="integration-category">
              <h4>Banking & Payments</h4>
              <div className="integration-tags">
                <span className="tag">UPI</span>
                <span className="tag">NEFT/RTGS</span>
                <span className="tag">Core Banking</span>
                <span className="tag">Payment Gateways</span>
              </div>
            </div>
            <div className="integration-category">
              <h4>Data Sources</h4>
              <div className="integration-tags">
                <span className="tag">GSTN</span>
                <span className="tag">Bank Statements</span>
                <span className="tag">Property Records</span>
                <span className="tag">Credit Bureau</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LOSPlatform;
