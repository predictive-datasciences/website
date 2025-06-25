# Predictive Data Sciences Website

A modern, professional React website for Predictive Data Sciences - showcasing advanced predictive analytics and AI solutions for financial services.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.js       # Navigation header
│   └── Footer.js       # Site footer
├── pages/              # Page components
│   ├── Home.js         # Homepage with key features
│   ├── About.js        # Detailed services & company info
│   ├── Careers.js      # Job listings (2 roles)
│   ├── Leadership.js   # Team information
│   └── Contact.js      # Contact form
├── config/             # Configuration files
│   └── constants.js    # Centralized settings
└── assets/             # Static assets (create this folder)
```

## ⚙️ Configuration

### 1. Update Company Information

Edit `src/config/constants.js` to customize:

- **Company details** (name, email, tagline)
- **Social media links** (LinkedIn, Twitter, email)
- **Job openings** (currently 2 roles: Full Stack Developer & Data Scientist)
- **Statistics** for the rolling stats bar
- **Email service configuration**

### 2. Replace Placeholder Assets

The website currently uses placeholder icons. To add your actual assets:

1. **Create the assets directory:**
   ```bash
   mkdir public/assets
   mkdir public/assets/icons
   mkdir public/assets/team
   ```

2. **Add your assets:**
   - Logo: `public/assets/logo.svg`
   - Service icons: `public/assets/icons/[service-name].svg`
   - Team photos: `public/assets/team/[member-name].jpg`

3. **Update asset paths in `src/config/constants.js`:**
   ```javascript
   export const ASSETS = {
     logo: "/assets/logo.svg",
     services: {
       riskAssessment: "/assets/icons/risk-assessment.svg",
       fraudDetection: "/assets/icons/fraud-detection.svg",
       // ... add more as needed
     }
   };
   ```

### 3. Replace Placeholder Icons

Currently, all icons use placeholder SVGs. To replace them:

1. **Option A: Use actual SVG files**
   - Replace the placeholder `<svg>` content in the `PlaceholderIcon` components
   - Use your own SVG icons based on the `type` prop

2. **Option B: Use an icon library**
   ```bash
   npm install react-icons
   ```
   Then replace `PlaceholderIcon` components with actual icons.

## 🔗 Social Media Integration

### Update Social Links

In `src/config/constants.js`:

```javascript
export const SOCIAL_LINKS = {
  linkedin: {
    url: "https://linkedin.com/company/your-actual-company", // UPDATE THIS
    enabled: true
  },
  twitter: {
    url: "https://twitter.com/your-company", // UPDATE THIS
    enabled: true // Set to true when ready
  }
};
```

### Add More Social Platforms

1. Add new platforms to `SOCIAL_LINKS` in constants.js
2. Update the Footer component to include the new links
3. Add corresponding SVG icons

## 📧 Email Service Integration

### Option 1: EmailJS (Recommended for simple setups)

1. **Install EmailJS:**
   ```bash
   npm install @emailjs/browser
   ```

2. **Set up EmailJS account:**
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Create account and get your Service ID, Template ID, and Public Key

3. **Update configuration in `src/config/constants.js`:**
   ```javascript
   export const EMAIL_CONFIG = {
     service: "emailjs",
     serviceId: "YOUR_SERVICE_ID",
     templateId: "YOUR_TEMPLATE_ID",
     publicKey: "YOUR_PUBLIC_KEY"
   };
   ```

4. **Implement in Contact form:**
   ```javascript
   import emailjs from '@emailjs/browser';
   import { EMAIL_CONFIG } from '../config/constants';

   const sendEmail = (formData) => {
     emailjs.send(
       EMAIL_CONFIG.serviceId,
       EMAIL_CONFIG.templateId,
       formData,
       EMAIL_CONFIG.publicKey
     );
   };
   ```

### Option 2: Custom Backend

1. **Create API endpoint** for form submissions
2. **Update Contact page** to POST to your API
3. **Configure email service** (SendGrid, Mailgun, etc.) on your backend

## 📈 Analytics Integration

### Google Analytics

1. **Install gtag:**
   ```bash
   npm install gtag
   ```

2. **Update `src/config/constants.js`:**
   ```javascript
   export const ANALYTICS_CONFIG = {
     googleAnalyticsId: "GA_MEASUREMENT_ID" // Replace with your ID
   };
   ```

3. **Add to `public/index.html`:**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

### Hotjar (Optional)

1. **Update analytics config** with your Hotjar ID
2. **Add Hotjar script** to `public/index.html`

## 🎨 Customization

### Colors & Branding

Update CSS custom properties in `src/index.css`:

```css
:root {
  --primary-blue: #1e3a8a;    /* Your primary brand color */
  --secondary-blue: #3b82f6;   /* Secondary color */
  --accent-cyan: #06b6d4;      /* Accent color */
  /* ... other colors */
}
```

### Content Updates

All website content is now centralized for easy management:

- **All text content:** Edit `src/config/content.js`
- **Job listings:** Edit `JOB_OPENINGS` in `src/config/constants.js`
- **Company stats:** Update `STATS` array in `src/config/constants.js`
- **Company info & social links:** Update `src/config/constants.js`

**Content Configuration Structure:**
```javascript
// src/config/content.js
export const CONTENT = {
  home: { hero: {...}, features: {...}, cta: {...} },
  about: { header: {...}, mission: {...}, services: {...} },
  careers: { header: {...}, jobs: {...}, culture: {...} },
  leadership: { header: {...}, team: {...}, expertise: {...} },
  contact: { header: {...}, form: {...}, info: {...} },
  ui: { buttons: {...}, placeholders: {...} }
};
```

## 🚨 Important Notes

### Current State
- ✅ Content vanishing issue fixed
- ✅ Footer compacted and standardized
- ✅ Emojis replaced with placeholder icons
- ✅ Careers simplified to 2 roles
- ✅ Centralized configuration system

### Next Steps
1. Replace placeholder icons with actual assets
2. Configure email service
3. Add social media URLs
4. Set up analytics
5. Add team photos and information

## 🛠️ Deployment

### Netlify (Recommended)
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `build`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Traditional Hosting
1. Run: `npm run build`
2. Upload the `build` folder contents to your web server

## 📞 Support

For questions about this codebase:
- Check the configuration files in `src/config/`
- Review component structure in `src/components/` and `src/pages/`
- All placeholder content is clearly marked for easy replacement

## 🔄 Updates

This website is designed to be easily maintainable:
- All configuration is centralized in `src/config/constants.js`
- Icons are placeholder-based for easy replacement
- Responsive design works on all devices
- Modern React patterns for easy updates

---

**Built with React, modern CSS, and professional design principles.**
