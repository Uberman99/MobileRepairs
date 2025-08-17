// src/components/Booking.tsx
import Link from 'next/link';

export default function Booking() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="font-display text-3xl font-medium tracking-tighter md:text-4xl/tight">
            Ready to Get Your Device Fixed?
          </h2>
          <p className="mx-auto max-w-[600px] text-neutral-600 md:text-xl/relaxed">
            Our certified technicians are ready to help. Book your repair by requesting a quote, and we&apos;ll get in touch to schedule your service.
          </p>
        </div>
        <div className="mx-auto w-full max-w-sm space-y-2">
           <Link
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-white shadow-lg transition-transform hover:scale-105"
              href="/contact"
            >
              Request a Quote
            </Link>
        </div>
      </div>
    </section>
  );
}