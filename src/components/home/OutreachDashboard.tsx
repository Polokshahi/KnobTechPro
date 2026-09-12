import React from 'react';
import { Mail } from 'lucide-react';

export const OutreachDashboard = () => {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl max-w-3xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center"><Mail className="w-5 h-5" /></div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase">Active Campaign</div>
                <div className="text-sm font-bold text-slate-900">Q3 B2B Enterprise Outreach</div>
              </div>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">Running</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-slate-50 p-4 rounded-2xl"><div className="text-xs text-slate-500">Prospects</div><div className="text-lg font-bold">4,280</div></div>
            <div className="bg-slate-50 p-4 rounded-2xl"><div className="text-xs text-slate-500">Emails Sent</div><div className="text-lg font-bold">3,950</div></div>
            <div className="bg-slate-50 p-4 rounded-2xl"><div className="text-xs text-slate-500">Open Rate</div><div className="text-lg font-bold text-blue-600">62.4%</div></div>
            <div className="bg-slate-50 p-4 rounded-2xl"><div className="text-xs text-slate-500">Reply Rate</div><div className="text-lg font-bold text-emerald-600">8.7%</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};