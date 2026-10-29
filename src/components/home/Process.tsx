'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const Process = () => {
  const steps = [
    { number: '01', title: 'Discovery', desc: 'Define your ICP and exact requirements.' },
    { number: '02', title: 'Targeting', desc: 'Establish precise filtering criteria.' },
    { number: '03', title: 'Research', desc: 'Extract and compile pristine prospect records.' },
    { number: '04', title: 'Verification', desc: 'Multi-tier email validation for zero bounces.' }
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">A simple process built for results.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((s, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              <span className="font-mono text-xl font-bold text-blue-600 mb-4 block">{s.number}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700">
            <span>Start Your Growth Project</span> <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};