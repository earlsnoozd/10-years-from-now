import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection?: string;
  onSectionClick?: (section: string) => void;
}

export default function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const sections = [
    { id: 'hero', label: 'Vision' },
    { id: 'career', label: 'Career' },
    { id: 'lifestyle', label: 'Growth' },
    { id: 'impact', label: 'Legacy' },
    { id: 'closing', label: 'Future' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Show/hide based on scroll direction
      setIsVisible(currentScrollY < 100 || currentScrollY < scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  const handleSectionClick = (sectionId: string) => {
    console.log(`Navigation: Scrolling to ${sectionId} section`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onSectionClick?.(sectionId);
  };

  const navOpacity = scrollY > 50 ? 0.6 : 1;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ opacity: navOpacity }}
      data-testid="navigation-main"
    >
      <div className="backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => handleSectionClick('hero')}
              className="text-lg font-medium text-white hover:text-cosmic-space-blue transition-all duration-300 relative group"
              data-testid="link-home"
            >
              Jairus Earl S. Baquiran
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cosmic-space-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              {sections.slice(1).map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`text-sm font-medium transition-all duration-300 tracking-wide relative group ${
                    activeSection === section.id
                      ? 'text-cosmic-space-blue'
                      : 'text-white/80 hover:text-white'
                  }`}
                  data-testid={`link-${section.id}`}
                >
                  {section.label}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-cosmic-space-blue transition-all duration-300 ${
                    activeSection === section.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={() => console.log('Theme toggle clicked')}
              className="backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/20 transition-all duration-300 hover-elevate"
              data-testid="button-theme-toggle"
            >
              ✦
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}