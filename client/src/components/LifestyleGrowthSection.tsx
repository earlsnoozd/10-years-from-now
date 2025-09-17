import { Heart, Book, Globe, Home } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function LifestyleGrowthSection() {
  const growthAreas = [
    {
      icon: <Heart className="w-8 h-8 text-cosmic-deep-blue" />,
      title: "Wellness & Balance",
      description: "Maintaining physical and mental health through mindful practices, regular exercise, and meaningful relationships.",
      goals: ["Daily meditation practice", "Marathon completion", "Work-life harmony"]
    },
    {
      icon: <Book className="w-8 h-8 text-cosmic-deep-blue" />,
      title: "Continuous Learning",
      description: "Expanding knowledge across diverse fields to stay curious, adaptable, and intellectually engaged.",
      goals: ["Master new programming languages", "Philosophy & ethics courses", "Creative writing development"]
    },
    {
      icon: <Globe className="w-8 h-8 text-cosmic-deep-blue" />,
      title: "Global Perspective",
      description: "Experiencing different cultures, building international networks, and contributing to global conversations.",
      goals: ["Live in 3 different countries", "Multilingual fluency", "Cultural exchange programs"]
    },
    {
      icon: <Home className="w-8 h-8 text-cosmic-deep-blue" />,
      title: "Personal Sanctuary",
      description: "Creating a living space that reflects my values, supports creativity, and welcomes meaningful connections.",
      goals: ["Sustainable architecture", "Art & book collections", "Community gathering space"]
    }
  ];

  const handleGoalClick = (area: string, goal: string) => {
    console.log(`Lifestyle Growth: ${area} - ${goal} clicked`);
  };

  return (
    <section 
      id="lifestyle" 
      className="py-24 px-8 bg-white relative"
      data-testid="section-lifestyle"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection animationType="fade-up" className="text-center mb-20">
          <h2 
            className="text-4xl md:text-5xl font-light text-cosmic-infinite-black mb-6 tracking-tight"
            data-testid="text-lifestyle-title"
          >
            Lifestyle & <span className="font-semibold">Growth</span>
          </h2>
          <p 
            className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            data-testid="text-lifestyle-subtitle"
          >
            Personal development is a continuous journey. These are the areas where I'm committed 
            to growing, exploring, and becoming the person I aspire to be.
          </p>
        </AnimatedSection>

        {/* Growth Areas */}
        <div className="grid md:grid-cols-2 gap-16">
          {growthAreas.map((area, index) => (
            <AnimatedSection 
              key={area.title}
              animationType="fade-up" 
              delay={index * 200}
              className="group"
            >
              <div className="text-center md:text-left">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-cosmic-soft-overlay rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>

                {/* Content */}
                <h3 
                  className="text-2xl font-semibold text-cosmic-infinite-black mb-4"
                  data-testid={`text-${area.title.toLowerCase().replace(/\s+/g, '-')}-title`}
                >
                  {area.title}
                </h3>

                <p 
                  className="text-muted-foreground leading-relaxed mb-6 text-lg"
                  data-testid={`text-${area.title.toLowerCase().replace(/\s+/g, '-')}-description`}
                >
                  {area.description}
                </p>

                {/* Goals */}
                <div className="space-y-3">
                  {area.goals.map((goal, goalIndex) => (
                    <button
                      key={goalIndex}
                      onClick={() => handleGoalClick(area.title, goal)}
                      className="flex items-center gap-3 text-left hover:text-cosmic-deep-blue transition-colors duration-200 group/goal"
                      data-testid={`button-goal-${goalIndex}`}
                    >
                      <div className="w-2 h-2 rounded-full bg-cosmic-silver group-hover/goal:bg-cosmic-deep-blue transition-colors duration-200 flex-shrink-0"></div>
                      <span className="text-sm font-medium group-hover/goal:translate-x-1 transition-transform duration-200">
                        {goal}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Growth Philosophy */}
        <AnimatedSection animationType="fade-up" delay={1000} className="mt-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="border-t border-cosmic-silver/30 pt-16">
              <h3 
                className="text-2xl font-light text-cosmic-infinite-black mb-6"
                data-testid="text-growth-philosophy-title"
              >
                Growth Philosophy
              </h3>
              <p 
                className="text-lg text-muted-foreground leading-relaxed italic"
                data-testid="text-growth-philosophy"
              >
                "Personal growth isn't about reaching a destination—it's about embracing the journey 
                with curiosity, resilience, and an open heart. Every day offers new opportunities 
                to become more aligned with our authentic selves."
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}