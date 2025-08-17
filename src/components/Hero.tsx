import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image Layer */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      ></div>
      {/* Overlay Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content Layer */}
      <div className="relative z-10 text-center text-white p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Fast, Reliable Phone Repair
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Certified Technicians for iPhone, Samsung & Google Devices.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <Link href="/#quote-form" className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get a Free Quote
          </Link>
          <Link href="/services" className="border-2 border-white text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-white hover:text-black transition-colors">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;