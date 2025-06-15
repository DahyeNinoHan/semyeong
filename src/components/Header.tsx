import React from 'react';
import { Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
  language: 'ko' | 'en';
  onLanguageChange: (lang: 'ko' | 'en') => void;
}

const Header = ({ language, onLanguageChange }: HeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = () => {
    const nextLang = language === 'ko' ? 'en' : 'ko';
    onLanguageChange(nextLang);
    if (nextLang === 'en') {
      navigate('/en');
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/web_logo.svg" 
              alt="세명한의원 로고" 
              className="h-12 w-auto"
            />
          </div>
          
          <button
            onClick={handleLanguageChange}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Globe className="w-4 h-4" />
            {language === 'ko' ? 'ENG' : '한국어'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
