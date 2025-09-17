import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CareerVisionSection from '@/components/CareerVisionSection';
import LifestyleGrowthSection from '@/components/LifestyleGrowthSection';
import ImpactLegacySection from '@/components/ImpactLegacySection';
import ClosingSection from '@/components/ClosingSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'career', 'lifestyle', 'impact', 'closing'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onSectionClick={handleSectionClick}
      />
      
      <main>
        <HeroSection />
        <CareerVisionSection />
        <LifestyleGrowthSection />
        <ImpactLegacySection />
        <ClosingSection />
      </main>
    </div>
  );
}