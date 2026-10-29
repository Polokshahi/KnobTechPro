import React from 'react';
import Link from 'next/link';

export const EngagementModels = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">Flexible engagement models.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {['Lead Generation', 'Outbound Growth', 'Technology'].map((model, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-[24px] p-8 text-left flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">{model}</h3>
                <div className="text-2xl font-extrabold text-blue-600 mb-6">Custom Quote</div>
              </div>
              <Link href="/contact" className="w-full py-3 rounded-xl bg-slate-900 text-white text-center font-semibold text-sm hover:bg-blue-600 transition-colors">Get Started</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};