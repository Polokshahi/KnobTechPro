import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { faqData } from '@/data/faq';
import Link from 'next/link';
import { ArrowRight, HelpCircle } from 'lucide-react';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header Banner */}
      <div className="pt-32 pb-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase mb-4">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our B2B lead generation, cold email outreach, data research, and software development services.
          </p>
        </div>
      </div>

      {/* FAQ List Section */}
      <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {faqData.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-slate-50/50 border border-slate-200 rounded-3xl p-8 shadow-sm hover:border-blue-300 transition-colors"
            >
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-start gap-3">
                <span className="font-mono text-blue-600 text-sm mt-0.5">0{idx + 1}.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 bg-slate-900 text-white rounded-3xl p-10 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 relative z-10">Have a specific question not listed here?</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto mb-8 relative z-10">
            Our growth and engineering leadership team is ready to discuss your custom project requirements and data goals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-all relative z-10"
          >
            <span>Book a Free Strategy Call</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}