import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { servicesData } from '@/data/services';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <div className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Core Services</h2>
            <p className="text-lg text-slate-600">From targeted prospect research to outbound campaigns and custom technology.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xl font-bold text-blue-600 mb-4 block">{service.number}</span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6">{service.description}</p>
                </div>
                <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  <span>{service.ctaText}</span> <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  );
}