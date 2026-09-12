import React from 'react';

interface MetricCardProps {
  label: string;
  value: string;
  trend?: string;
}

export const MetricCard = ({ label, value, trend }: MetricCardProps) => {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
      <div className="text-xs font-medium text-slate-500 mb-1">{label}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
      {trend && <div className="text-[10px] text-emerald-600 font-semibold mt-1">{trend}</div>}
    </div>
  );
};