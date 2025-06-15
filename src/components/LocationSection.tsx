import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, ExternalLink, Phone } from 'lucide-react';

declare global {
  interface Window {
    daum: {
      roughmap: {
        Lander: new (config: {
          timestamp: string;
          key: string;
          mapWidth: string;
          mapHeight: string;
        }) => {
          render: () => void;
        };
      };
    };
  }
}

interface LocationSectionProps {
  language: 'ko' | 'en';
}

const LocationSection = ({ language }: LocationSectionProps) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadDaumMap = () => {
      if (window.daum && window.daum.roughmap) {
        new window.daum.roughmap.Lander({
          timestamp: '1749526986495',
          key: '3b8zm3uov9k',
          mapWidth: '640',
          mapHeight: '360'
        }).render();
      }
    };

    const script = document.createElement('script');
    script.src = 'https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js';
    script.async = true;
    script.onload = loadDaumMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const content = {
    ko: {
      title: "위치 및 진료 시간",
      address: "서울 광진구 광나루로56길 63 프라임프라자 306호",
      hours: {
        title: "진료 시간",
        weekdays: "월, 화, 수, 금: 09:30 - 18:00 (점심시간: 13:00–14:00)",
        saturday: "토: 09:30 - 13:00",
        closed: "목, 일, 공휴일: 정기휴무",
        appointment: "근무시간 외 진료는 예약바랍니다."
      },
      mapButtons: {
        kakao: "카카오지도",
        naver: "네이버지도"
      }
    },
    en: {
      title: "Location & Hours",
      address: "#306, Prime Plaza, 63 Gwangnaru-ro 56-gil, Gwangjin-gu, Seoul",
      hours: {
        title: "Opening Hours",
        weekdays: "Mon, Tue, Wed, Fri: 9:30 AM – 6:00 PM (Lunch Break: 1:00 – 2:00 PM)",
        saturday: "Sat: 9:30 AM – 1:00 PM",
        closed: "Closed on Thursdays, Sundays, and public holidays",
        appointment: "Please make a reservation for appointments outside regular hours."
      },
      mapButtons: {
        kakao: "Kakao Map",
        naver: "Naver Map"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          {content[language].title}
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-grow">
                  <h3 className="font-semibold text-lg mb-2">{language === 'ko' ? '주소' : 'Address'}</h3>
                  <p className="text-muted-foreground">{content[language].address}</p>
                  <div className="flex gap-3 mt-4">
                    <a 
                      href="https://kko.kakao.com/-Qbj4Nzz3B"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {content[language].mapButtons.kakao}
                    </a>
                    <a 
                      href="https://naver.me/xhzMk8KW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {content[language].mapButtons.naver}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="w-full">
                  <h3 className="font-semibold text-lg mb-4">{content[language].hours.title}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>{content[language].hours.weekdays}</p>
                    <p>{content[language].hours.saturday}</p>
                    <p>{content[language].hours.closed}</p>
                    <p className="text-primary font-medium pt-2">{content[language].hours.appointment}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <img 
              src="/lovable-uploads/9493e026-f65f-4673-b806-4c061b38c56a.png"
              alt="세명한의원 위치 지도"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
