import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import AnimatedSection from './AnimatedSection';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    console.log('Hero: Explore vision clicked');
    const careerSection = document.getElementById('career');
    if (careerSection) {
      careerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Subtle parallax effect
  const parallaxOffset = scrollY * 0.3;

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      {/* Cosmic Background with Parallax */}
      <div 
        className="absolute inset-0 bg-hero-gradient"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Enhanced particles effect */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'w-2 h-2 bg-cosmic-space-blue/60' :
              i % 3 === 1 ? 'w-1.5 h-1.5 bg-cosmic-cosmic-purple/60' :
              'w-1 h-1 bg-white/80'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        <AnimatedSection animationType="fade-up">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight leading-tight"
            data-testid="text-hero-title"
          >
            I'm{' '}
            <span className="font-semibold bg-gradient-to-r from-black via-gray-700 to-gray-300 bg-clip-text text-transparent">
              Jairus Earl S. Baquiran
            </span>
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl mt-4 block">
              This is My Life in{' '}
              <span className="font-semibold bg-gradient-to-r from-white to-cosmic-silver bg-clip-text text-transparent">
                10 Years
              </span>
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={300}>
          <p 
            className="text-lg md:text-xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            A visionary journey where innovation meets purpose, technology serves humanity, 
            and every day brings new opportunities to shape tomorrow.
          </p>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              variant="outline"
              onClick={handleExploreClick}
              className="backdrop-blur-md bg-white/20 border-white/30 text-white hover:bg-white/30 transition-all duration-300 px-8 py-3 text-lg font-medium hover-elevate"
              data-testid="button-explore-vision"
            >
              Explore My Vision
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => console.log('Learn more clicked')}
              className="text-white/80 hover:text-white hover:bg-white/10 px-8 py-3 text-lg font-medium hover-elevate"
              data-testid="button-learn-more"
            >
              Learn More →
            </Button>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection animationType="fade-in" delay={1200}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}