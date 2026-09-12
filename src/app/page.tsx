import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/home/Hero';
import { servicesData } from '@/data/services';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ContactForm } from '@/components/forms/ContactForm';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white" suppressHydrationWarning>
      <Navbar />
      <Hero />
      <div className="py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Core Services</h2>
            <p className="text-lg text-slate-600">From targeted prospect research to outbound campaigns and custom technology.</p>
          </div>






          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
  {servicesData.slice(0, 3).map((service) => (
    <div
      key={service.id}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]"
    >
      {/* Subtle hover glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-50 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-between">
        <div>
          {/* Top row */}
          <div className="mb-8 flex items-center justify-between">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-sm font-bold text-blue-600">
              {service.number}
            </span>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </div>

          {/* Content */}
          <h3 className="mb-3 text-xl font-bold tracking-tight text-slate-900 lg:text-[22px]">
            {service.title}
          </h3>

          <p className="max-w-sm text-[15px] leading-7 text-slate-500">
            {service.description}
          </p>
        </div>

        {/* Bottom CTA */}
        <Link
          href="/services"
          className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-blue-600"
        >
          <span>{service.ctaText}</span>

          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
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