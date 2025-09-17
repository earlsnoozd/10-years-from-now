import CosmicCard from '../CosmicCard';

const RocketIcon = () => (
  <svg className="w-6 h-6 text-cosmic-deep-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

export default function CosmicCardExample() {
  return (
    <div className="grid gap-8 p-8 bg-soft-gradient min-h-screen">
      <CosmicCard
        title="Future Innovation"
        description="Exploring the boundaries of what's possible with cutting-edge technology and forward-thinking approaches."
        icon={<RocketIcon />}
        features={[
          "Advanced AI Integration",
          "Sustainable Technology Focus", 
          "Global Impact Initiatives"
        ]}
        variant="default"
        actionLabel="Discover More"
        onActionClick={() => console.log('Innovation card clicked')}
      />

      <CosmicCard
        title="Dark Mode Vision"
        description="A bold approach to the future with confidence and determination."
        icon={<RocketIcon />}
        variant="dark"
        features={[
          "Strategic Leadership",
          "Market Disruption",
          "Visionary Thinking"
        ]}
        onActionClick={() => console.log('Dark card clicked')}
      />

      <CosmicCard
        title="Cosmic Gradient"
        description="Bridging the gap between today and tomorrow with elegant solutions."
        icon={<RocketIcon />}
        variant="gradient"
        features={[
          "Creative Excellence",
          "Technical Mastery",
          "Innovative Solutions"
        ]}
        onActionClick={() => console.log('Gradient card clicked')}
      />
    </div>
  );
}