
import React from 'react';
import { Check } from 'lucide-react';

interface WhySpecialSectionProps {
  language: 'ko' | 'en';
}

const WhySpecialSection = ({ language }: WhySpecialSectionProps) => {
  const content = {
    ko: {
      title: "세명한의원이 특별한 이유",
      features: [
        "30년 이상 다양한 임상 경험을 쌓아온 숙련된 한의사",
        "체질과 증상에 맞춘 개인별 맞춤 치료",
        "안전하고 부담 없는, 자연치유 중심의 한방 치료"
      ]
    },
    en: {
      title: "Why Semyeong Clinic is Special",
      features: [
        "Experienced practitioners with over 30 years of clinical knowledge",
        "Personalized treatments based on your body constitution and symptoms", 
        "Safe and natural healing focused on long-term wellness"
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          {content[language].title}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {content[language].features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
              <Check className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySpecialSection;
