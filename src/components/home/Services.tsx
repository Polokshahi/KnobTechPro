'use client';

import React from 'react';
import { servicesData } from '@/data/services';
import { motion } from 'framer-motion';
import { Users, Mail, Database,  Code, Cpu, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = { Users, Mail, Database,  Code, Cpu };

export const Services = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">Everything you need to build a stronger outbound engine.</h2>
          <p className="text-lg text-slate-600">From targeted prospect research to outbound campaigns and custom technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Database;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.1 }} className="bg-white border border-slate-200 rounded-[24px] p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center"><IconComponent className="w-6 h-6" /></div>
                    <span className="font-mono text-xl font-bold text-slate-300">{service.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-6">{service.description}</p>
                  <div className="space-y-2.5 mb-8">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                        <Check className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                    <span>{service.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};