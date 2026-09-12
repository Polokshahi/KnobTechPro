import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { caseStudiesData } from '@/data/case-studies';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-200 text-center">
        <h1 className="text-4xl font-bold text-slate-900">Case Studies</h1>
      </div>
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {caseStudiesData.map((cs) => (
          <div key={cs.id} className="border border-slate-200 rounded-3xl p-8">
            <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-bold">{cs.industry}</span>
            <h3 className="text-xl font-bold mt-4 mb-2">{cs.title}</h3>
            <p className="text-sm text-slate-600 mb-6">{cs.challenge}</p>
            <Link href="/contact" className="text-blue-600 font-semibold text-sm">View Details →</Link>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}