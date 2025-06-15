import React, { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import WhySpecialSection from '@/components/WhySpecialSection';
import LocationSection from '@/components/LocationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

interface IndexProps {
  initialLanguage?: 'ko' | 'en';
}

const Index = ({ initialLanguage = 'ko' }: IndexProps) => {
  const [language, setLanguage] = useState<'ko' | 'en'>(initialLanguage);

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} onLanguageChange={setLanguage} />
      <HeroSection language={language} />
      <AboutSection language={language} />
      <ServicesSection language={language} />
      <WhySpecialSection language={language} />
      <LocationSection language={language} />
      <ContactSection language={language} />
      <Footer language={language} />
    </div>
  );
};

export default Index;
