import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactForm } from '@/components/forms/ContactForm';
import { HelpCircle, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function FAQContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Header Banner */}
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link 
              href="/faq" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to FAQ</span>
            </Link>
          </div>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase mb-4">
              <HelpCircle className="w-4 h-4" /> Need Direct Assistance?
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Ask Us Anything About Your Project
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Didn&apos;t find the exact answer in our FAQ? Submit your project requirements below, and our growth leadership team will respond within 24 hours.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}