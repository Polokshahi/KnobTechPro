import React from 'react';
import { Mail } from 'lucide-react';

export const CampaignDashboard = () => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Mail className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase">Active Campaign</div>
            <div className="text-sm font-bold text-slate-900">Q3 B2B Enterprise Outreach</div>
          </div>
        </div>
        <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold">Running</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs text-slate-500 font-medium">Prospects</div>
          <div className="text-lg font-bold text-slate-900">4,280</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs text-slate-500 font-medium">Emails Sent</div>
          <div className="text-lg font-bold text-slate-900">3,950</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs text-slate-500 font-medium">Open Rate</div>
          <div className="text-lg font-bold text-blue-600">62.4%</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
          <div className="text-xs text-slate-500 font-medium">Reply Rate</div>
          <div className="text-lg font-bold text-emerald-600">8.7%</div>
        </div>
      </div>
    </div>
  );
};