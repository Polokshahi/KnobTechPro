import React from 'react';
import { industriesData } from '@/data/stats';
import { Building2 } from 'lucide-react';

export const Industries = () => {
  return (
    <section className="py-24 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12">Built for growth-focused businesses.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {industriesData.map((ind, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center">
              <Building2 className="w-5 h-5 text-blue-600 mb-2" />
              <span className="font-bold text-sm text-slate-900">{ind}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};