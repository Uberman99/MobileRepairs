'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="relative w-full py-24 md:py-32 lg:py-48 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="font-display text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl lg:text-9xl">
              Expert Repairs, Restored.
            </h1>
            <p className="mx-auto max-w-[700px] text-slate-300 md:text-xl">
              We bring your essential devices back to perfect condition with expert care and precision.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow-lg transition-transform hover:scale-105"
              href="/contact"
            >
              Get a Free Quote
            </Link>
             <Link
              className="inline-flex h-12 items-center justify-center rounded-full bg-secondary px-8 text-sm font-medium text-secondary-foreground shadow-lg transition-transform hover:scale-105"
              href="/services"
            >
              View Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}