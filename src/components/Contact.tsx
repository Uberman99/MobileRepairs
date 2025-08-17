import QuoteForm from '@/components/QuoteForm';

export default function Contact() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="font-display text-3xl font-medium tracking-tighter sm:text-5xl">Get a Free Quote</h2>
            <p className="max-w-[900px] text-neutral-600 md:text-xl/relaxed">
              Have a question or need a repair estimate? Fill out the form below.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-2xl p-8 bg-background rounded-2xl shadow-2xl border border-border">
            <QuoteForm />
        </div>
      </div>
    </section>
  );
}
