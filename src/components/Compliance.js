import React from 'react';
import './Compliance.css';

const Compliance = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="compliance" className="section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-2">
            DPDP-Ready. RBI-Compliant. Deployment Made Safe.
          </h2>
          <p className="subheading">
            Built with security and compliance at the core, ensuring your lending operations
            meet all regulatory requirements from day one.
          </p>
        </div>

        <div className="compliance-content">
          <div className="security-pillars">
            <div className="pillars-grid grid grid-4">
              <div className="pillar-card">
                <div className="pillar-icon">🔐</div>
                <h3 className="heading-4">Role-based Access</h3>
                <p className="body">
                  Granular permissions with encryption and secure audit logs for complete access control.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">🗃️</div>
                <h3 className="heading-4">Data Protection</h3>
                <p className="body">
                  Field-level data masking and granular consent tracking for DPDP compliance.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">🧾</div>
                <h3 className="heading-4">Audit Trails</h3>
                <p className="body">
                  Full document trails and adverse-action support for regulatory transparency.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon">🌐</div>
                <h3 className="heading-4">Data Residency</h3>
                <p className="body">
                  Deployed on India cloud infrastructure with localized data residency.
                </p>
              </div>
            </div>
          </div>

          <div className="compliance-frameworks">
            <h3 className="heading-3 text-center">Regulatory Compliance Framework</h3>
            <div className="frameworks-grid grid grid-2">
              <div className="framework-section">
                <h4 className="framework-title">🇮🇳 India Regulations</h4>
                <ul className="compliance-list">
                  <li><strong>DPDP Act 2023:</strong> Complete data protection compliance</li>
                  <li><strong>RBI Guidelines:</strong> NBFC lending regulations adherence</li>
                  <li><strong>IT Act 2000:</strong> Digital signature and authentication</li>
                  <li><strong>KYC/AML:</strong> Know Your Customer processes</li>
                  <li><strong>Fair Practices Code:</strong> Transparent lending practices</li>
                </ul>
              </div>

              <div className="framework-section">
                <h4 className="framework-title">🌍 Global Standards</h4>
                <ul className="compliance-list">
                  <li><strong>ISO 27001:</strong> Information security management</li>
                  <li><strong>SOC 2 Type II:</strong> Service organization controls</li>
                  <li><strong>GDPR Ready:</strong> European data protection standards</li>
                  <li><strong>PCI DSS:</strong> Payment card industry security</li>
                  <li><strong>OWASP:</strong> Application security best practices</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="security-architecture">
            <h3 className="heading-3 text-center">Security Architecture</h3>
            <div className="architecture-grid">
              <div className="architecture-layer">
                <div className="layer-header">
                  <div className="layer-icon">🛡️</div>
                  <h4>Application Layer</h4>
                </div>
                <div className="layer-features">
                  <span className="feature-tag">Multi-factor Authentication</span>
                  <span className="feature-tag">Session Management</span>
                  <span className="feature-tag">Input Validation</span>
                  <span className="feature-tag">RBAC Controls</span>
                </div>
              </div>

              <div className="architecture-layer">
                <div className="layer-header">
                  <div className="layer-icon">🔒</div>
                  <h4>Data Layer</h4>
                </div>
                <div className="layer-features">
                  <span className="feature-tag">AES-256 Encryption</span>
                  <span className="feature-tag">Field-level Masking</span>
                  <span className="feature-tag">Secure Backups</span>
                  <span className="feature-tag">Data Loss Prevention</span>
                </div>
              </div>

              <div className="architecture-layer">
                <div className="layer-header">
                  <div className="layer-icon">🌐</div>
                  <h4>Network Layer</h4>
                </div>
                <div className="layer-features">
                  <span className="feature-tag">TLS 1.3</span>
                  <span className="feature-tag">WAF Protection</span>
                  <span className="feature-tag">DDoS Mitigation</span>
                  <span className="feature-tag">VPC Isolation</span>
                </div>
              </div>

              <div className="architecture-layer">
                <div className="layer-header">
                  <div className="layer-icon">📊</div>
                  <h4>Monitoring Layer</h4>
                </div>
                <div className="layer-features">
                  <span className="feature-tag">Real-time Alerts</span>
                  <span className="feature-tag">Anomaly Detection</span>
                  <span className="feature-tag">Compliance Reporting</span>
                  <span className="feature-tag">Audit Logging</span>
                </div>
              </div>
            </div>
          </div>

          <div className="data-governance">
            <div className="governance-card">
              <div className="governance-header">
                <div className="governance-icon">🏛️</div>
                <h3 className="heading-3">Data Governance & Privacy</h3>
              </div>
              <div className="governance-content">
                <div className="governance-features grid grid-3">
                  <div className="governance-feature">
                    <h4>Consent Management</h4>
                    <p>Granular consent tracking with clear opt-in/opt-out mechanisms</p>
                  </div>
                  <div className="governance-feature">
                    <h4>Data Minimization</h4>
                    <p>Collect only necessary data with automatic purging policies</p>
                  </div>
                  <div className="governance-feature">
                    <h4>Purpose Limitation</h4>
                    <p>Data used only for specified lending purposes with clear boundaries</p>
                  </div>
                  <div className="governance-feature">
                    <h4>Right to Erasure</h4>
                    <p>Complete data deletion capabilities upon customer request</p>
                  </div>
                  <div className="governance-feature">
                    <h4>Data Portability</h4>
                    <p>Export customer data in machine-readable formats</p>
                  </div>
                  <div className="governance-feature">
                    <h4>Breach Notification</h4>
                    <p>Automated incident response and regulatory notification systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="compliance-certifications">
            <h3 className="heading-3 text-center">Certifications & Assessments</h3>
            <div className="certifications-grid">
              <div className="cert-item">
                <div className="cert-badge">✓</div>
                <div className="cert-content">
                  <h4>Penetration Testing</h4>
                  <p>Quarterly security assessments by certified ethical hackers</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-badge">✓</div>
                <div className="cert-content">
                  <h4>Vulnerability Scanning</h4>
                  <p>Continuous automated scanning with monthly reports</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-badge">✓</div>
                <div className="cert-content">
                  <h4>Code Security Review</h4>
                  <p>Static and dynamic analysis with secure coding practices</p>
                </div>
              </div>
              <div className="cert-item">
                <div className="cert-badge">✓</div>
                <div className="cert-content">
                  <h4>Compliance Audits</h4>
                  <p>Regular third-party audits for regulatory compliance</p>
                </div>
              </div>
            </div>
          </div>

          <div className="compliance-cta">
            <div className="cta-content">
              <h3 className="heading-3">Ready for Compliance Review?</h3>
              <p className="body-large">
                Get detailed compliance documentation and security architecture overview.
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary btn-large"
              >
                View Compliance Architecture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compliance;
