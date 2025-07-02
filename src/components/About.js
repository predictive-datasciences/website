import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
      {/* Header Section */}
      <section className="section bg-gradient">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2">About PDS</h2>
            <p className="subheading">
              Building the future of lending technology for Indian MSMEs
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: 'var(--spacing-3xl)' }}>
            <div>
              <h3 className="heading-3">Our Mission</h3>
              <p className="body-large">
                We're building India's most advanced yet practical Loan Origination System
                specifically designed for MSME and LAP lenders who need speed, accuracy,
                and compliance without the complexity of bank-grade systems.
              </p>
              <p className="body">
                Founded by veterans from Falcon, Gain Credit, and Applied Data Finance,
                we understand the unique challenges of Indian lending and have built
                our platform to address them head-on.
              </p>
            </div>
            <div className="card">
              <div className="text-center">
                <div className="icon-large" style={{ background: 'var(--accent-blue)', color: 'white', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-lg)', fontSize: '3rem' }}>
                  🎯
                </div>
                <h4 className="heading-4">Vision</h4>
                <p className="body">
                  To democratize access to advanced lending technology
                  for every MSME lender in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center">
            <h3 className="heading-3">Our Team</h3>
            <p className="subheading">
              Experienced professionals from India's leading fintech companies
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card text-center">
              <div className="icon-large" style={{ background: 'var(--accent-green)', color: 'white', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)', fontSize: '2rem' }}>
                👨‍💼
              </div>
              <h4 className="heading-4">Falcon Alumni</h4>
              <p className="body">
                Deep expertise in Indian lending markets and regulatory compliance
              </p>
            </div>

            <div className="card text-center">
              <div className="icon-large" style={{ background: 'var(--accent-blue)', color: 'white', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)', fontSize: '2rem' }}>
                💳
              </div>
              <h4 className="heading-4">Gain Credit Veterans</h4>
              <p className="body">
                Proven track record in building scalable credit assessment systems
              </p>
            </div>

            <div className="card text-center">
              <div className="icon-large" style={{ background: 'var(--accent-orange)', color: 'white', borderRadius: '50%', width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto var(--spacing-md)', fontSize: '2rem' }}>
                📊
              </div>
              <h4 className="heading-4">Applied Data Finance</h4>
              <p className="body">
                Advanced analytics and machine learning expertise for lending
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h3 className="heading-3">Our Values</h3>
            <p className="subheading">
              What drives us to build better lending technology
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h4 className="heading-4">🚀 Speed Without Compromise</h4>
              <p className="body">
                30-45 day deployments with full feature sets, not 6-month implementations
              </p>
            </div>

            <div className="card">
              <h4 className="heading-4">🎯 Purpose-Built for India</h4>
              <p className="body">
                Vernacular support, mobile-first design, and India-specific compliance built-in
              </p>
            </div>

            <div className="card">
              <h4 className="heading-4">🛡️ Security First</h4>
              <p className="body">
                100% DPDP-compliant with enterprise-grade security from day one
              </p>
            </div>

            <div className="card">
              <h4 className="heading-4">📈 Transparent & Explainable</h4>
              <p className="body">
                Clear scoring rationale and decision trails for regulatory confidence
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
