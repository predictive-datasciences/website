import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';

// Import components for pages
import Hero from './components/Hero';
import WhyPDS from './components/WhyPDS';
import LOSPlatform from './components/LOSPlatform';
import ScoringEngine from './components/ScoringEngine';
import Pricing from './components/Pricing';
import Compliance from './components/Compliance';
import CaseStudy from './components/CaseStudy';
import Contact from './components/Contact';
import About from './components/About';

// Page Components
const HomePage = () => (
  <main className="main-content">
    <Hero />
  </main>
);

const WhyUsPage = () => (
  <main className="main-content">
    <WhyPDS />
  </main>
);

const PlatformPage = () => (
  <main className="main-content">
    <LOSPlatform />
  </main>
);

const ScoringPage = () => (
  <main className="main-content">
    <ScoringEngine />
  </main>
);

const PricingPage = () => (
  <main className="main-content">
    <Pricing />
  </main>
);

const SecurityPage = () => (
  <main className="main-content">
    <Compliance />
  </main>
);

const AboutPage = () => (
  <main className="main-content">
    <About />
  </main>
);

const ContactPage = () => (
  <main className="main-content">
    <Contact />
  </main>
);

const CaseStudyPage = () => (
  <main className="main-content">
    <CaseStudy />
  </main>
);

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/scoring" element={<ScoringPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
        <Route path="/why-pds" element={<WhyUsPage />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
