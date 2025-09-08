// src/app/page.tsx
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Booking from '@/components/Booking';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Booking />
      <About />
      <Contact />
    </main>
  );
}
