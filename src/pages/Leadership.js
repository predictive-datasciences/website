import React, { useEffect, useState } from 'react';
import './Leadership.css';

const Leadership = () => {
  const [isVisible, setIsVisible] = useState({});

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

  const leader = {
    name: "Krishna Gopinathan",
    title: "Founder, President, and Chief Data Scientist",
    image: "👨‍💼", // Placeholder emoji - will be replaced with actual image
    bio: `Founder and former CEO of Global Analytics, a leading financial services and technology company
    which focuses on serving under-banked consumers via strategic partnerships with, among others, Wells Fargo,
    MasterCard, and Barclays. Global Analytics drove the creation and growth of Lending Stream to become one of
    the largest online lenders in the U.K., which has originated $300M of loans to over 300,000 customers.`,
    achievements: [
      "Inventor of FICO's Falcon fraud detection system",
      "Led a team of 120 people creating the most successful product in payment systems history",
      "20+ years experience in predictive analytics and data science",
      "Generated multiple patents in risk determination and fraud detection",
      "M.S. in Computer Science from the University of Waterloo in 1988"
    ],
    patents: "His 1998 patent on 'Risk Determination and Management Using Predictive Modeling and Transaction Profiles for Individual Transacting Entities' is referenced by 382 other patents.",
    education: "Krishna earned a M.S. in Computer Science from the University of Waterloo in 1988."
  };

  const teamMembers = [
    {
      name: "Senior Data Scientist",
      role: "Machine Learning Expert",
      description: "Specialized in advanced ML algorithms for fraud detection and risk assessment",
      icon: "🔬"
    },
    {
      name: "Lead Software Engineer",
      role: "Platform Architecture",
      description: "Expert in scalable fintech systems and LOS platform development",
      icon: "⚙️"
    },
    {
      name: "Business Analyst",
      role: "Financial Services",
      description: "Deep expertise in regulatory compliance and business intelligence",
      icon: "📊"
    },
    {
      name: "Product Manager",
      role: "Solution Design",
      description: "Focused on customer-centric product development and market strategy",
      icon: "🎯"
    }
  ];

  return (
    <div className="leadership">
      {/* Header Section */}
      <section className="leadership-header section">
        <div className="container">
          <div
            id="leadership-intro"
            data-animate
            className={`leadership-intro ${isVisible['leadership-intro'] ? 'animate-fadeInUp' : ''}`}
          >
            <h1>Leadership</h1>
            <p className="leadership-tagline">
              Experienced leaders driving innovation in predictive analytics and data science
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="founder-section section bg-gray-100">
        <div className="container">
          <div className="founder-content">
            <div
              id="founder-image"
              data-animate
              className={`founder-image ${isVisible['founder-image'] ? 'slide-in-left' : ''}`}
            >
              <div className="leader-photo">
                <div className="photo-placeholder">
                  <div className="photo-icon">{leader.image}</div>
                  <p>Krishna Gopinathan<br/><small>Photo placeholder</small></p>
                </div>
              </div>
            </div>

            <div
              id="founder-details"
              data-animate
              className={`founder-details ${isVisible['founder-details'] ? 'slide-in-right' : ''}`}
            >
              <h2>{leader.name}</h2>
              <h3 className="founder-title">{leader.title}</h3>

              <div className="founder-bio">
                <p>{leader.bio}</p>
              </div>

              <div className="founder-achievements">
                <h4>Key Achievements</h4>
                <ul>
                  {leader.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="founder-patents">
                <h4>Patents & Innovation</h4>
                <p>{leader.patents}</p>
                <p className="education-note">{leader.education}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section">
        <div className="container">
          <div
            id="team-header"
            data-animate
            className={`section-header ${isVisible['team-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Our Expert Team</h2>
            <p>
              A diverse team of data scientists, engineers, and business experts working together
              to deliver innovative solutions for the financial services industry.
            </p>
          </div>

          <div
            id="team-grid"
            data-animate
            className={`team-grid ${isVisible['team-grid'] ? 'animate-fadeInUp' : ''}`}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="team-icon">{member.icon}</div>
                <h4 className="team-name">{member.name}</h4>
                <h5 className="team-role">{member.role}</h5>
                <p className="team-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="leadership-values section bg-gray-100">
        <div className="container">
          <div
            id="values-content"
            data-animate
            className={`values-content ${isVisible['values-content'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Leadership Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <div className="philosophy-icon">🎯</div>
                <h4>Innovation-Driven</h4>
                <p>We believe that innovation is the key to solving complex challenges in the financial services industry.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">👥</div>
                <h4>Collaborative Excellence</h4>
                <p>Our success comes from working with the best and brightest minds to create solutions that benefit millions.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🔬</div>
                <h4>Scientific Approach</h4>
                <p>Every solution is grounded in rigorous scientific methodology and proven data science principles.</p>
              </div>
              <div className="philosophy-item">
                <div className="philosophy-icon">🚀</div>
                <h4>Future-Focused</h4>
                <p>We don't just adapt to change—we create the future of predictive analytics and financial technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="recognition-section section">
        <div className="container">
          <div
            id="recognition"
            data-animate
            className={`recognition-content ${isVisible.recognition ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Industry Recognition</h2>
            <div className="recognition-stats">
              <div className="recognition-item">
                <div className="recognition-number">382+</div>
                <div className="recognition-label">Patent References</div>
                <p>Our innovations have influenced the entire industry</p>
              </div>
              <div className="recognition-item">
                <div className="recognition-number">$300M+</div>
                <div className="recognition-label">Loans Facilitated</div>
                <p>Through our advanced risk assessment systems</p>
              </div>
              <div className="recognition-item">
                <div className="recognition-number">300K+</div>
                <div className="recognition-label">Customers Served</div>
                <p>Providing access to financial services worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
