import React from 'react';
import { ProspectTable } from '@/components/dashboards/ProspectTable';
import { CheckCircle2 } from 'lucide-react';

export const DataQuality = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">We don&apos;t just collect data. We build sales-ready data.</h2>
            <p className="text-lg text-slate-600 mb-6">Rigorous multi-step verification ensures high deliverability and bounce rates under 1.5%.</p>
            <div className="space-y-3">
              {['Email verification', 'Duplicate removal', 'Job title validation', 'Data enrichment'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 font-semibold text-slate-800 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <ProspectTable />
          </div>
        </div>
      </div>
    </section>
  );
};