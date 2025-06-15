import React from 'react';
import { Phone } from 'lucide-react';

interface ContactSectionProps {
  language: 'ko' | 'en';
}

const ContactSection = ({ language }: ContactSectionProps) => {
  const content = {
    ko: {
      title: "연락처 및 상담",
      phone: "02-458-0021",
      appointmentInfo: "* 세명한의원은 예약 없이 방문하셔도 진료가 가능하며, 사전 예약을 원하시는 경우 전화로만 예약을 받고 있습니다.",
      consultation: "상담을 원하시면 언제든 연락주세요."
    },
    en: {
      title: "Contact & Consultation",
      phone: "+82-2-458-0021", 
      appointmentInfo: "* Walk-ins are welcome, or you can make appointments by phone only.",
      consultation: "Contact us anytime for consultation on healthy living."
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          {content[language].title}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg">{language === 'ko' ? '전화' : 'Phone'}</h3>
            </div>
            <p className="text-2xl font-bold text-primary mb-4">{content[language].phone}</p>
            <p className="text-base text-muted-foreground mb-3">{content[language].appointmentInfo}</p>
            <p className="text-base text-muted-foreground">{content[language].consultation}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
