import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { JOB_OPENINGS, COMPANY_INFO } from '../config/constants';
import { CONTENT } from '../config/content';
import './Careers.css';



const Careers = () => {
  const [isVisible, setIsVisible] = useState({});
  const [expandedJob, setExpandedJob] = useState(null);

  useEffect(() => {
    // Fix the content vanishing issue by ensuring proper initialization
    setIsVisible({
      'careers-intro': true,
      'jobs-section': true,
      'culture-section': true
    });

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

  const toggleJobDetails = (index) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <div className="careers page-sky-blue">
      {/* Header Section */}
      <section className="careers-header section bg-gradient-hero">
        <div className="container">
          <div
            id="careers-intro"
            data-animate
            className={`careers-intro text-center ${isVisible['careers-intro'] ? 'animate-fadeInUp' : ''}`}
          >
            <h1 className="page-title-white">{CONTENT.careers.hero.title}</h1>
            <p className="page-subtitle-white text-large mb-6">
              {CONTENT.careers.hero.subtitle}
            </p>
            <p className="page-description-white text-large">
              {CONTENT.careers.hero.description}
            </p>
          </div>
        </div>
      </section>



      {/* Job Openings Section */}
      <section className="jobs-section section">
        <div className="container">
          <div
            id="jobs-section"
            data-animate
            className={`section-header ${isVisible['jobs-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>{CONTENT.careers.jobs.title}</h2>
            <p>{CONTENT.careers.jobs.subtitle}</p>
          </div>

          <div className="jobs-grid grid grid-auto-fit-lg">
            {JOB_OPENINGS.map((job, index) => (
              <div key={index} className="job-card card">
                <div className="job-header mb-6">
                  <div className="job-info">
                    <h3 className="job-title card-title">{job.title}</h3>
                    <div className="job-meta flex gap-4 mt-2">
                      <span className="job-department card-subtitle">{job.department}</span>
                      <span className="job-location card-subtitle">{job.location}</span>
                      <span className="job-type card-subtitle">{job.type}</span>
                    </div>
                  </div>
                </div>

                <p className="job-description card-description mb-6">{job.description}</p>

                <div className={`job-details ${expandedJob === index ? 'expanded' : ''}`}>
                  <div className="job-section mb-6">
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul>
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-small">{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="job-section mb-6">
                    <h4 className="font-semibold mb-3">Responsibilities</h4>
                    <ul>
                      {job.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-small">{resp}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="job-actions card-footer flex gap-3">
                  <button
                    className="job-details-btn btn btn-ghost btn-base flex-1"
                    onClick={() => toggleJobDetails(index)}
                  >
                    {expandedJob === index ? 'Hide Details' : 'View Details'}
                  </button>
                  <a
                    href={`mailto:${COMPANY_INFO.email}?subject=Application for ${job.title}&body=Hi, I'm interested in applying for the ${job.title} position.`}
                    className="apply-btn btn btn-primary btn-base"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="culture-section section">
        <div className="container">
          <div
            id="culture-section"
            data-animate
            className={`section-header ${isVisible['culture-section'] ? 'animate-fadeInUp' : ''}`}
          >
            <h2>{CONTENT.careers.culture.title}</h2>
            <p>{CONTENT.careers.culture.subtitle}</p>
          </div>

          <div className="values-grid grid grid-4">
            {CONTENT.careers.culture.values.map((value, index) => (
              <div key={index} className="value-card card text-center">
                <h4 className="card-title">{value.title}</h4>
                <p className="card-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section">
        <div className="container">
          <div className="section-header">
            <h2>{CONTENT.careers.benefits.title}</h2>
          </div>

          <div className="benefits-grid grid grid-auto-fit-sm">
            {CONTENT.careers.benefits.items.map((benefit, index) => (
              <div key={index} className="benefit-card card card-compact text-center">
                <p className="card-description text-small">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="career-cta section">
        <div className="container">
          <div className="cta-content text-center">
            <h2>{CONTENT.careers.cta.title}</h2>
            <p className="text-large mb-8">{CONTENT.careers.cta.description}</p>
            <div className="cta-actions flex gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary btn-xl">
                {CONTENT.careers.cta.primaryButton}
              </Link>
              <Link to="/about" className="btn btn-outline btn-xl">
                {CONTENT.careers.cta.secondaryButton}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
