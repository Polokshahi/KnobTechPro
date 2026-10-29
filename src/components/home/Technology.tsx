import React from 'react';
import { technologiesData } from '@/data/stats';

export const Technology = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Modern technology. Built for scale.</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">We use modern technologies to build reliable and scalable systems.</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {technologiesData.map((tech, idx) => (
            <div key={idx} className="px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm shadow-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};