import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface CosmicCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  features?: string[];
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
  onActionClick?: () => void;
  actionLabel?: string;
}

export default function CosmicCard({
  title,
  description,
  icon,
  features = [],
  variant = 'default',
  className = '',
  onActionClick,
  actionLabel = 'Learn More'
}: CosmicCardProps) {

  const getCardClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-cosmic-infinite-black/90 border-cosmic-silver/20 text-white backdrop-blur-sm';
      case 'gradient':
        return 'bg-gradient-to-br from-cosmic-deep-blue/20 to-cosmic-starlight-purple/20 border-cosmic-silver/30 backdrop-blur-sm';
      default:
        return 'bg-white/95 border-cosmic-silver/30 backdrop-blur-sm';
    }
  };

  const handleActionClick = () => {
    console.log(`CosmicCard: ${actionLabel} clicked for ${title}`);
    onActionClick?.();
  };

  return (
    <Card 
      className={`${getCardClasses()} hover-elevate transition-all duration-500 group ${className}`}
      data-testid={`card-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="p-8">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-6">
          {icon && (
            <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
              variant === 'dark' ? 'bg-cosmic-silver/20' : 'bg-cosmic-deep-blue/10'
            }`}>
              {icon}
            </div>
          )}
          <div className="flex-1">
            <h3 
              className={`text-2xl font-semibold mb-3 ${
                variant === 'dark' ? 'text-white' : 'text-cosmic-infinite-black'
              }`}
              data-testid={`text-${title.toLowerCase().replace(/\s+/g, '-')}-title`}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p 
          className={`text-lg leading-relaxed mb-6 ${
            variant === 'dark' ? 'text-white/80' : 'text-muted-foreground'
          }`}
          data-testid={`text-${title.toLowerCase().replace(/\s+/g, '-')}-description`}
        >
          {description}
        </p>

        {/* Features */}
        {features.length > 0 && (
          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <li 
                key={index}
                className={`flex items-center gap-3 ${
                  variant === 'dark' ? 'text-white/70' : 'text-muted-foreground'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  variant === 'dark' ? 'bg-cosmic-silver' : 'bg-cosmic-deep-blue'
                }`} />
                <span data-testid={`text-feature-${index}`}>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Action Button */}
        {onActionClick && (
          <Button
            variant={variant === 'dark' ? 'outline' : 'ghost'}
            onClick={handleActionClick}
            className={`group-hover:translate-x-1 transition-transform duration-300 ${
              variant === 'dark' 
                ? 'border-cosmic-silver/40 text-white hover:bg-cosmic-silver/10' 
                : 'text-cosmic-deep-blue hover:bg-cosmic-deep-blue/10'
            }`}
            data-testid={`button-${title.toLowerCase().replace(/\s+/g, '-')}-action`}
          >
            {actionLabel}
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Button>
        )}
      </div>
    </Card>
  );
}