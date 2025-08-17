
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Booking />
      <About />
      {/* The <Contact /> component will go here next */}
    </main>
  );
}

