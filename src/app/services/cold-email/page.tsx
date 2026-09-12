import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

export default function ColdEmailPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-200 text-center">
        <h1 className="text-4xl font-bold">Cold Email Outreach</h1>
        <p className="text-slate-600 mt-2">Turn qualified prospect data into structured, high-converting outbound campaigns.</p>
      </div>
      <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-6">Outreach Infrastructure & Execution</h2>
        <div className="space-y-4 mb-12">
          {['Domain setup & warm-up infrastructure', 'Precision ICP segmentation & copywriting', 'Dynamic email personalization sequences', 'Deliverability monitoring & optimization'].map((item, i) => (
            <div key={i} className="flex items-center gap-3 font-semibold text-slate-800">
              <Check className="w-5 h-5 text-blue-600" /> <span>{item}</span>
            </div>
          ))}
        </div>
        <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold">
          <span>Build My Campaign</span> <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
      <Footer />
    </main>
  );
}