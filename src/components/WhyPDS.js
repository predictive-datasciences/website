import React from 'react';
import './WhyPDS.css';

const WhyPDS = () => {
  return (
    <section id="why-us" className="section bg-light">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="heading-2">
            Why Choose Us?
          </h2>
          <p className="subheading">
            Not another bank-grade LOS. A better one — for the lenders who actually need it.
            Built from the ground up for MSME LAP lenders who operate in real-world conditions.
          </p>
        </div>

        <div className="why-pds-content">
          <div className="main-message">
            <div className="message-card">
              <p className="body-large">
                No bloated workflows. No hidden compliance risks. No unnecessary costs.
              </p>
              <p className="body">
                Trusted by rural NBFCs, built with India's lending reality in mind.
              </p>
            </div>
          </div>

          <div className="features-grid grid grid-3">
            <div className="feature-card card-feature">
              <div className="feature-icon">💡</div>
              <h3 className="heading-4">India-first, not bank-first</h3>
              <p className="body">
                Designed specifically for the Indian lending ecosystem with support for vernacular languages,
                offline capabilities, and field-based operations that traditional bank solutions can't handle.
              </p>
            </div>

            <div className="feature-card card-feature">
              <div className="feature-icon">⚙️</div>
              <h3 className="heading-4">Modular, API-connected architecture</h3>
              <p className="body">
                Plug-and-play components that integrate seamlessly with your existing systems.
                Scale what you need, when you need it, without expensive overhauls.
              </p>
            </div>

            <div className="feature-card card-feature">
              <div className="feature-icon">🛡️</div>
              <h3 className="heading-4">Fully auditable, fully explainable decisions</h3>
              <p className="body">
                Complete transparency in AI decisions with SHAP explainability,
                comprehensive audit trails, and regulatory compliance built into every feature.
              </p>
            </div>
          </div>

          <div className="comparison-section">
            <h3 className="heading-3 text-center">Traditional Bank LOS vs PDS</h3>
            <div className="comparison-grid">
              <div className="comparison-column traditional">
                <h4 className="comparison-title">Traditional Bank LOS</h4>
                <ul className="comparison-list">
                  <li>✗ Built for urban, digital-first customers</li>
                  <li>✗ Requires constant connectivity</li>
                  <li>✗ One-size-fits-all approach</li>
                  <li>✗ Black-box AI decisions</li>
                  <li>✗ Expensive licensing and setup</li>
                  <li>✗ 6-12 month implementation</li>
                </ul>
              </div>

              <div className="comparison-column pds">
                <h4 className="comparison-title text-accent">PDS Solution</h4>
                <ul className="comparison-list">
                  <li>✓ Built for rural MSME reality</li>
                  <li>✓ Offline-first with sync capabilities</li>
                  <li>✓ Customizable for your workflow</li>
                  <li>✓ Transparent, explainable AI</li>
                  <li>✓ Affordable SaaS pricing</li>
                  <li>✓ 30-45 day deployment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="stats-section">
            <div className="stats-grid grid grid-4">
              <div className="stat-item">
                <div className="stat-number">30-45</div>
                <div className="stat-label">Days to Deploy</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">DPDP Compliant</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50%</div>
                <div className="stat-label">Faster Processing</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPDS;
