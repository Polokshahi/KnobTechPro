import React from 'react';

export const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
    </div>
  );
};