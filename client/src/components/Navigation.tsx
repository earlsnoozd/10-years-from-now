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
      <div className="backdrop-blur-md bg-white/10 border-b border-cosmic-silver/20">
        <div className="max-w-4xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => handleSectionClick('hero')}
              className="text-sm font-medium text-foreground hover:text-cosmic-deep-blue transition-colors"
              data-testid="link-home"
            >
              Future Vision
            </button>
            
            <div className="hidden md:flex items-center space-x-8">
              {sections.slice(1).map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleSectionClick(section.id)}
                  className={`text-sm font-medium transition-colors tracking-wide ${
                    activeSection === section.id
                      ? 'text-cosmic-deep-blue'
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  data-testid={`link-${section.id}`}
                >
                  {section.label}
                </button>
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm"
              onClick={() => console.log('Theme toggle clicked')}
              className="backdrop-blur-sm bg-white/20 border-cosmic-silver/30 hover-elevate"
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