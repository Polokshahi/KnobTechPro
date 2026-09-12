import React from 'react';

export const Marquee = ({ items }: { items: string[] }) => {
  return (
    <div className="flex overflow-x-auto space-x-6 py-4 no-scrollbar">
      {items.map((item, idx) => (
        <div key={idx} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl whitespace-nowrap text-sm font-semibold text-slate-700 shadow-sm">
          {item}
        </div>
      ))}
    </div>
  );
};