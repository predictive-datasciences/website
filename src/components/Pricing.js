import React from 'react';
import './Pricing.css';

const Pricing = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      description: 'Perfect for small lenders getting started',
      price: '₹15,000',
      period: '/month',
      features: [
        'Up to 100 applications/month',
        'Basic credit scoring',
        'Document verification',
        'Mobile field agent app',
        'Standard integrations',
        'Email support',
        'Basic analytics dashboard',
        'DPDP compliance tools'
      ],
      buttonText: 'Start Free Trial',
      popular: false,
      planType: 'starter'
    },
    {
      name: 'Professional',
      description: 'For growing lenders with advanced needs',
      price: '₹45,000',
      period: '/month',
      features: [
        'Up to 500 applications/month',
        'Advanced AI scoring engine',
        'Fraud detection system',
        'Custom workflow builder',
        'API access & integrations',
        'Priority phone support',
        'Advanced analytics & reporting',
        'White-label customization',
        'Vernacular language support',
        'Real-time decision engine'
      ],
      buttonText: 'Start Free Trial',
      popular: true,
      planType: 'professional'
    },
    {
      name: 'Enterprise',
      description: 'Complete solution for large-scale operations',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited applications',
        'Custom scoring models',
        'Advanced fraud detection',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 phone support',
        'Custom analytics & BI',
        'Multi-tenant architecture',
        'Advanced security features',
        'On-premise deployment option',
        'Custom SLA agreements',
        'Regulatory compliance consulting'
      ],
      buttonText: 'Contact Sales',
      popular: false,
      planType: 'enterprise'
    }
  ];

  const includedFeatures = [
    {
      icon: '🔒',
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with 100% DPDP compliance built-in'
    },
    {
      icon: '📱',
      title: 'Mobile-First Design',
      description: 'Native mobile apps for borrowers and field agents with vernacular support'
    },
    {
      icon: '⚡',
      title: 'Fast Deployment',
      description: '30-45 day deployment with comprehensive training and support'
    },
    {
      icon: '🎯',
      title: 'AI-Powered Decisions',
      description: 'Advanced scoring engine with explainable AI for regulatory confidence'
    }
  ];

  const pricingNotes = [
    {
      title: 'No Setup Fees',
      description: 'Get started immediately with zero upfront costs'
    },
    {
      title: 'Cancel Anytime',
      description: 'No long-term contracts or cancellation fees'
    },
    {
      title: 'Data Migration',
      description: 'Free data migration from your existing system'
    }
  ];

  const faqItems = [
    {
      question: 'How quickly can we get started?',
      answer: 'Most customers are fully operational within 30-45 days, including data migration, customization, and team training.'
    },
    {
      question: 'Is there a free trial available?',
      answer: 'Yes, we offer a 30-day free trial with full access to all features and dedicated support.'
    },
    {
      question: 'Can we integrate with existing systems?',
      answer: 'Absolutely! We provide APIs and pre-built integrations for most popular banking and lending platforms.'
    },
    {
      question: 'What about data security and compliance?',
      answer: 'We are 100% DPDP-compliant with enterprise-grade security, encryption, and regular security audits.'
    }
  ];

  return (
    <div className="pricing" id="pricing">
      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="heading-2">Simple, Transparent Pricing</h2>
            <p className="subheading">
              Choose the plan that fits your lending volume and requirements
            </p>
          </div>

          <div className="pricing-content">
            {/* Pricing Cards */}
            <div className="pricing-cards">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`pricing-card ${plan.planType} ${plan.popular ? 'featured' : ''}`}>
                  {plan.popular && <div className="featured-badge">Most Popular</div>}

                  <div className="card-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-description">{plan.description}</p>
                  </div>

                  <div className="price-section">
                    <div className="price">{plan.price}</div>
                    <div className="price-period">{plan.period}</div>
                  </div>

                  <div className="features-section">
                    <ul className="features-list">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} btn-large`} style={{ width: '100%' }}>
                    {plan.buttonText}
                  </button>
                </div>
              ))}
            </div>

            {/* Included Features */}
            <div className="pricing-features">
              <div className="text-center">
                <h3 className="heading-3">Included in All Plans</h3>
                <p className="subheading">
                  Core features that come standard with every PDS subscription
                </p>
              </div>

              <div className="included-features grid grid-4">
                {includedFeatures.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-icon">{feature.icon}</div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Notes */}
            <div className="pricing-notes">
              <div className="text-center">
                <h3 className="heading-3" style={{ color: 'white', marginBottom: 'var(--spacing-lg)' }}>
                  Why Choose PDS?
                </h3>
              </div>

              <div className="notes-grid grid grid-3">
                {pricingNotes.map((note, index) => (
                  <div key={index} className="note-card">
                    <h4>{note.title}</h4>
                    <p>{note.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pricing-faq">
              <div className="text-center">
                <h3 className="heading-3">Frequently Asked Questions</h3>
                <p className="subheading">
                  Common questions about our pricing and features
                </p>
              </div>

              <div className="faq-grid grid grid-2">
                {faqItems.map((faq, index) => (
                  <div key={index} className="faq-item">
                    <h4>{faq.question}</h4>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center" style={{ marginTop: 'var(--spacing-3xl)' }}>
              <h3 className="heading-3">Ready to Transform Your Lending Process?</h3>
              <p className="subheading">
                Start your free trial today or speak with our team about custom solutions
              </p>
              <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button className="btn btn-primary btn-large">Start Free Trial</button>
                <button className="btn btn-secondary btn-large">Schedule Demo</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
