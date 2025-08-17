// src/components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl">
              Fast, Reliable Mobile Repairs
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Cracked screens, battery replacements, and water damage. We fix it all with professional service and a quick turnaround.
            </p>
          </div>
          <div className="space-x-4">
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-950 disabled:pointer-events-none disabled:opacity-50"
              href="/booking"
            >
              Book Now
            </Link>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
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