 'use client';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-4 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between rounded-full border border-border bg-white/70 px-6 shadow-lg backdrop-blur-lg">
            <Link className="flex items-center justify-center gap-2" href="/">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-display font-bold text-foreground text-xl">Revive Repairs</span>
          </Link>
          <nav className="hidden sm:flex gap-6">
            <Link className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" href="/services">Services</Link>
            <Link className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" href="/about">About</Link>
            <Link className="text-sm font-medium text-neutral-600 hover:text-primary transition-colors" href="/contact">Contact</Link>
          </nav>
            <Link href="/contact" className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-blue-500/20 transition-all hover:bg-primary-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
              Get a Quote
          </Link>
        </div>
      </div>
    </motion.header>
  );
}