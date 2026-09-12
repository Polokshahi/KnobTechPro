import React from 'react';
import { testimonialsData } from '@/data/testimonials';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">What clients say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((t) => (
            <div key={t.id} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex gap-1 text-amber-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}</div>
                <p className="text-slate-700 text-sm italic mb-6">&ldquo;{t.quote}&rdquo;</p>
              </div>
              <div className="text-xs font-bold text-slate-900">{t.clientName} <span className="text-slate-500 font-normal">({t.company})</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};