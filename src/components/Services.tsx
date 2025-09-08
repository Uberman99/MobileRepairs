'use client';

import { Smartphone, BatteryCharging, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-display text-3xl font-medium tracking-tighter sm:text-5xl"
          >
            Our Core Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-[900px] text-neutral-600 md:text-xl/relaxed"
          >
            Precision solutions for your most common device issues.
          </motion.p>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
          {[
            { icon: Smartphone, title: 'Screen Repair', description: 'Cracked or unresponsive? We restore your display to pristine condition.' },
            { icon: BatteryCharging, title: 'Battery Replacement', description: 'Restore your device’s life and longevity with a powerful new battery.' },
            { icon: Droplets, title: 'Water Damage', description: 'Expert diagnostics and recovery for liquid-damaged devices.' },
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative group p-8 rounded-2xl border border-border bg-white hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-center">
                <div className="flex justify-center items-center bg-accent rounded-full h-16 w-16 mx-auto mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                <p className="text-sm text-neutral-600 mt-2">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}