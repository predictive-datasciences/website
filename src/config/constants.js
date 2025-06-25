// Configuration file for easy management of links, assets, and integrations
// Update these values to customize your website

export const COMPANY_INFO = {
  name: "Predictive Data Sciences",
  tagline: "Creating the future of big data through innovative predictive analytics solutions",
  description: "Predictive Data Sciences offers innovative solutions through emerging methodologies combined with deep experience and cutting-edge innovation.",
  email: "info@predictivedatasciences.com", // Placeholder - replace with actual email
  phone: "+1 (555) 123-4567", // Placeholder - replace with actual phone

  // Social Links
  socialLinks: {
    linkedin: "https://linkedin.com/company/predictive-data-sciences", // Placeholder - replace with actual
    // twitter: "", // Removed as requested
    // facebook: "", // Add if needed
    // instagram: "", // Add if needed
  },

  // Office Locations
  offices: [
    {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
      isHeadquarters: true
    },
    {
      city: "San Diego",
      state: "CA",
      country: "United States",
      isHeadquarters: false
    }
  ],

  // Company Details
  founded: "2014",
  industry: "Financial Services",
  companySize: "2-10 employees",

  // Founder Information
  founder: {
    name: "Krishna Gopinathan",
    title: "Founder & CEO",
    experience: "24 years of experience in predictive analytics and data science",
    background: "Founder of Global Analytics India, original inventor of Falcon (HNC/Fair Isaac's fraud detection system), serial entrepreneur",
    linkedin: "http://www.linkedin.com/in/krishnagopinathan"
  }
};

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/predictive-data-sciences", // Placeholder - replace with actual
  // twitter: "", // Removed as requested
  // facebook: "", // Add if needed
  // instagram: "", // Add if needed
};

export const ASSETS = {
  logo: "/assets/logo.png", // Placeholder path
  founderPhoto: "/assets/krishna-gopinathan.jpg", // Placeholder path
  companyPhotos: {
    office: "/assets/office.jpg",
    team: "/assets/team.jpg",
    meeting: "/assets/meeting.jpg"
  },
  icons: {
    // Add paths to actual icon files when available
    dataScience: "/assets/icons/data-science.svg",
    fraud: "/assets/icons/fraud-detection.svg",
    analytics: "/assets/icons/analytics.svg"
  }
};

export const STATS = [
  { number: '300M+', label: 'Loans Originated' },
  { number: '20+', label: 'Years Experience' },
  { number: '100+', label: 'Patents Filed' },
  { number: '382+', label: 'Patent References' },
  { number: '50+', label: 'Enterprise Clients' },
  { number: '99.8%', label: 'Accuracy Rate' }
];

export const JOB_OPENINGS = [
  {
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Remote", // Updated to Remote
    type: "Full-time",
    description: "Join our engineering team to build scalable fintech platforms and data-driven applications that serve millions of users.",
    requirements: [
      "5+ years of experience in full-stack development",
      "Proficiency in React, Node.js, and modern JavaScript frameworks",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of database design and optimization",
      "Knowledge of RESTful APIs and microservices architecture",
      "Experience with version control systems (Git)",
      "Bachelor's degree in Computer Science or related field"
    ],
    responsibilities: [
      "Develop and maintain web applications using modern technologies",
      "Collaborate with data scientists to implement ML models in production",
      "Design and implement scalable backend services and APIs",
      "Optimize application performance and ensure high availability",
      "Participate in code reviews and maintain coding standards",
      "Work closely with product team to translate requirements into technical solutions",
      "Contribute to architectural decisions and technical strategy"
    ]
  },
  {
    title: "Data Scientist",
    department: "Data Science",
    location: "Remote", // Updated to Remote
    type: "Full-time",
    description: "Lead the development of cutting-edge predictive models and machine learning solutions for fraud detection and risk assessment.",
    requirements: [
      "PhD or Master's in Data Science, Statistics, Mathematics, or related field",
      "5+ years of experience in machine learning and predictive modeling",
      "Expertise in Python, R, and SQL",
      "Experience with ML frameworks (TensorFlow, PyTorch, scikit-learn)",
      "Strong background in statistical analysis and hypothesis testing",
      "Experience with big data technologies (Spark, Hadoop)",
      "Knowledge of financial services and risk modeling preferred"
    ],
    responsibilities: [
      "Develop and deploy machine learning models for fraud detection",
      "Conduct advanced statistical analysis on large datasets",
      "Collaborate with engineering team to productionize ML models",
      "Research and implement state-of-the-art algorithms",
      "Present findings and recommendations to stakeholders",
      "Mentor junior data scientists and contribute to best practices",
      "Stay current with latest developments in ML and data science"
    ]
  }
];

// Email service configuration (for future integration)
export const EMAIL_CONFIG = {
  // UPDATE: Configure your email service
  service: "emailjs", // or "sendgrid", "mailgun", etc.
  serviceId: "YOUR_SERVICE_ID", // EmailJS service ID
  templateId: "YOUR_TEMPLATE_ID", // EmailJS template ID
  publicKey: "YOUR_PUBLIC_KEY" // EmailJS public key
};

// Analytics configuration (for future integration)
export const ANALYTICS_CONFIG = {
  // UPDATE: Add your analytics IDs
  googleAnalyticsId: "GA_MEASUREMENT_ID",
  hotjarId: "HOTJAR_ID"
};

// Company Statistics for Rolling Bar
export const COMPANY_STATS = [
  { label: "Years of Experience", value: "24+" },
  { label: "Patents Filed", value: "10+" },
  { label: "Clients Served", value: "50+" },
  { label: "Data Points Processed", value: "1B+" },
  { label: "Models Deployed", value: "100+" },
  { label: "Countries Served", value: "15+" }
];

// Configuration for External Services
export const EXTERNAL_CONFIG = {
  // EmailJS Configuration (for contact forms)
  emailjs: {
    serviceId: "your_service_id", // Replace with actual EmailJS service ID
    templateId: "your_template_id", // Replace with actual EmailJS template ID
    publicKey: "your_public_key" // Replace with actual EmailJS public key
  },

  // Google Analytics
  googleAnalytics: {
    trackingId: "GA_TRACKING_ID" // Replace with actual GA tracking ID
  },

  // Other integrations can be added here
  hubspot: {
    portalId: "your_portal_id" // Example for HubSpot integration
  }
};
