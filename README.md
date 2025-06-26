# Predictive Data Sciences - Modern Fintech Website

A cutting-edge 2025 website built with React, showcasing AI-powered fintech solutions with modern design, glassmorphism effects, and smooth animations.

## 🚀 Features

- **Modern 2025 Design**: Cutting-edge UI with glassmorphism, gradients, and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Accessibility**: WCAG compliant with proper focus states and screen reader support
- **SEO Ready**: Optimized for search engines with proper meta tags
- **Cookie Consent**: GDPR compliant cookie consent popup
- **Modern Animations**: Intersection Observer API for smooth scroll animations

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing with HashRouter
- **Modern CSS** - CSS Variables, Grid, Flexbox, and custom animations
- **Unsplash Images** - High-quality placeholder images
- **EmailJS** - Contact form integration (ready to configure)
- **Google Analytics** - Analytics integration (ready to configure)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pds-website.git
   cd pds-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔧 Configuration

### 1. Company Information
Update your company details in `src/config/constants.js`:

```javascript
export const COMPANY_INFO = {
  name: "Your Company Name",
  tagline: "Your Company Tagline",
  email: "your-email@company.com",
  phone: "+1 (555) 123-4567",
  // ... other details
};
```

### 2. Content Management
All website content is managed in `src/config/content.js`. Update:

- Hero section content
- Services descriptions
- Testimonials
- About page content
- Leadership information

### 3. Assets and Images
Replace placeholder images in `src/config/constants.js`:

```javascript
export const ASSETS = {
  company: {
    logo: "/assets/images/your-logo.png",
    heroImage: "your-hero-image-url",
    // ... other images
  }
};
```

### 4. Social Media Links
Update social media links in `src/config/constants.js`:

```javascript
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/your-company",
  twitter: "https://twitter.com/your-company",
  github: "https://github.com/your-company",
  email: "contact@your-company.com"
};
```

## 📧 Email Integration (EmailJS)

1. **Sign up for EmailJS** at [emailjs.com](https://www.emailjs.com/)

2. **Create an email service** and template

3. **Update configuration** in `src/config/constants.js`:
   ```javascript
   export const EMAIL_CONFIG = {
     serviceId: "your_service_id",
     templateId: "your_template_id",
     publicKey: "your_public_key"
   };
   ```

4. **Install EmailJS**:
   ```bash
   npm install @emailjs/browser
   ```

5. **Implement in Contact component**:
   ```javascript
   import emailjs from '@emailjs/browser';

   const sendEmail = (formData) => {
     emailjs.send(
       EMAIL_CONFIG.serviceId,
       EMAIL_CONFIG.templateId,
       formData,
       EMAIL_CONFIG.publicKey
     );
   };
   ```

## 📊 Analytics Integration

### Google Analytics 4
1. **Create a GA4 property** at [analytics.google.com](https://analytics.google.com/)

2. **Update configuration** in `src/config/constants.js`:
   ```javascript
   export const ANALYTICS_CONFIG = {
     googleAnalyticsId: "G-XXXXXXXXXX"
   };
   ```

3. **Install gtag**:
   ```bash
   npm install gtag
   ```

4. **Add to index.html**:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Hotjar (Optional)
1. **Sign up for Hotjar** at [hotjar.com](https://www.hotjar.com/)

2. **Update configuration**:
   ```javascript
   export const ANALYTICS_CONFIG = {
     hotjarId: "your_hotjar_id"
   };
   ```

## 🎨 Customization

### Color Scheme
Customize colors in `src/index.css`:

```css
:root {
  --primary-500: #667eea;  /* Main brand color */
  --secondary-500: #d946ef; /* Secondary color */
  --accent-500: #06b6d4;   /* Accent color */
  /* ... other colors */
}
```

### Typography
Update fonts in `src/index.css`:

```css
:root {
  --font-sans: 'Your Font', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Animations
Disable animations for accessibility:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

## 🚀 Deployment

### Netlify (Recommended)
1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag and drop the `build` folder to [netlify.com](https://netlify.com)
   - Or connect your GitHub repository for automatic deployments

3. **Configure redirects** (create `public/_redirects`):
   ```
   /*    /index.html   200
   ```

### Vercel
1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

### GitHub Pages
1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 📱 Mobile Optimization

The website is fully responsive with:

- **Mobile-first design** approach
- **Touch-friendly** interactive elements
- **Optimized images** for different screen sizes
- **Fast loading** on mobile networks
- **Progressive Web App** ready (add manifest.json)

## ♿ Accessibility

Built with accessibility in mind:

- **Semantic HTML** structure
- **ARIA labels** and roles
- **Keyboard navigation** support
- **Screen reader** compatibility
- **High contrast** mode support
- **Focus indicators** for all interactive elements

## 🔒 Security

- **HTTPS ready** for secure connections
- **Content Security Policy** headers recommended
- **Cookie consent** for GDPR compliance
- **No sensitive data** in client-side code

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:

- **Email**: contact@predictive-data-sciences.com
- **LinkedIn**: [Predictive Data Sciences](https://linkedin.com/company/predictive-data-sciences)
- **GitHub Issues**: [Create an issue](https://github.com/your-username/pds-website/issues)

## 🎯 Roadmap

- [ ] Add blog section with CMS integration
- [ ] Implement dark mode toggle
- [ ] Add more interactive animations
- [ ] Integrate with CRM system
- [ ] Add multi-language support
- [ ] Implement PWA features

---

**Built with ❤️ for the future of fintech**
