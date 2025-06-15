
import React from 'react';
import { Heart, Stethoscope, Pill, MessageCircle } from 'lucide-react';

interface ServicesSectionProps {
  language: 'ko' | 'en';
}

const ServicesSection = ({ language }: ServicesSectionProps) => {
  const content = {
    ko: {
      title: "진료 과목",
      subtitle: "전통 한의학의 다양한 치료법으로 건강을 회복하세요.",
      specialties: "한방 내과 / 부인과 / 소아과 / 안과 / 이비인후과 / 신경정신과 / 물리치료과",
      insurance: "* 세명한의원은 자동차보험 및 산재 진료가 가능한 지정 의료기관입니다.",
      services: [
        { icon: Stethoscope, title: "침구 치료", description: "전통적인 침술과 뜸 치료" },
        { icon: Pill, title: "한약 처방", description: "개인 체질에 맞춤 한약" },
        { icon: MessageCircle, title: "건강 상담", description: "체계적인 건강 관리 상담" }
      ]
    },
    en: {
      title: "Services", 
      subtitle: "Regain your health through various treatments in traditional Korean medicine.",
      specialties: "Internal Medicine / Women's Health / Pediatrics / Ophthalmology / ENT / Neuropsychiatry / Physical Therapy",
      insurance: "* Semyeong Clinic is a designated medical institution for car insurance and industrial accident treatment.",
      services: [
        { icon: Stethoscope, title: "Acupuncture & Moxibustion", description: "Traditional acupuncture and moxibustion therapy" },
        { icon: Pill, title: "Herbal Prescription", description: "Personalized herbal medicine" },
        { icon: MessageCircle, title: "Health Consultation", description: "Comprehensive health management consultation" }
      ]
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
          {content[language].title}
        </h2>
        <p className="text-lg text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          {content[language].subtitle}
        </p>
        
        <div className="bg-white rounded-lg p-6 mb-12 max-w-4xl mx-auto text-center shadow-sm">
          <p className="text-muted-foreground font-medium mb-3">
            {content[language].specialties}
          </p>
          <p className="text-sm text-muted-foreground">
            {content[language].insurance}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {content[language].services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border text-center hover:shadow-md transition-shadow">
                <IconComponent className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
