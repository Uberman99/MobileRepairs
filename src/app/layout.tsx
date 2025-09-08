// src/app/layout.tsx
import type { Metadata } from 'next';
import { Exo_2, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontDisplay = Exo_2({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Revive Repairs | Your Device Lifeline',
  description: 'Expert repairs for phones, tablets, and more. We bring your tech back to life.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className={cn("relative h-full font-sans antialiased", fontSans.variable, fontDisplay.variable)}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
