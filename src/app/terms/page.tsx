import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">Last updated: January 2026</p>
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <p>By engaging KnobTech Pro for B2B growth, data research, or software engineering services, you agree to these commercial terms.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}