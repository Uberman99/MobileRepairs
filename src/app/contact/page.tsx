// src/app/contact/page.tsx
import QuoteForm from '@/components/QuoteForm'; // Assuming contact is a quote form for now

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center mb-8">Submit a quote request below.</p>
        <QuoteForm />
      </div>
    </main>
  );
}