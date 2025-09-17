import Navigation from '../Navigation';

export default function NavigationExample() {
  return <Navigation activeSection="career" onSectionClick={(section) => console.log('Clicked:', section)} />;
}