import AnimatedSection from '../AnimatedSection';
import { Card } from '@/components/ui/card';

export default function AnimatedSectionExample() {
  return (
    <div className="space-y-8 p-8">
      <AnimatedSection animationType="fade-up">
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Fade Up Animation</h3>
          <p className="text-muted-foreground">This content fades up when scrolled into view.</p>
        </Card>
      </AnimatedSection>

      <AnimatedSection animationType="slide-left" delay={200}>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Slide Left Animation</h3>
          <p className="text-muted-foreground">This content slides in from the left with a delay.</p>
        </Card>
      </AnimatedSection>

      <AnimatedSection animationType="scale" delay={400}>
        <Card className="p-6">
          <h3 className="text-lg font-semibold">Scale Animation</h3>
          <p className="text-muted-foreground">This content scales up when visible.</p>
        </Card>
      </AnimatedSection>
    </div>
  );
}