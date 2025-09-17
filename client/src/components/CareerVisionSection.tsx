import { Rocket, Target, Zap } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CosmicCard from './CosmicCard';

export default function CareerVisionSection() {
  const handleCardClick = (area: string) => {
    console.log(`Career Vision: ${area} card clicked`);
  };

  return (
    <section 
      id="career" 
      className="py-24 px-8 bg-white relative overflow-hidden"
      data-testid="section-career"
    >
      {/* Subtle background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-cosmic-soft-overlay to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection animationType="fade-up" className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-light text-cosmic-infinite-black mb-6 tracking-tight"
            data-testid="text-career-title"
          >
            Career <span className="font-semibold">Vision</span>
          </h2>
          <p 
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            data-testid="text-career-subtitle"
          >
            Building the future through innovation, leadership, and meaningful impact. 
            My professional journey towards becoming a transformative force in technology.
          </p>
        </AnimatedSection>

        {/* Career Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedSection animationType="fade-up" delay={200}>
            <CosmicCard
              title="Tech Leadership"
              description="Leading cross-functional teams to build products that shape the future of human-computer interaction."
              icon={<Target className="w-6 h-6 text-cosmic-deep-blue" />}
              features={[
                "Chief Technology Officer role",
                "Team of 50+ engineers", 
                "Global product impact",
                "Open-source contributions"
              ]}
              variant="default"
              actionLabel="Explore Path"
              onActionClick={() => handleCardClick('Leadership')}
            />
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={400}>
            <CosmicCard
              title="Innovation Hub"
              description="Founding and scaling a technology company that solves complex challenges through elegant solutions."
              icon={<Rocket className="w-6 h-6 text-cosmic-deep-blue" />}
              features={[
                "B2B SaaS platform",
                "AI-powered solutions",
                "Sustainable growth model",
                "Industry recognition"
              ]}
              variant="gradient"
              actionLabel="View Strategy"
              onActionClick={() => handleCardClick('Innovation')}
            />
          </AnimatedSection>

          <AnimatedSection animationType="fade-up" delay={600} className="md:col-span-2 lg:col-span-1">
            <CosmicCard
              title="Industry Impact"
              description="Establishing thought leadership and driving industry standards that benefit millions of users worldwide."
              icon={<Zap className="w-6 h-6 text-cosmic-deep-blue" />}
              features={[
                "Conference keynote speaker",
                "Published research papers",
                "Mentoring next generation",
                "Policy advisory roles"
              ]}
              variant="default"
              actionLabel="Read More"
              onActionClick={() => handleCardClick('Impact')}
            />
          </AnimatedSection>
        </div>

        {/* Vision Statement */}
        <AnimatedSection animationType="fade-up" delay={800} className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-lg bg-gradient-to-r from-cosmic-soft-overlay/30 to-transparent">
            <blockquote 
              className="text-2xl md:text-3xl font-light text-cosmic-infinite-black leading-relaxed italic"
              data-testid="text-career-vision"
            >
              "By 2034, I envision myself at the intersection of technology and humanity, 
              leading teams that build products which don't just serve users, but elevate human potential."
            </blockquote>
            <div className="mt-6 w-16 h-0.5 bg-cosmic-deep-blue mx-auto"></div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}