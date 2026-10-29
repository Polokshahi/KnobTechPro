import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const ProspectTable = () => {
  const dataRows = [
    { company: 'Acme SaaS Corp', contact: 'John Smith', role: 'Chief Executive Officer', status: '✓ Verified' },
    { company: 'CloudScale Global', contact: 'Sarah Jenkins', role: 'VP of Global Marketing', status: '✓ Verified' },
    { company: 'Apex Technologies', contact: 'Michael Chang', role: 'Head of Engineering', status: '✓ Verified' },
  ];

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 shadow-xl overflow-x-auto">
      <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-blue-600" />
          <span className="font-bold text-sm text-slate-900">Validated Prospect Records</span>
        </div>
        <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-md">100% Clean</span>
      </div>

      <table className="w-full text-left border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b border-slate-200 text-xs font-bold text-slate-400 uppercase">
            <th className="pb-3 px-3">Company</th>
            <th className="pb-3 px-3">Contact</th>
            <th className="pb-3 px-3">Job Title</th>
            <th className="pb-3 px-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/60 text-xs">
          {dataRows.map((row, idx) => (
            <tr key={idx}>
              <td className="py-3.5 px-3 font-semibold text-slate-900">{row.company}</td>
              <td className="py-3.5 px-3 text-slate-700">{row.contact}</td>
              <td className="py-3.5 px-3 text-slate-500">{row.role}</td>
              <td className="py-3.5 px-3"><span className="px-2 py-1 bg-emerald-50 text-emerald-700 font-bold rounded text-[10px]">{row.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};