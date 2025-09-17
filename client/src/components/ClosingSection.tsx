import { ArrowRight, Mail, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';

export default function ClosingSection() {
  const handleConnectClick = () => {
    console.log('Closing: Connect clicked');
  };

  const handleScheduleClick = () => {
    console.log('Closing: Schedule meeting clicked');
  };

  const handleNewsletterClick = () => {
    console.log('Closing: Newsletter signup clicked');
  };

  return (
    <section 
      id="closing" 
      className="relative py-24 px-8 overflow-hidden"
      data-testid="section-closing"
    >
      {/* Fading Starfield Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cosmic-soft-overlay to-cosmic-infinite-black opacity-90" />
      <div className="absolute inset-0 bg-starfield opacity-20 animate-pulse" />
      
      {/* Enhanced starfield overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cosmic-cosmic-purple/5 to-cosmic-infinite-black/10" />
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main Closing Message with Typing Effect */}
        <AnimatedSection animationType="fade-up">
          <div className="mb-8">
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tight leading-tight overflow-hidden whitespace-nowrap border-r-4 border-cosmic-space-blue animate-typing"
              data-testid="text-closing-title"
              style={{ width: 'fit-content', margin: '0 auto' }}
            >
              The Journey Begins Now
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection animationType="fade-up" delay={300}>
          <p 
            className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto"
            data-testid="text-closing-message"
          >
            This vision isn't just a dream—it's a roadmap. Every day brings new opportunities 
            to move closer to this future. The best time to plant a tree was 20 years ago. 
            The second best time is now.
          </p>
        </AnimatedSection>

        {/* Call to Action Buttons */}
        <AnimatedSection animationType="fade-up" delay={600}>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              onClick={handleConnectClick}
              className="bg-cosmic-space-blue hover:bg-cosmic-space-blue/90 text-white px-8 py-4 text-lg font-medium group hover-elevate shadow-lg hover:shadow-cosmic-space-blue/40"
              data-testid="button-connect"
            >
              <Mail className="w-5 h-5 mr-2" />
              Let's Connect
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleScheduleClick}
              className="border-cosmic-cosmic-purple text-cosmic-cosmic-purple hover:bg-cosmic-cosmic-purple/10 px-8 py-4 text-lg font-medium hover-elevate shadow-lg"
              data-testid="button-schedule"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Chat
            </Button>
          </div>
        </AnimatedSection>

        {/* Newsletter Signup */}
        <AnimatedSection animationType="fade-up" delay={900}>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 border border-cosmic-silver/30 mb-16">
            <h3 
              className="text-2xl font-semibold text-cosmic-infinite-black mb-4"
              data-testid="text-newsletter-title"
            >
              Join the Journey
            </h3>
            <p 
              className="text-muted-foreground mb-6"
              data-testid="text-newsletter-description"
            >
              Get updates on my progress, insights from the journey, and early access to projects and initiatives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-cosmic-silver/40 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-cosmic-space-blue/20 focus:border-cosmic-space-blue transition-all duration-200"
                data-testid="input-email"
              />
              <Button
                onClick={handleNewsletterClick}
                className="bg-cosmic-space-blue hover:bg-cosmic-space-blue/90 text-white px-6 py-3 hover-elevate shadow-lg"
                data-testid="button-newsletter"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Final Inspirational Quote */}
        <AnimatedSection animationType="fade-up" delay={1200}>
          <div className="border-t border-cosmic-silver/30 pt-16">
            <blockquote 
              className="text-2xl md:text-3xl font-light text-cosmic-infinite-black leading-relaxed italic mb-8"
              data-testid="text-closing-quote"
            >
              "The future belongs to those who believe in the beauty of their dreams, 
              and have the courage to pursue them relentlessly."
            </blockquote>
            <div className="w-24 h-0.5 bg-gradient-to-r from-cosmic-deep-blue to-cosmic-starlight-purple mx-auto"></div>
          </div>
        </AnimatedSection>

        {/* Floating elements for visual interest */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cosmic-deep-blue rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-16 w-3 h-3 bg-cosmic-starlight-purple rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-cosmic-silver rounded-full opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}