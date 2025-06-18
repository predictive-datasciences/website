import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
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

  const jobOpportunities = [
    {
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Lead development of advanced machine learning models for fraud detection and risk assessment in financial services.",
      requirements: [
        "PhD or MS in Data Science, Statistics, Computer Science, or related field",
        "5+ years experience in machine learning and predictive modeling",
        "Expertise in Python, R, SQL, and big data technologies",
        "Experience with financial services and risk modeling",
        "Strong communication and leadership skills"
      ],
      skills: ["Python", "Machine Learning", "TensorFlow", "SQL", "AWS"]
    },
    {
      title: "Fintech Software Engineer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description: "Build scalable fintech platforms and LOS systems that process millions of financial transactions and decisions.",
      requirements: [
        "BS/MS in Computer Science or related field",
        "3+ years experience in software development",
        "Experience with microservices and cloud architecture",
        "Knowledge of financial services and regulatory compliance",
        "Proficiency in Java, Python, or Go"
      ],
      skills: ["Java", "Python", "Microservices", "Docker", "Kubernetes"]
    },
    {
      title: "Business Intelligence Analyst",
      department: "Analytics",
      location: "Remote / London",
      type: "Full-time",
      description: "Analyze business performance and create insights that drive strategic decisions for our fintech clients.",
      requirements: [
        "BA/BS in Business, Economics, or related field",
        "2+ years experience in business intelligence or analytics",
        "Proficiency in SQL, Tableau, and Excel",
        "Understanding of financial services industry",
        "Strong analytical and presentation skills"
      ],
      skills: ["SQL", "Tableau", "Excel", "Python", "Statistics"]
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Drive product strategy and development for our predictive analytics platform and fintech solutions.",
      requirements: [
        "BA/BS degree with 4+ years of product management experience",
        "Experience in fintech or financial services",
        "Strong understanding of data science and analytics",
        "Excellent communication and project management skills",
        "Experience with agile development methodologies"
      ],
      skills: ["Product Strategy", "Agile", "Analytics", "Fintech", "Leadership"]
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Competitive Compensation",
      description: "Competitive salary, equity, and performance bonuses"
    },
    {
      icon: "🏥",
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage"
    },
    {
      icon: "🌴",
      title: "Flexible Time Off",
      description: "Unlimited PTO and flexible working arrangements"
    },
    {
      icon: "📚",
      title: "Learning & Development",
      description: "Professional development budget and conference attendance"
    },
    {
      icon: "🏠",
      title: "Remote-First",
      description: "Work from anywhere with occasional team gatherings"
    },
    {
      icon: "🚀",
      title: "Innovation Time",
      description: "20% time for personal projects and innovation"
    }
  ];

  const cultureValues = [
    {
      title: "Innovation First",
      description: "We encourage creative thinking and fresh approaches to solving complex problems.",
      icon: "💡"
    },
    {
      title: "Collaborative Excellence",
      description: "We work together with the best and brightest to create solutions that matter.",
      icon: "🤝"
    },
    {
      title: "Continuous Learning",
      description: "We invest in our team's growth and encourage continuous skill development.",
      icon: "📈"
    },
    {
      title: "Impact-Driven",
      description: "Every project we work on has the potential to impact millions of people positively.",
      icon: "🎯"
    }
  ];

  return (
    <div className="careers">
      {/* Header Section */}
      <section className="careers-header section">
        <div className="container">
          <div
            id="careers-intro"
            data-animate
            className={`careers-intro ${isVisible['careers-intro'] ? 'animate-fadeInUp' : ''}`}
          >
            <h1>Careers</h1>
            <p className="careers-tagline">
              We may just have your dream job. For real.
            </p>
            <p className="careers-description">
              If you've always dreamed of solving real world problems with your mathematical powers,
              critical thinking, and creativity, we have some challenges we'd like you to meet.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section section bg-gray-100">
        <div className="container">
          <div className="mission-content">
            <div
              id="mission-text"
              data-animate
              className={`mission-text ${isVisible['mission-text'] ? 'slide-in-left' : ''}`}
            >
              <h2>Transform Lives Through Technology</h2>
              <p>
                At Predictive Data Sciences, you can put your knowledge and creativity to work accomplishing
                something life-changing for millions of people. For example, our work could make needed credit
                available to those underserved by traditional banks.
              </p>
              <p>
                Bring us your technical talents, soft skills, and drive. We'll supply the exciting challenges
                and an opportunity to work with and learn from the best and brightest. Your success will depend
                on your passion, drive, and collaboration. Our highest achievers will be on track for US-based
                consulting positions.
              </p>
              <p className="mission-highlight">
                <strong>Our standards are high. If yours are as well, let's talk.</strong>
              </p>
            </div>

            <div
              id="mission-image"
              data-animate
              className={`mission-image ${isVisible['mission-image'] ? 'slide-in-right' : ''}`}
            >
              <div className="placeholder-image">
                <div className="placeholder-content">
                  <div className="placeholder-icon">👥</div>
                  <p>Team Collaboration<br/><small>Placeholder for your asset</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="culture-section section">
        <div className="container">
          <div
            id="culture-header"
            data-animate
            className={`section-header ${isVisible['culture-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Our Culture & Values</h2>
            <p>
              We foster an environment where innovation thrives and every team member
              can make a meaningful impact on the financial technology landscape.
            </p>
          </div>

          <div
            id="culture-grid"
            data-animate
            className={`culture-grid ${isVisible['culture-grid'] ? 'animate-fadeInUp' : ''}`}
          >
            {cultureValues.map((value, index) => (
              <div
                key={index}
                className="culture-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="culture-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="jobs-section section bg-gray-100">
        <div className="container">
          <div
            id="jobs-header"
            data-animate
            className={`section-header ${isVisible['jobs-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Open Positions</h2>
            <p>
              Join our team of talented data scientists, business analysts, and Python programmers
              working on cutting-edge financial technology solutions.
            </p>
          </div>

          <div
            id="jobs-list"
            data-animate
            className={`jobs-list ${isVisible['jobs-list'] ? 'animate-fadeInUp' : ''}`}
          >
            {jobOpportunities.map((job, index) => (
              <div
                key={index}
                className="job-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="job-header">
                  <div className="job-title-section">
                    <h3 className="job-title">{job.title}</h3>
                    <div className="job-meta">
                      <span className="job-department">{job.department}</span>
                      <span className="job-location">{job.location}</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                </div>

                <p className="job-description">{job.description}</p>

                <div className="job-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="job-skills">
                  <h4>Key Skills:</h4>
                  <div className="skills-tags">
                    {job.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="job-actions">
                  <Link to="/contact" className="btn btn-primary">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <div
            id="benefits-header"
            data-animate
            className={`section-header ${isVisible['benefits-header'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Benefits & Perks</h2>
            <p>
              We believe in taking care of our team so they can focus on creating
              innovative solutions that change the world.
            </p>
          </div>

          <div
            id="benefits-grid"
            data-animate
            className={`benefits-grid ${isVisible['benefits-grid'] ? 'animate-fadeInUp' : ''}`}
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta section">
        <div className="container">
          <div
            id="careers-cta"
            data-animate
            className={`cta-content ${isVisible['careers-cta'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>Ready to Join Our Team?</h2>
            <p>
              We're always looking for talented data scientists, business analysts, and Python programmers.
              Please email your CV and the title of the position you're interested in to:
            </p>
            <div className="contact-info">
              <a href="mailto:careers@predictivedatasciences.com" className="email-link">
                careers@predictivedatasciences.com
              </a>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-lg" style={{ backgroundColor: 'white', color: 'var(--primary-blue)' }}>
                Send Application
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg" style={{ borderColor: 'white', color: 'white' }}>
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
