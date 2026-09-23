import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { servicesData } from '@/data/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-200 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Our Services</h1>
        <p className="text-slate-600 mt-2">Engineered data intelligence and full-stack software development.</p>
      </div>
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((s) => {
  const Icon = s.Icon;

  return (
    <div
      key={s.id}
      className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600">
        <Icon className="h-5 w-5" />
      </span>

      <h3 className="text-xl text-black font-bold mt-5 mb-3">{s.title}</h3>

      <p className="text-sm text-slate-600 mb-6">{s.description}</p>

      <Link
        href={`/services/${s.id}`}
        className="text-blue-600 font-semibold text-sm flex items-center gap-2"
      >
        Get Started
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
})}
        </div>
      </div>
      <Footer />
    </main>
  );
}""