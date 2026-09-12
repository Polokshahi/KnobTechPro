import React from 'react';
import { faqData } from '@/data/faq';

export const FAQ = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqData.slice(0, 5).map((faq, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="font-bold text-base mb-2">{faq.question}</h3>
              <p className="text-sm text-slate-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};