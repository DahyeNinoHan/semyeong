
import React from 'react';

interface HeroSectionProps {
  language: 'ko' | 'en';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  const content = {
    ko: {
      title: "전통 한의학과 30년 임상 경험으로",
      subtitle: "몸과 마음의 균형을 찾아드립니다"
    },
    en: {
      title: "Restoring balance of body and mind",
      subtitle: "through 30 years of clinical experience in traditional Korean medicine"
    }
  };

  return (
    <section 
      className="relative py-20 bg-gradient-to-br from-blue-50 to-green-50"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          {content[language].title}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
          {content[language].subtitle}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
