import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-secondary">
      <div className="container mx-auto flex flex-col gap-4 sm:flex-row py-6 shrink-0 items-center px-4 md:px-6">
         <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="font-display font-bold text-foreground">Revive Repairs</span>
          </div>
        <p className="text-xs text-muted-foreground sm:pl-4 sm:border-l sm:border-muted">© 2025 Revive Repairs. All Rights Reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-primary" href="/services">Services</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-primary" href="/about">About</Link>
          <Link className="text-xs hover:underline underline-offset-4 text-muted-foreground hover:text-primary" href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}