'use client';

import React from 'react';
import { statsData } from '@/data/stats';
import { motion } from 'framer-motion';

export const TrustStats = () => {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Built for companies that want predictable growth.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center mb-16 opacity-60">
          {['[Company A]', '[Enterprise SaaS]', '[Growth Agency]', '[Tech Partners]', '[Venture Studio]', '[ScaleUp Corp]'].map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center py-2">
              <span className="font-bold text-slate-400 text-lg tracking-wider font-mono">{logo}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 text-center shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};