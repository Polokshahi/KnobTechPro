import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-sm text-slate-600 leading-relaxed mb-4">Last updated: January 2026</p>
        <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
          <p>At KnobTech Pro, we respect your privacy and are committed to protecting any data you share with us during B2B engagements, lead research, and software development projects.</p>
          <h2 className="text-lg font-bold text-slate-900 mt-6">Information We Collect</h2>
          <p>We collect contact details and project requirements submitted directly through our strategy call and inquiry forms.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}