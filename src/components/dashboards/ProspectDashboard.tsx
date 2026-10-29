'use client';

import React from 'react';
import { ShieldCheck, Users } from 'lucide-react';

export const ProspectDashboard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-2xl relative z-10">
      <div className="flex items-center justify-between pb-5 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-rose-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="text-xs font-semibold text-slate-400 ml-2">KnobTech Intelligence v2.4</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">Live Engine</div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
          <div className="text-xs font-medium text-slate-500 mb-1">Prospects Found</div>
          <div className="text-xl font-bold text-slate-900">12,480</div>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
          <div className="text-xs font-medium text-slate-500 mb-1">Verified Emails</div>
          <div className="text-xl font-bold text-slate-900">10,842</div>
        </div>
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 col-span-2 sm:col-span-1">
          <div className="text-xs font-medium text-slate-500 mb-1">Decision Makers</div>
          <div className="text-xl font-bold text-slate-900">7,320</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 text-white mb-6 shadow-md">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-blue-100 uppercase">Outbound Campaign Performance</span>
          <span className="text-sm font-bold bg-white/20 px-2.5 py-0.5 rounded-full">Reply Rate 8.7%</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Recent Prospect Matches</div>
        <div className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/60">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">JS</div>
            <div>
              <div className="text-xs font-bold text-slate-900">Johnathan Smith</div>
              <div className="text-[11px] text-slate-500">CEO • Apex Software Solutions</div>
            </div>
          </div>
          <div className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 text-[10px] font-bold">✓ Verified</div>
        </div>
      </div>
    </div>
  );
};