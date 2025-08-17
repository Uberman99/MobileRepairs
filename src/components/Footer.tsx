// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500">
        © 2025 ShopMobile Repairs. All Rights Reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="/services">
          Services
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="/about">
          About
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="/contact">
          Contact
        </Link>
      </nav>
    </footer>
  );
}```

**File: `src/components/Hero.tsx`**

```typescript
// src/components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Fast, Reliable Mobile Repairs
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              [PLACEHOLDER: This is the Hero component. Your main value proposition goes here. Cracked screens, battery replacements, and more.]
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="/booking"
            >
              Book Now
            </Link>
            <Link
              className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
              href="/contact"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}