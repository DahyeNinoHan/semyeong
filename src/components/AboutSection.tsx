import React from 'react';
import { User, GraduationCap, Hospital } from 'lucide-react';

interface AboutSectionProps {
  language: 'ko' | 'en';
}

const AboutSection = ({ language }: AboutSectionProps) => {
  const content = {
    ko: {
      title: "한의원 소개",
      description: "1992년부터 30년 넘게 한 자리를 지켜온 부부 한의원입니다. 그동안 쌓아온 다양한 임상 경험과 따뜻한 진심으로 환자 한 분 한 분을 맞이합니다. 몸과 마음의 균형을 되찾는 자연치유 중심의 한방 치료를 제공합니다.",
      doctors: [
        {
          name: "한붕희 원장",
          education: [
            "1987년 원광대학교 한의학과 졸업 (한의학사)",
            "1992년 원광대학교 한의학과 석사과정 졸업 (한의학석사)"
          ],
          career: "1992년 세명한의원 개원"
        },
        {
          name: "최금희 원장", 
          education: [
            "1994년 원광대학교 한의학과 졸업 (한의학사)"
          ],
          career: "1994년부터 세명한의원에서 공동 진료"
        }
      ]
    },
    en: {
      title: "About Us",
      description: "Established in 1994, Semyeong Korean Medicine Clinic has been operated by a dedicated couple with over 30 years of clinical experience. We greet every patient with warmth and expertise, offering natural healing solutions rooted in traditional Korean medicine.",
      doctors: [
        {
          name: "Dr. Boonghee Han",
          education: "Bachelor's degree (1987) and Master's degree (1992) in Korean Medicine from Wonkwang University, School of Korean Medicine.",
          career: "Founded Semyeong Clinic in 1992"
        },
        {
          name: "Dr. Gumhee Choi",
          education: "Bachelor's degree (1994) in Korean Medicine from Wonkwang University, School of Korean Medicine",
          career: "Joined Semyeong Clinic in 1994"
        }
      ]
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          {content[language].title}
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {content[language].description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {content[language].doctors.map((doctor, index) => (
            <div key={index} className="bg-card p-6 rounded-lg shadow-sm border">
              <div className="flex items-center mb-4">
                <User className="w-8 h-8 text-primary mr-3" />
                <h3 className="text-xl font-semibold">{doctor.name}</h3>
              </div>
              <div className="space-y-2">
                {Array.isArray(doctor.education) ? doctor.education.map((edu, i) => (
                  <div className="flex items-start" key={i}>
                    <GraduationCap className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{edu}</p>
                  </div>
                )) : (
                  <div className="flex items-start">
                    <GraduationCap className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground">{doctor.education}</p>
                  </div>
                )}
                <div className="flex items-start">
                  <Hospital className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <p className="text-muted-foreground">{doctor.career}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
