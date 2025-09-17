import { Users, TreePine, Lightbulb, Award } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import CosmicCard from './CosmicCard';
import { Button } from '@/components/ui/button';

export default function ImpactLegacySection() {
  const handleImpactAction = (area: string) => {
    console.log(`Impact Legacy: ${area} action clicked`);
  };

  const handleManifestoClick = () => {
    console.log('Impact Legacy: Manifesto clicked');
  };

  return (
    <section 
      id="impact" 
      className="py-24 px-8 bg-gradient-to-b from-white via-gray-100 to-cosmic-infinite-black relative overflow-hidden transition-all duration-1000"
      data-testid="section-impact"
    >
      {/* Rotating 3D Graphic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-cosmic-space-blue to-cosmic-cosmic-purple rounded-lg animate-rotate-3d"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 opacity-10">
          <div className="w-full h-full bg-gradient-to-tl from-cosmic-cosmic-purple to-cosmic-space-blue rounded-full animate-rotate-3d" style={{ animationDelay: '2s' }}></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-cosmic-space-blue to-white rounded-lg animate-rotate-3d" style={{ animationDelay: '4s' }}></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header with Dynamic Color Transition */}
        <AnimatedSection animationType="fade-up" className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-light text-white mb-6 tracking-tight transition-colors duration-1000"
            data-testid="text-impact-title"
          >
            Impact & <span className="font-semibold bg-gradient-to-r from-cosmic-space-blue to-cosmic-cosmic-purple bg-clip-text text-transparent">Legacy</span>
          </h2>
          <p 
            className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto transition-colors duration-1000"
            data-testid="text-impact-subtitle"
          >
            True success is measured not by what we achieve for ourselves, but by the positive 
            change we create for others and the lasting impact we leave behind.
          </p>
        </AnimatedSection>

        {/* Impact Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection animationType="slide-left" delay={200}>
            <CosmicCard
              title="Mentoring Future Leaders"
              description="Empowering the next generation of technologists and innovators through education, guidance, and opportunities."
              icon={<Users className="w-6 h-6 text-cosmic-space-blue" />}
              features={[
                "1000+ mentees across 5 continents",
                "Annual scholarship program",
                "Open-source educational platform",
                "Industry diversity initiatives"
              ]}
              variant="dark"
              actionLabel="Join Program"
              onActionClick={() => handleImpactAction('Mentoring')}
            />
          </AnimatedSection>

          <AnimatedSection animationType="slide-left" delay={400}>
            <CosmicCard
              title="Environmental Technology"
              description="Developing and supporting technologies that address climate change and promote environmental sustainability."
              icon={<TreePine className="w-6 h-6 text-cosmic-cosmic-purple" />}
              features={[
                "Carbon-negative data centers",
                "Clean energy initiatives",
                "Sustainable software practices",
                "Environmental impact measurement"
              ]}
              variant="dark"
              actionLabel="Learn More"
              onActionClick={() => handleImpactAction('Environment')}
            />
          </AnimatedSection>

          <AnimatedSection animationType="slide-left" delay={600}>
            <CosmicCard
              title="Innovation for Good"
              description="Creating and funding projects that use technology to solve pressing social and humanitarian challenges."
              icon={<Lightbulb className="w-6 h-6 text-cosmic-space-blue" />}
              features={[
                "Healthcare accessibility tools",
                "Education equality platforms",
                "Disaster relief technologies",
                "Community empowerment systems"
              ]}
              variant="dark"
              actionLabel="View Projects"
              onActionClick={() => handleImpactAction('Innovation')}
            />
          </AnimatedSection>

          <AnimatedSection animationType="slide-left" delay={800}>
            <CosmicCard
              title="Legacy Foundation"
              description="Establishing an endowment that continues to support education, innovation, and social impact long after my career."
              icon={<Award className="w-6 h-6 text-cosmic-cosmic-purple" />}
              features={[
                "Educational scholarships",
                "Research grants program",
                "Community development funds",
                "Innovation lab network"
              ]}
              variant="dark"
              actionLabel="Read Vision"
              onActionClick={() => handleImpactAction('Foundation')}
            />
          </AnimatedSection>
        </div>

        {/* Legacy Statement */}
        <AnimatedSection animationType="fade-up" delay={1000}>
          <div className="text-center">
            <div className="max-w-4xl mx-auto p-8 rounded-lg border border-cosmic-silver/20 bg-cosmic-deep-blue/20 backdrop-blur-sm">
              <h3 
                className="text-2xl font-semibold text-white mb-6"
                data-testid="text-legacy-statement-title"
              >
                My Legacy Manifesto
              </h3>
              <blockquote 
                className="text-xl md:text-2xl font-light text-white/90 leading-relaxed mb-8"
                data-testid="text-legacy-statement"
              >
                "I want to be remembered not for the code I wrote or the companies I built, 
                but for the barriers I helped break down, the opportunities I created for others, 
                and the positive change I sparked in the world. Success is temporary, but impact is eternal."
              </blockquote>
              
              <Button
                size="lg"
                variant="outline"
                onClick={handleManifestoClick}
                className="border-white/30 text-white hover:bg-white/10 transition-all duration-300 px-8 py-3 text-lg font-medium hover-elevate"
                data-testid="button-manifesto"
              >
                Read Full Manifesto
              </Button>
            </div>
          </div>
        </AnimatedSection>

        {/* Impact Metrics Preview */}
        <AnimatedSection animationType="fade-up" delay={1200} className="mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10M+", label: "Lives Impacted", testId: "metric-lives" },
              { number: "100K+", label: "Students Mentored", testId: "metric-students" },
              { number: "50+", label: "Countries Reached", testId: "metric-countries" },
              { number: "$100M+", label: "Social Impact Investment", testId: "metric-investment" }
            ].map((metric, index) => (
              <div key={metric.label} className="group">
                <div 
                  className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cosmic-silver transition-colors duration-300"
                  data-testid={`${metric.testId}-number`}
                >
                  {metric.number}
                </div>
                <div 
                  className="text-sm text-white/70 uppercase tracking-wider"
                  data-testid={`${metric.testId}-label`}
                >
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}