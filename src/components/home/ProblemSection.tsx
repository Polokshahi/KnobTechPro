'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, TrendingDown, ArrowRight } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    { number: '01', icon: AlertCircle, title: 'Poor Lead Quality', description: 'Generic databases and outdated contact lists create wasted outreach and low conversion.' },
    { number: '02', icon: Clock, title: 'Manual Prospecting', description: 'Your team spends hours searching LinkedIn, company websites, directories and databases.' },
    { number: '03', icon: TrendingDown, title: 'Low Outreach Performance', description: 'Without the right targeting, personalization and deliverability, even great offers get ignored.' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Your sales team shouldn&apos;t waste hours hunting for prospects.
          </h2>
          <p className="text-lg text-slate-600">Outdated data and manual prospecting bottlenecks starve your pipeline.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {problems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600"><Icon className="w-6 h-6" /></div>
                  <span className="font-mono text-xl font-bold text-slate-300">{item.number}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};