import Header from './Header';
import Hero from './Hero';
import FeatureSection from './FeatureSection';
import TestimonialsSection from './TestimonialsSection';
import Faq from './Faq';
import Call from './Call';

export default function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <FeatureSection />
      <TestimonialsSection />
      <Faq />
      <Call />
    </div>
  );
}