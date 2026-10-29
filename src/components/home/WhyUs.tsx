'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowDown } from 'lucide-react';

export const WhyUs = () => {
  const steps = ['Research', 'Enrich', 'Verify', 'Segment', 'Outreach', 'Convert'];
  const points = [
    { title: 'Targeted, Not Random', description: 'Every campaign starts with a clearly defined ideal customer profile.' },
    { title: 'Quality-Focused Data', description: 'Research and verification are prioritized over unverified volume.' },
    { title: 'Technology + Marketing', description: 'Combine outbound expertise with automation and software development.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">More than data. We build growth systems.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-8 flex flex-col items-center justify-center">
            <div className="w-full max-w-xs space-y-3">
              {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="w-full bg-white border border-slate-200 rounded-xl py-3 px-6 text-center shadow-sm font-semibold text-slate-800 text-sm flex items-center justify-between">
                    <span className="font-mono text-xs text-blue-600 font-bold">0{idx + 1}</span>
                    <span>{step}</span>
                  </div>
                  {idx < steps.length - 1 && <ArrowDown className="w-4 h-4 text-blue-500 my-1" />}
                </div>
              ))}
            </div>
          </motion.div>
          <div className="lg:col-span-7 space-y-6">
            {points.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 border border-slate-200 rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0"><CheckCircle className="w-5 h-5" /></div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{pt.title}</h3>
                  <p className="text-slate-600 text-sm">{pt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};