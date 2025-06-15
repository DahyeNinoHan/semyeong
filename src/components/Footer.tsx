import React from 'react';
import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
  language: 'ko' | 'en';
}

const Footer = ({ language }: FooterProps) => {
  const content = {
    ko: {
      title: "세명한의원",
      description: "자연의 치유력을 믿으며, 전통 한의학으로 건강한 삶을 추구합니다.",
      copyright: "© 2024 세명한의원. 모든 권리 보유. 건강한 미래를 함께."
    },
    en: {
      title: "Semyeong Korean Medicine Clinic",
      description: "We believe in the power of nature and pursue a healthy life through traditional Korean medicine.",
      copyright: "© 2024 Semyeong Korean Medicine Clinic. All rights reserved. Healthy future together."
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{content[language].title}</h3>
            <p className="text-primary-foreground/80 mb-4">{content[language].description}</p>
          </div>

          <div className="md:text-right">
            <div className="space-y-3">
              <div className="flex items-start gap-2 md:justify-end">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  서울 광진구 광나루로56길 63<br />
                  프라임프라자 306호
                </span>
              </div>
              <div className="flex items-center gap-2 md:justify-end">
                <Phone className="w-4 h-4" />
                <span className="text-sm text-primary-foreground/80">02-458-0021</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center">
          <p className="text-primary-foreground/80 text-sm">{content[language].copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
