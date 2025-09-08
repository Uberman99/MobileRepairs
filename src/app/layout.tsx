// src/app/layout.tsx
import type { Metadata } from 'next';
import { Lora, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const fontSans = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-sans',
});

const fontDisplay = Lora({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'ShopMobile Repairs | Expert Device Repair',
  description: 'Fast, reliable, and professional mobile phone and device repairs.',
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