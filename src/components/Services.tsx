// src/components/Services.tsx
// Placeholder icons - you can replace these with actual SVGs later
const ScreenIcon = () => <span>📱</span>;
const BatteryIcon = () => <span>🔋</span>;
const WaterIcon = () => <span>💧</span>;

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Core Services</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We use only the highest quality parts to ensure your device works like new.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          <div className="grid gap-1 text-center p-6 rounded-lg border bg-gray-50">
            <h3 className="text-lg font-bold flex items-center justify-center gap-2"><ScreenIcon /> Screen Repair</h3>
            <p className="text-sm text-gray-500">Cracked or unresponsive screen? We'll replace it with a brand new, high-quality display.</p>
          </div>
          <div className="grid gap-1 text-center p-6 rounded-lg border bg-gray-50">
            <h3 className="text-lg font-bold flex items-center justify-center gap-2"><BatteryIcon /> Battery Replacement</h3>
            <p className="text-sm text-gray-500">If your phone doesn't hold a charge, we can swap in a new battery to restore its longevity.</p>
          </div>
          <div className="grid gap-1 text-center p-6 rounded-lg border bg-gray-50">
            <h3 className="text-lg font-bold flex items-center justify-center gap-2"><WaterIcon /> Water Damage</h3>
            <p className="text-sm text-gray-500">Accidents happen. We offer professional diagnostics and repair for water-damaged devices.</p>
          </div>
        </div>
      </div>
    </section>
  );
}