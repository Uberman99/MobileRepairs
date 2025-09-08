// src/app/contact/page.tsx
import QuoteForm from '@/components/QuoteForm';

export default function ContactPage() {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg leading-6 text-gray-500">
          Submit a quote request below, and we&apos;ll get back to you shortly.
        </p>
      </div>
      <div className="mt-12">
        <QuoteForm />
      </div>
    </div>
  );
}
