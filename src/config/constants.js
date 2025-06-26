// Configuration file for easy management of links, assets, and integrations
// Update these values to customize your website

// Modern 2025 Constants Configuration
export const COMPANY_INFO = {
  name: "Predictive Data Sciences",
  tagline: "Transforming Fintech with AI-Powered Solutions",
  description: "We specialize in delivering cutting-edge AI and data science solutions for fintech companies, from startups to enterprise-scale organizations.",
  founded: "2015",
  email: "contact@predictive-data-sciences.com",
  phone: "+1 (619) 123-4567",
  website: "https://predictive-data-sciences.com",

  offices: {
    headquarters: {
      name: "Headquarters",
      address: "Chennai, Tamil Nadu, India",
      phone: "+91 44 1234 5678",
      email: "india@predictive-data-sciences.com"
    },
    usa: {
      name: "US Office",
      address: "San Diego, CA, USA",
      phone: "+1 (619) 123-4567",
      email: "usa@predictive-data-sciences.com"
    }
  }
};

// High-Quality Asset URLs (Unsplash & Professional Images)
export const ASSETS = {
  company: {
    logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=200&fit=crop&crop=center",
    logoWhite: "/assets/images/logo-white.png",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop&crop=center",
    aboutImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop&crop=center",
    officeChennai: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    officeSanDiego: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
  },

  services: {
    losFintech: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop&crop=center",
    uiuxDevelopment: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop&crop=center",
    aiRiskModels: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center",
    businessConsultancy: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center",
    dataAnalytics: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center",
    aiIntegration: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop&crop=center"
  },

  team: {
    krishna: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    placeholder: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
  },

  backgrounds: {
    hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop&crop=center",
    testimonials: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&h=1080&fit=crop&crop=center",
    cta: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1920&h=1080&fit=crop&crop=center",
    about: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop&crop=center"
  },

  technology: {
    aiDashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    blockchain: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=center",
    fintech: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&crop=center",
    analytics: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
  },

  clients: {
    financeFlow: "https://via.placeholder.com/200x80/667eea/ffffff?text=FinanceFlow",
    lendTech: "https://via.placeholder.com/200x80/764ba2/ffffff?text=LendTech",
    megaBank: "https://via.placeholder.com/200x80/4facfe/ffffff?text=MegaBank",
    neoBank: "https://via.placeholder.com/200x80/f093fb/ffffff?text=NeoBank"
  }
};

// Rolling Statistics
export const STATS = [
  { number: "200+", label: "Clients Served" },
  { number: "50M+", label: "Transactions Processed" },
  { number: "99.2%", label: "Model Accuracy" },
  { number: "24/7", label: "Support Available" },
  { number: "15+", label: "Years Experience" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "500+", label: "Projects Delivered" },
  { number: "25+", label: "AI Models Deployed" }
];

// Job Openings
export const JOB_OPENINGS = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge fintech applications using modern technologies and AI integration.",
    requirements: [
      "5+ years of full-stack development experience",
      "Expertise in React, Node.js, and cloud platforms",
      "Experience with fintech and payment systems",
      "Strong understanding of security best practices",
      "Knowledge of AI/ML integration is a plus"
    ],
    responsibilities: [
      "Architect and develop scalable fintech applications",
      "Integrate AI models into production systems",
      "Collaborate with data science and product teams",
      "Ensure security and compliance standards",
      "Mentor junior developers and code review"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Flexible remote work arrangements",
      "Health and wellness benefits",
      "Professional development opportunities",
      "Cutting-edge technology stack"
    ]
  },
  {
    id: 2,
    title: "Senior Data Scientist - AI Risk Models",
    department: "Data Science",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "Develop and deploy advanced AI risk models for financial services, focusing on credit risk, fraud detection, and regulatory compliance.",
    requirements: [
      "4+ years of data science experience in fintech",
      "PhD/Masters in Statistics, Mathematics, or Computer Science",
      "Expertise in Python, R, and machine learning frameworks",
      "Experience with risk modeling and regulatory requirements",
      "Strong statistical analysis and model validation skills"
    ],
    responsibilities: [
      "Design and implement AI-powered risk assessment models",
      "Validate model performance and ensure regulatory compliance",
      "Collaborate with engineering teams on model deployment",
      "Research and implement cutting-edge ML techniques",
      "Present findings to stakeholders and regulatory bodies"
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Flexible remote work with occasional travel",
      "Conference attendance and research opportunities",
      "Access to latest ML tools and cloud platforms",
      "Collaborative and innovative work environment"
    ]
  }
];

// Email Configuration (Ready for EmailJS integration)
export const EMAIL_CONFIG = {
  serviceId: "your_emailjs_service_id", // Replace with actual EmailJS service ID
  templateId: "your_emailjs_template_id", // Replace with actual EmailJS template ID
  publicKey: "your_emailjs_public_key" // Replace with actual EmailJS public key
};

// Analytics Configuration
export const ANALYTICS_CONFIG = {
  googleAnalyticsId: "G-XXXXXXXXXX", // Replace with actual GA4 measurement ID
  hotjarId: "your_hotjar_id" // Replace with actual Hotjar site ID
};

// Navigation Menu Items
export const NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" }
];

// Feature Flags (for easy enabling/disabling of features)
export const FEATURES = {
  cookieConsent: true,
  analytics: false, // Set to true when analytics is configured
  emailIntegration: false, // Set to true when EmailJS is configured
  chatBot: false, // Future feature
  darkMode: false // Future feature
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
